const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");




const createModuleMst = async (modulemst) => {

    try {
        const cmpny_module_id = modulemst.cmpny_module_id;

        const selectQuery = `
            SELECT * FROM cmpny_module_mst
            WHERE cmpny_module_id = ?
        `;
        const selectParams = [cmpny_module_id];
        const selectResult = await dbQuery(selectQuery, selectParams);

        if (selectResult.length > 0) {

            const updateQuery = `
               UPDATE cmpny_module_mst
                       SET cmpny_module_name = ?, cmpny_module_price = ?, cmpny_module_sts = ?
                       WHERE cmpny_module_id = ?
            `;
            const updateParams = [
                modulemst.cmpny_module_name,
                modulemst.cmpny_module_price,
                modulemst.cmpny_module_sts,
                cmpny_module_id
            ];
            await dbQuery(updateQuery, updateParams);
        } else {

            const insertQuery = `
                INSERT INTO cmpny_module_mst (cmpny_module_name,cmpny_module_price,cmpny_module_sts)
                VALUES (?, ?, ?)
            `;
            const insertParams = [
                modulemst.cmpny_module_name,
                modulemst.cmpny_module_price,
                modulemst.cmpny_module_sts
            ];
            await dbQuery(insertQuery, insertParams);
        }

        return { message: "Data Inserted Successfully" };
    } 
 
    
    catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};


const getModulemstData = async () => {
    try {
        const user = await dbQuery("SELECT * FROM cmpny_module_mst")

        return { message: "getall getResourcemstData", user };
    } catch (error) {
        console.error("Error fetching user profile:", error);
        catchAsyncError(error);
    }
};

const updateData = async (cmpny_module_name, cmpny_module_price, cmpny_module_sts, cmpny_module_id) => {
    try {

        const updatedata = await dbQuery(`UPDATE cmpny_module_mst SET cmpny_module_name = ?, cmpny_module_price = ?, cmpny_module_sts = ? WHERE cmpny_module_id = ? `, [cmpny_module_name, cmpny_module_price, cmpny_module_sts, cmpny_module_id]);

        console.log("updateQuery", updatedata)
        return { message: "Update successful." }
    } catch (error) {
        console.log("Error during update:", error);
        catchAsyncError(error);
    }
};

module.exports = { createModuleMst, getModulemstData, updateData }

// cmpny_module_mst
// cmpny_module_id
// cmpny_module_usr_id
// cmpny_module_name
// cmpny_module_price
// cmpny_module_sts
