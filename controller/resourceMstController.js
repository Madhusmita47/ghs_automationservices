const catchAsyncError = require("../middleware/catchasyncErrors");
const resourcemstService = require("../service/resourceMst");
// const { dbQuery } = require("../config/database");


const createResourceMst = async (req, res) => {
    try {
        const rscmst = req.body;
        // const usr_id = req.user.usr_id
        // console.log(resource)
        const result = await resourcemstService.createResourceMst(rscmst);

        res.status(201).json({ message: result.message });
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};

const getResourcemstData = async (req, res) => {
    try {
        const cmpny_rsc_id = req.body;
        // console.log("usr_id",usr_id)
        const result = await resourcemstService.getResourcemstData(cmpny_rsc_id);
        res.status(200).json({ message: result });
    } catch (error) {
        console.error("Error during profile retrieval:", error);
        catchAsyncError(error);
    }
};

const updateData = async (req, res) => {
    try {
    
        const { cmpny_rsc_name, cmpny_rsc_sts, cmpny_rsc_id } = req.body;

        const updateData = await resourcemstService.updateData(cmpny_rsc_name, cmpny_rsc_sts, cmpny_rsc_id)

        // console.log("updateData", updateData)


        return res.json({ message: updateData.message });

    } catch (error) {
        console.log("Error during update:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};





module.exports = { createResourceMst, getResourcemstData, updateData }


