const { dbQuery } = require("../config/database");
const catchAsyncError = require("../middleware/catchasyncErrors");
const bcrypt = require("bcryptjs");
const { encryptPassword } = require("../middleware/encrypt");
const jwt = require("jsonwebtoken");

const createUser = async (user) => {
    try {

        const hashedPassword = await encryptPassword(user.usr_pass);
        // const isPasswordMatch = await bcrypt.compare(hashedPassword, user.usr_pass);
        // console.log("isPasswordMatch", isPasswordMatch)
     
        const currenttime = Date.now() + 5 * 60 * 1000;

        // console.log(currenttime)
        if (user.usr_mob_no) {
            const selectQuery = `
        SELECT * FROM users
        WHERE  usr_mob_no = ?
      `;
            const selectParams = [user.usr_mob_no];

            const selectResult = await dbQuery(selectQuery, selectParams);

            if (selectResult.length === 0) {

                const insertQuery = `
        INSERT INTO users (
            usr_cmpny_name,
            usr_mob_no,
            usr_pass,
            usr_otp ,
            usr_exp_tm
        )
        VALUES (?, ?, ?, ?, ?)
    `;
                const insertParams = [
                    user.usr_cmpny_name,
                    user.usr_mob_no,
                    hashedPassword,
                    user.usr_otp,
                    currenttime
                ];

                result = await dbQuery(insertQuery, insertParams);
            } else {
               

                if (selectResult[0].usr_sts == 1) {
                    console.log("selectResult[0]", selectResult[0])
                    return { message: "User already exists" };
                } else {
                    const updateQuery = `
            UPDATE users
            SET
                usr_cmpny_name = ?,
                usr_pass = ?,
                usr_otp = ?,
                usr_exp_tm = ?
            WHERE usr_mob_no = ?
        `;
                    const updateParams = [
                        user.usr_cmpny_name,
                        hashedPassword,
                        user.usr_otp,
                        currenttime,
                        user.usr_mob_no,

                    ];

                    result = await dbQuery(updateQuery, updateParams);
                }
            }

        }


        if (result && result.affectedRows) {
            return { message: "User created successfully" };
        } else {
            return { message: "Failed to create user" };
        }
    } catch (error) {
        catchAsyncError(error);
        return { message: "Internal server error" };
    }
};


const verifyOtp = async (usr_otp,usr_mob_no) => {
    try {
        const currentTime = Date.now();

        // Check if the OTP has already been verified
        const existingUser = await dbQuery(
            "SELECT * FROM users WHERE usr_mob_no = ? AND usr_otp = ? AND usr_exp_tm >= ?",
            [usr_mob_no, usr_otp, currentTime]
        );
        console.log("existingUser", existingUser)

        if (existingUser.length === 0) {
            return { message: "Invalid OTP or OTP expired" };
        } else {
            await dbQuery(
                "UPDATE users SET usr_sts = ? WHERE usr_mob_no = ? ",
                [1, usr_mob_no]
            );

            return { message: "OTP verified successfully" };
        }

    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};





const resendOtp = async (usr_otp, usr_mob_no) => {
    try {

       const currenttime = Date.now() + 5 * 60 * 1000;
        const result = await dbQuery(
            "SELECT * FROM users WHERE  usr_mob_no = ?",
            [ usr_mob_no]
        );

        if (result.length === 0) {
            throw new Error("User not found");
        } else {
            await dbQuery(
                "UPDATE users SET usr_otp = ?, usr_exp_tm = ? WHERE  usr_mob_no = ?",
                [usr_otp, currenttime,  usr_mob_no]
            );

            return { message: "Password reset OTP sent successfully" };
        }
    } catch (error) {
        console.error("Error occurred:", error);

        catchAsyncError(error);
    }
};


const resetPassword = async ( usr_mob_no,usr_pass) => {
    try {
        const hashedPassword = await encryptPassword(usr_pass);
        console.log("hashedPassword", hashedPassword)
        await dbQuery("UPDATE users SET usr_pass = ? WHERE  usr_mob_no = ?", [
            hashedPassword,
             usr_mob_no,
        ]);
        return { message: "Password reset successfully" };
    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};


const loginUser = async ( usr_mob_no,usr_pass) => {
    try {
        const query = `SELECT * FROM users WHERE  usr_mob_no = ?;
    `;
        const [user] = await dbQuery(query, [usr_mob_no]);
        
        console.log("[user]", [user])
        if (!user) {
            return { message: "User not found. Please register first." };
        }
    
        const isPasswordMatch = await bcrypt.compare(usr_pass, user.usr_pass);

        if (!isPasswordMatch) {
            return { message: "Incorrect password. Please try again." };
        }
        const token = jwt.sign({ user }, "secret key", {
            expiresIn: "100000h",
        });


        return { message: "Login successfully", token: token };
    } catch (error) {
        console.log("Error during login:", error);
        catchAsyncError(error);
    }
};


const changePassword = async (usr_mob_no, currentPassword, newPassword) => {

    try {

        const [userRecord] = await dbQuery(
            "SELECT usr_pass FROM users WHERE  usr_mob_no = ?",
            [usr_mob_no]
        );

        if (!userRecord) {
            return { message: "User not found" };
        }
        // console.log("userRecord", userRecord);

        const isPasswordMatch = await bcrypt.compare(
            currentPassword,
            userRecord.usr_pass
        );
          
        if (!isPasswordMatch) {
            return { message: "Invalid current password" };
        }

        const hashedPassword = await encryptPassword(newPassword);

        console.log("hashedPassword", hashedPassword)

        const updateQuery = "UPDATE users SET usr_pass = ? WHERE  usr_mob_no = ?";

        const updateParams = [hashedPassword, usr_mob_no];

        await dbQuery(updateQuery, updateParams);

        return { message: "Password changed successfully" };
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
    loginUser,
    changePassword,

};
