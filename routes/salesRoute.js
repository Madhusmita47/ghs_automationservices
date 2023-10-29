const express = require("express");

const router = express.Router();
const { createSales, getSalesData,deleteSalesData, }= require("../controller/salesController")

router.post("/creatsaleoriginaldata", createSales)
router.get("/getsaleoriginaldata", getSalesData)
router.delete("/deletesaleoriginaldata", deleteSalesData)


module.exports = router;