const express = require("express");

const router = express.Router();
const { createresource, getResourceData, updateData } =require("../controller/resourceController")
const { authenticateToken } = require("../middleware/authentication")


router.post('/createresource',authenticateToken, createresource)
router.get('/getresource', authenticateToken,getResourceData)
router.put('/updatekey',authenticateToken, updateData)

module.exports = router;