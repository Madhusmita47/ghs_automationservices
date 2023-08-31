const catchAsyncError = require("../middleware/catchasyncErrors");
const attendanceService = require("../service/attendanceService");
const { dbQuery } = require("../config/database");



const createAttendance = async (req, res) => {
  try {
    const attendance = req.body;
    // console.log(attendance)
    const result = await attendanceService.createAttendance(attendance);

    res.status(201).json({ message: result.message });
  } catch (error) {
    // Handle error
    catchAsyncError(error);
  }
};
const getAttendanceData = async (req, res) => {
  try {
    const getAttendanceData = await dbQuery(`SELECT * FROM attendance_form`);
    res.status(200).send({ data: "getall attendancedata", getAttendanceData });
  } catch (error) {
    catchAsyncError(error);
  }
};

const getEmployyData = async (req, res) => {
  try {
    const getEmployyData = await dbQuery(`SELECT * FROM employee_list`);
    res.status(200).send({ data: "getall getEmployyData", getEmployyData });
  } catch (error) {
    catchAsyncError(error);
  }
};

module.exports = { createAttendance, getAttendanceData, getEmployyData };
