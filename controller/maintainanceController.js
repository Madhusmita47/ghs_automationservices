const catchAsyncError = require("../middleware/catchasyncErrors");
const maintainanceService = require("../service/maintainanceService");
const { dbQuery } = require("../config/database");


const createMaintainance = async (req, res) => {
    try {
        const maintainance = req.body;
        console.log(maintainance)
        const result = await maintainanceService.createmaintainance(maintainance);

        res.status(201).json({ message: result.message });

        
        // res.status(201).json({ message: "success"});
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};
const getmaintainanceData = async (req, res) => {
    try {
        const getmaintainanceData = await dbQuery(`SELECT * FROM maintenance_list WHERE mntnc_sts = 1`);
        res.status(200).send({ data: "getall maintainancedata", getmaintainanceData });
    } catch (error) {
        catchAsyncError(error);
    }
}

module.exports = { createMaintainance, getmaintainanceData }