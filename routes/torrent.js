const express = require('express')
const router = express.Router()
const torrentController = require('../controllers/torrentController.js')

router.get('/list', torrentController.list)
router.get('/add', torrentController.add)
router.get('/remove', torrentController.remove)

module.exports = router
