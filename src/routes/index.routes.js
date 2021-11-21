const express = require('express')
const router = express.Router()
const controller = require('./src/controllers/index.controller')

router.get ("/", controller.index)

module.exports = router