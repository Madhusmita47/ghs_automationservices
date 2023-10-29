const express = require("express");

const router = express.Router();

const { createUser, verifyOtp, resendOtp, resetPassword, login,changePassword } =require("../controller/createUserController")

router.post('/createuser', createUser)
router.post('/verifyotp', verifyOtp)
router.post('/updateotp', resendOtp)
router.post("/resetpassword", resetPassword)
router.post('/login', login)
router.post('/changepassword',changePassword)

module.exports = router;