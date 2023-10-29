const express = require("express");

const router = express.Router();
const {  createModule, getModuleData, updateData  } = require("../controller/moduleController")
const { authenticateToken } = require("../middleware/authentication")


router.post('/createmodule', authenticateToken, createModule)
router.get('/getmoduledata', authenticateToken, getModuleData)
router.put('/updatemodule', authenticateToken, updateData)



module.exports = router;