const catchAsyncError = require("../middleware/catchasyncErrors");
const resourceService = require("../service/resourceService");
const { dbQuery } = require("../config/database");


const createresource = async (req, res) => {
    try {
        const resource = req.body;
        const usr_id = req.user.usr_id
        console.log(resource)
        const result = await resourceService.createResource(resource,usr_id);

        res.status(201).json({ message: result.message });
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};


const getResourceData = async (req, res) => {
    try {
        const usr_id = req.user.usr_id;
        // console.log("usr_id",usr_id)
        const result = await resourceService.getResourceData(usr_id);
        res.status(200).json({ message: result });
    } catch (error) {
        console.error("Error during profile retrieval:", error);
        catchAsyncError(error);
    }
};



const updateData = async (req, res) => {
    try {
        const usr_id = req.user.usr_id;

        console.log("usr_id", usr_id)

        const { cr_rs_key, cr_rs_name } = req.body;
     
        const updateData = await resourceService.updateData(cr_rs_key, usr_id, cr_rs_name)

        console.log("updateData", updateData)
      

        return res.json({ message: updateData.message });
        
    } catch (error) {
        console.log("Error during update:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};




module.exports = { createresource, getResourceData,updateData }