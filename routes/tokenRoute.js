const express = require("express");

const router = express.Router();
const { insertToken } =require("../service/zohoTokenService")


router.post('/token', insertToken)



module.exports = router;