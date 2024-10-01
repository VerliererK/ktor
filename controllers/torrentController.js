import os from 'os';
import fs from 'fs';
import path from 'path';
import { prettyBytes, toFormatedTime } from './utils.js';
import WebTorrent from 'webtorrent';

const MAX_CONNS = process.env.MAX_CONNS * 1 || 55;
const DOWNLOAD_LIMIT = process.env.DOWNLOAD_LIMIT * 1024 || 1 * 1024 * 1024; //1Mb
const UPLOAD_LIMIT = process.env.UPLOAD_LIMIT * 1024 || 1 * 1024;            //1Kb
const WEBSEEDS = process.env.WEBSEEDS === 'false' ? false : true;
const option = {
    maxConns: MAX_CONNS,            // Max number of connections per torrent (default=55)
    downloadLimit: DOWNLOAD_LIMIT,  // Max download speed (bytes/sec) over all torrents (default=-1)
    uploadLimit: UPLOAD_LIMIT,      // Max upload speed (bytes/sec) over all torrents (default=-1)
    webSeeds: WEBSEEDS,             // Enable BEP19 web seeds (default=true)
};
console.log(JSON.stringify(option));
const client = new WebTorrent(option);

const DOWNLOAD_DIR = path.join(os.tmpdir(), process.env.DOWNLOAD_DIR || 'downloads');

const getStatus = (torrent) => {
    return {
        status: torrent.done ? 'Downloaded' : torrent.name ? 'Downloading' : 'Getting metadata',
        magnetURI: torrent.magnetURI,
        name: torrent.name,
        infoHash: torrent.infoHash,
        speed: `${prettyBytes(torrent.downloadSpeed)}/s`,
        downloaded: prettyBytes(torrent.downloaded),
        total: prettyBytes(torrent.length),
        progress: parseInt(torrent.progress * 100),
        timeRemaining: parseInt(torrent.timeRemaining),
        redableTimeRemaining: toFormatedTime(torrent.timeRemaining),
        downloadLink: `/downloads/${torrent.infoHash}`,
        done: torrent.done,
    };
};

export const list = (req, res) => {
    try {
        res.json({
            error: false,
            torrents: client.torrents.map(torrent => getStatus(torrent)),
        });
    } catch (e) {
        res.json({ error: true, errorMessage: e.message });
    }
};

export const add = async (req, res) => {
    const magnetURI = decodeURIComponent(req.query.magnet);
    const oldTorrent = await client.get(magnetURI);
    if (!magnetURI) {
        res.send({ error: true, errorMessage: 'Empty magnet' });
    } else if (magnetURI.indexOf('magnet:') !== 0) {
        res.send({ error: true, errorMessage: 'Not a magnet' });
    } else if (oldTorrent) {
        res.send({ error: true, errorMessage: 'Already added' });
    } else {
        console.log(`torrent add: ${magnetURI}`);
        const torrent = await client.add(magnetURI);
        torrent.on('infoHash', () => {
            torrent.path = path.join(DOWNLOAD_DIR, torrent.infoHash);
            res.send({ error: false, infoHash: torrent.infoHash });
        });
        torrent.on('ready', () => {
            console.log(`torrent<${torrent.infoHash}> ready, path: ${torrent.path}`);
            fs.unlink(path.join(torrent.path, 'files.txt'), function (err) { });
            torrent.files.forEach((file) => {
                file.on('done', () => {
                    try {
                        fs.appendFile(path.join(torrent.path, 'files.txt'), file.path + '\n', function (err) {
                            if (err) {
                                throw err;
                            }
                        });
                    } catch (e) {
                        console.error(e);
                    }
                });
            });
        });
        torrent.on('done', () => {
            console.log(`torrent<${torrent.infoHash}> done`);
            torrent.pause();
        });
        torrent.on('error', (err) => {
            console.log(`torrent<${torrent.infoHash}> error: ${err}`);
        });
    }
};

export const remove = async (req, res) => {
    const magnetURI = req.query.magnet;

    if (!magnetURI) {
        res.status(400).send('magnet is empty');
        return;
    } else {
        const torrent = await client.get(magnetURI);
        if (torrent) {
            console.log(`torrent remove: ${magnetURI}`);
            await client.remove(magnetURI);
        }
    }

    res.sendStatus(200);
};
