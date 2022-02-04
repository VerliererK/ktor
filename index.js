const os = require('os')
const fs = require('fs')
const path = require('path')
const express = require('express')
const torrent = require('./routes/torrent')
const serveIndex = require("serve-index");
const port = parseInt(process.env.PORT, 10) || 3000
const app = express()

const DOWNLOAD_DIR = path.join(os.tmpdir(), process.env.DOWNLOAD_DIR || 'downloads')
console.log(`DOWNLOAD_DIR: ${DOWNLOAD_DIR}`)
fs.mkdir(DOWNLOAD_DIR, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!')
})

app.use("/downloads", express.static(DOWNLOAD_DIR), serveIndex(DOWNLOAD_DIR, { icons: true }))

app.use('/api/v1/torrent', torrent)

app.use("/static", express.static("client/build/static"))

app.all("*", (req, res) => res.sendFile("client/build/index.html", { root: __dirname }))

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
