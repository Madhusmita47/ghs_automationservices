const express = require("express");

const router = express.Router()

const { createMaintainance, getmaintainanceData } = require("../controller/maintainanceController")

router.post('/createmaintainance', createMaintainance)
router.get('/getmaintainance', getmaintainanceData)

module.exports = router

// createmaintainance