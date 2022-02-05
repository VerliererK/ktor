const os = require('os')
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const WebTorrent = require('webtorrent')
const client = new WebTorrent()

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
