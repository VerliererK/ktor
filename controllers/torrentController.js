const os = require('os')
const path = require('path')
const WebTorrent = require('webtorrent')
const client = new WebTorrent()

const DOWNLOAD_DIR = path.join(os.tmpdir(), process.env.DOWNLOAD_DIR || 'downloads')

const toFormatedTime = (ms) => {
    let seconds = ms / 1000;
    let result = "";
    const days = Math.floor((seconds % 31536000) / 86400);
    if (days > 0) result += `${days}d `;
    const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    if (hours > 0) result += `${hours}h `;
    const minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    if (minutes > 0) result += `${minutes}m `;
    seconds = ((((seconds % 31536000) % 86400) % 3600) % 60).toFixed(0);
    if (seconds > 0) result += `${seconds}s`;
    if (result === "") result += "0s";
    return result;
}

const prettyBytes = (num) => {
    var exponent,
        unit,
        neg = num < 0,
        units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    if (neg) num = -num;
    if (num < 1) return (neg ? "-" : "") + num + " B";
    exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);
    num = Number((num / Math.pow(1000, exponent)).toFixed(2));
    unit = units[exponent];
    return (neg ? "-" : "") + num + " " + unit;
}

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
        })
        torrent.on('done', () => {
            console.log(`torrent<${torrent.infoHash}> done`)
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
