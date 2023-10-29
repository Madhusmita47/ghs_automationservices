const express = require("express");

const router = express.Router();
const { createResourceMst, getResourcemstData, updateData } =require("../controller/resourceMstController")
// const { authenticateToken } = require("../middleware/authentication")

router.post("/createmstdata", createResourceMst)
router.get("/getmstdata",  getResourcemstData)
router.put("/updatercsmstdata", updateData)


module.exports = router;