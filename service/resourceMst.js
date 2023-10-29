const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");


//     try {


//         if (usr_id) {
//             const selectQuery = `
//                     SELECT * FROM cmpny_rsc_mst
//                     WHERE cmpny_rsc_id = ?
//                 `;

//             const selectParams = [usr_id];
//             const selectResult = await dbQuery(selectQuery, selectParams);

//             if (selectResult.length > 0) {
//                 console.log("selectResult", selectResult.length)

//                 if (selectResult[0].cmpny_rsc_name == rscmst.cmpny_rsc_name) {
                   
//                     const updateQuery = `
//                         UPDATE cmpny_rsc_mst
//                        SET cmpny_rsc_name = ?, cmpny_rsc_sts = ?
//                        WHERE cmpny_rsc_id = ?;

//                     `;
//                     const updateParams = [
//                         rscmst.cmpny_rsc_name,
//                         rscmst.cmpny_rsc_sts,
//                         usr_id

//                     ];

//                     await dbQuery(updateQuery, updateParams);
//                 } else {

//                     const insertQuery = `
//                          INSERT INTO cmpny_rsc_mst (cmpny_rsc_id,cmpny_rsc_name,cmpny_rsc_sts)
//             VALUES(?, ?, ?)
//                     `;
//                     const insertParams = [
//                         usr_id,
//                         rscmst.cmpny_rsc_name,
//                         rscmst.cmpny_rsc_sts
//                     ];

//                     await dbQuery(insertQuery, insertParams);
//                 }
//             }
         
//         }

//           return { message: "data Inserted Successfully" };
//     } catch (error) {
//         // Handle error
//         catchAsyncError(error);
//     }
// };


const createResourceMst = async (rscmst) => {
    try {
        const cmpny_rsc_id = rscmst.cmpny_rsc_id;

        const selectQuery = `
            SELECT * FROM cmpny_rsc_mst
            WHERE cmpny_rsc_id = ?
        `;
        const selectParams = [cmpny_rsc_id];
        const selectResult = await dbQuery(selectQuery, selectParams);

        if (selectResult.length > 0) {
           
            const updateQuery = `
                UPDATE cmpny_rsc_mst
                SET cmpny_rsc_name = ?, cmpny_rsc_sts = ?
                WHERE cmpny_rsc_id = ?
            `;
            const updateParams = [
                rscmst.cmpny_rsc_name,
                rscmst.cmpny_rsc_sts,
                cmpny_rsc_id
            ];
            await dbQuery(updateQuery, updateParams);
        } else {
            
            const insertQuery = `
                INSERT INTO cmpny_rsc_mst (cmpny_rsc_id, cmpny_rsc_name, cmpny_rsc_sts)
                VALUES (?, ?, ?)
            `;
            const insertParams = [
                cmpny_rsc_id,
                rscmst.cmpny_rsc_name,
                rscmst.cmpny_rsc_sts
            ];
            await dbQuery(insertQuery, insertParams);
        }

        return { message: "Data Inserted Successfully" };
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};




const getResourcemstData = async () => {
    try {
        const user = await dbQuery(`SELECT * FROM cmpny_rsc_mst`);

        return { message: "getall getResourcemstData", user };
    } catch (error) {
        console.error("Error fetching user profile:", error);
        catchAsyncError(error);
    }
};

const updateData = async (cmpny_rsc_name, cmpny_rsc_sts, cmpny_rsc_id) => {
    try {

        const updatedata = await dbQuery(`UPDATE cmpny_rsc_mst SET cmpny_rsc_name = ?, cmpny_rsc_sts = ? WHERE cmpny_rsc_id = ? `, [cmpny_rsc_name, cmpny_rsc_sts, cmpny_rsc_id]);

        console.log("updateQuery", updatedata)
        return { message: "Update successful." }
    } catch (error) {
        console.log("Error during update:", error);
        catchAsyncError(error);
    }
};

module.exports = { createResourceMst, getResourcemstData, updateData }

// cmpny_rsc_mst
// cmpny_rsc_id
// cmpny_rsc_name
// cmpny_rsc_sts