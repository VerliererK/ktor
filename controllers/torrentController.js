const os = require('os')
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const WebTorrent = require('webtorrent')
const MAX_CONNS      = process.env.MAX_CONNS * 1 || 55
const DOWNLOAD_LIMIT = process.env.DOWNLOAD_LIMIT * 1024 || 1*1024*1024 //1Mb
const UPLOAD_LIMIT   = process.env.UPLOAD_LIMIT * 1024 || 1*1024        //1Kb
const WEBSEEDS       = process.env.WEBSEEDS === 'true'
const option = {
    maxConns: MAX_CONNS,            // Max number of connections per torrent (default=55)
    downloadLimit: DOWNLOAD_LIMIT,  // Max download speed (bytes/sec) over all torrents (default=-1)
    uploadLimit: UPLOAD_LIMIT,      // Max upload speed (bytes/sec) over all torrents (default=-1)
    webSeeds: WEBSEEDS,             // Enable BEP19 web seeds (default=true)
}
console.log(JSON.stringify(option))
const client = new WebTorrent(option)

const DOWNLOAD_DIR = path.join(os.tmpdir(), process.env.DOWNLOAD_DIR || 'downloads')

const getStatus = (torrent) => {
    return {
        status: torrent.done ? 'Downloaded' : torrent.name ? 'Downloading' : 'Getting metadata',
        magnetURI: torrent.magnetURI,
        name: torrent.name,
        infoHash: torrent.infoHash,
        speed: `${utils.prettyBytes(torrent.downloadSpeed)}/s`,
        downloaded: utils.prettyBytes(torrent.downloaded),
        total: utils.prettyBytes(torrent.length),
        progress: parseInt(torrent.progress * 100),
        timeRemaining: parseInt(torrent.timeRemaining),
        redableTimeRemaining: utils.toFormatedTime(torrent.timeRemaining),
        downloadLink: `/downloads/${torrent.infoHash}`,
        done: torrent.done
    }
}

exports.list = (req, res) => {
    try {
        res.json({
            error: false,
            torrents: client.torrents.map(torrent => getStatus(torrent))
        });
    } catch (e) {
        res.json({ error: true, errorMessage: e.message });
    }
}

exports.add = (req, res) => {
    const magnetURI = req.query.magnet
    if (!magnetURI) {
        res.send({ error: true, errorMessage: 'Empty magnet' })
    } else if (magnetURI.indexOf('magnet:') !== 0) {
        res.send({ error: true, errorMessage: 'Not a magnet' })
    } else if (client.get(magnetURI)) {
        res.send({ error: true, errorMessage: 'Already added' })
    } else {
        console.log(`torrent add: ${magnetURI}`)
        var torrent = client.add(magnetURI)
        torrent.on('infoHash', () => {
            torrent.path = path.join(DOWNLOAD_DIR, torrent.infoHash)
            res.send({ error: false, infoHash: torrent.infoHash })
        })
        torrent.on('ready', () => {
            console.log(`torrent<${torrent.infoHash}> ready, path: ${torrent.path}`)
            fs.unlink(path.join(torrent.path, 'files.txt'), function(err) {})
            torrent.files.forEach((file) => {
                file.on('done', () => {
                    try {
                        fs.appendFile(path.join(torrent.path, 'files.txt'), file.path + '\n', function (err) {
                            if (err) {
                                throw err
                            }
                        })
                    }
                    catch (e) {
                        console.error(e)
                    }
                })
            })
        })
        torrent.on('done', () => {
            console.log(`torrent<${torrent.infoHash}> done`)
            torrent.pause()
        })
        torrent.on('error', (err) => {
            console.log(`torrent<${torrent.infoHash}> error: ${err}`)
        })
    }
}

exports.remove = (req, res) => {
    const magnetURI = req.query.magnet

    if (!magnetURI) {
        res.status(400).send('magnet is empty')
        return
    }
    else {
        var torrent = client.get(magnetURI)
        if (torrent) {
            console.log(`torrent remove: ${magnetURI}`)
            client.remove(magnetURI);
        }
    }

    res.sendStatus(200);
}
