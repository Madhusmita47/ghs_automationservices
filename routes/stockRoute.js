const express = require("express");

const router = express.Router();
const {createStock, getStockData, deleteStockData } = require("../controller/stockController")

router.post('/createsales', createStock)
router.get('/getsalesdata', getStockData)
router.get('/deletesalesdata', deleteStockData)
module.exports = router;