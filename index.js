import os from 'os';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import serveIndex from 'serve-index';
import torrent from './routes/torrent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = parseInt(process.env.PORT, 10) || 3000;
const app = express();

const DOWNLOAD_DIR = path.join(os.tmpdir(), process.env.DOWNLOAD_DIR || 'downloads');
console.log(`DOWNLOAD_DIR: ${DOWNLOAD_DIR}`);
fs.mkdir(DOWNLOAD_DIR, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});

app.use("/downloads", express.static(DOWNLOAD_DIR), serveIndex(DOWNLOAD_DIR, { icons: true }));

// app.use(require('express-status-monitor')());

app.use('/api/v1/torrent', torrent);

app.use("/static", express.static("client/build/static"));

app.all("*", (req, res) => res.sendFile("client/build/index.html", { root: __dirname }));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
