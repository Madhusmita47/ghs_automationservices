const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createAttendance = async (attendance) => {
    try {
        const query = `
           INSERT INTO attendance_form (attnd_storename,attnd_empname,attnd_type,date,time,storelat,storelon,storeloc)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)
            `;
        await dbQuery(query, [
            attendance.attnd_storename,
            attendance.attnd_empname,
            attendance.attnd_type,
            attendance.date,
            attendance.time,
            attendance.storelat,
            attendance.storelon,
            attendance.storeloc
         
        ]);

        return { message: "data Inserted Successfully" };
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};


module.exports = { createAttendance }

