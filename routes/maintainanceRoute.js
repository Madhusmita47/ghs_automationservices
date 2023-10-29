const express = require("express");

const router = express.Router()

const { createMaintainance, getmaintainanceData, createTaskStatus } = require("../controller/maintainanceController")

router.post('/createmaintainance', createMaintainance)
router.get('/getmaintainance', getmaintainanceData)
router.get('/checksts', createTaskStatus)

module.exports = router

