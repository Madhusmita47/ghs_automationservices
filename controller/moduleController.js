const catchAsyncError = require("../middleware/catchasyncErrors");
const moduleService = require("../service/moduleService");
const { dbQuery } = require("../config/database");


const createModule = async (req, res) => {
    try {
        const module = req.body;
        const usr_id = req.user.usr_id
        // console.log("usr_id", usr_id)
        const result = await moduleService.createModule(module, usr_id);

        res.status(201).json({ message: result.message });
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};


const getModuleData = async (req, res) => {
    try {
        const usr_id = req.user.usr_id;
        // console.log("usr_id",usr_id)
        const result = await moduleService.getModuleData(usr_id);
        res.status(200).json({ message: result });
    } catch (error) {
        console.error("Error during profile retrieval:", error);
        catchAsyncError(error);
    }
};


// cm_module_name, cm_usr_id, cm_module_sts
const updateData = async (req, res) => {
    try {
        const usr_id = req.user.usr_id;

        console.log("usr_id", usr_id)

        const { cm_module_sts, cm_module_name } = req.body;

        const updateData = await moduleService.updateData(cm_module_sts, cm_module_name, usr_id)

        console.log("updateData", updateData)


        return res.json({ message: updateData.message });

    } catch (error) {
        console.log("Error during update:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};




module.exports = { createModule, getModuleData, updateData }