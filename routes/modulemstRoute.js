const express = require("express");

const router = express.Router();
const { createModuleMst, getModulemstData, updateData } = require("../controller/moduleMstController")
const { authenticateToken } = require("../middleware/authentication")

router.post("/createmodulemst",  createModuleMst)
router.get("/getmodulemst", getModulemstData)
router.put("/updatemodulemstdata", updateData)


module.exports = router;