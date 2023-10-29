const express = require("express");

const router = express.Router();
const { createAttendance, getAttendanceData, getEmployyData }= require("../controller/attendanceController")

router.post("/creatattendance", createAttendance);
router.get("/getattendancedata", getAttendanceData);
router.get("/getemployeedata", getEmployyData);


module.exports = router;