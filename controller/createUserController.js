const createuserService = require("../service/createUserService");
const catchAsyncError = require("../middleware/catchasyncErrors");
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require("bcryptjs");


const createUser = async (req, res) => {
    try {
        const user = req.body;
     
        const result = await createuserService.createUser(user);

        // if (result && result.message === "User created successfully") {
        //     return res.status(200).json({ message: "User created successfully" });

        // }
        // else if (result && result.message === "User already exists") {
        //     return res.status(400).json({ message: "User already exists" });
        // }
        // else {
        //     return res.status(500).json({ message: "User already exists" });
        // }

        return res.status(200).json({ message: result.message });
        
    } catch (error) {
        catchAsyncError(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


//--------------------------------------------------------------------------------------

const verifyOtp = async (req, res) => {
    try {
        const {  usr_otp, usr_mob_no} = req.body;

        // const usr_exp_tm = Date.now();

        const result = await createuserService.verifyOtp(usr_otp,usr_mob_no);

        res.status(200).json({ message: result.message });
    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};

// const updateOtp = async (req, res) => {
//     try {
//         const {  usr_otp, usr_mob_no} = req.body;
   
//         const result = await createuserService.updateOtp( usr_otp, usr_mob_no);
//         res.status(200).json({ message: result.message });
//     } catch (error) {
//         console.error("Error occurred:", error);
//         catchAsyncError(error);
//     }
// };

  const resendOtp = async (req, res) => { // resend otp
    try {
        const { usr_otp, usr_mob_no} = req.body;

       
        const result = await createuserService.resendOtp(
             usr_otp,
            usr_mob_no
        );

        return res.status(200).json({ message: result.message });
    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};

const resetPassword = async (req, res) => {
    const { usr_mob_no, usr_pass} = req.body;
  
    try {
        const result = await createuserService.resetPassword(usr_mob_no, usr_pass);
        res.status(200).json({ message: result.message });
    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};

const login = async (req, res) => {
    try {
        const { usr_mob_no, usr_pass } = req.body;
        
        const user = await createuserService.loginUser(usr_mob_no, usr_pass);
        // console.log(user)
        res.json(user);
    } catch (error) {
        console.error("Error during login:", error);
        catchAsyncError(error);
    }
};


const changePassword = async (req, res) => {

    const { usr_mob_no, currentPassword,newPassword } = req.body;
    try {
        const result = await createuserService.changePassword(
            usr_mob_no,
            currentPassword,
            newPassword
        );
        res.status(200).json({ message: result.message });
    } catch (error) {
        console.error("Error changing password:", error);
        catchAsyncError(error);
    }
};





module.exports = {
    createUser,
    verifyOtp,
    resendOtp,
    resetPassword,
    login,
    changePassword,
 
};
