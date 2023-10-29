const catchAsyncError = require("../middleware/catchasyncErrors");
const modulemstService = require("../service/moduleMst");
// const { dbQuery } = require("../config/database");


const createModuleMst = async (req, res) => {
    try {
        const modulemst = req.body;
        // const usr_id = req.user.usr_id
        // console.log(resource)
        const result = await modulemstService.createModuleMst(modulemst);

        res.status(201).json({ message: result.message });
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};

const getModulemstData = async (req, res) => {
    try {
        const cmpny_module_id =req.body
        const result = await modulemstService.getModulemstData(cmpny_module_id);
        res.status(200).json({ message: result });
    } catch (error) {
        console.error("Error during profile retrieval:", error);
        catchAsyncError(error);
    }
};

const updateData = async (req, res) => {
    try {
        // const usr_id = req.user.usr_id;

        // console.log("usr_id", usr_id)



        const { cmpny_module_name, cmpny_module_price, cmpny_module_sts, cmpny_module_id } = req.body;

        const updateData = await modulemstService.updateData(cmpny_module_name, cmpny_module_price, cmpny_module_sts, cmpny_module_id)

        // console.log("updateData", updateData)


        return res.json({ message: updateData.message });

    } catch (error) {
        console.log("Error during update:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};





module.exports = { createModuleMst, getModulemstData, updateData }



