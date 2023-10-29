const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");



const createResource = async (resource, usr_id) => {
    try {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        formattedDate = currentDate.toISOString().slice(0, 10);

        for (let i = 0; i < resource.resourceData.length; i++) {
            if (usr_id) {
                const selectQuery = `
                    SELECT * FROM cmpny_resource
                    WHERE cr_usr_id = ?
                `;

                const selectParams = [usr_id];
                const selectResult = await dbQuery(selectQuery, selectParams);
             
                if (selectResult.length > 0) {
                    console.log("selectResult", selectResult.length)     
                    
                    if (selectResult[0].cr_rs_name == resource.resourceData[i].cr_rs_name) {
                        console.log("selectResult[0].cr_rs_name", selectResult[0].cr_rs_name)
                        console.log("resource.resourceData[i].cr_rs_name", resource.resourceData[i].cr_rs_name)

                        const updateQuery = `
                        UPDATE cmpny_resource
                        SET cr_rs_key = ?
                        WHERE cr_usr_id = ? AND cr_rs_name = ?
                    `;
                        const updateParams = [
                            resource.resourceData[i].cr_rs_key,
                            usr_id,
                            resource.resourceData[i].cr_rs_name
                        
                        ];

                        await dbQuery(updateQuery, updateParams);
                    } else {
                  
                        const insertQuery = `
                        INSERT INTO cmpny_resource (cr_usr_id, cr_rs_name, cr_rs_key)
                        VALUES (?, ?, ?)
                    `;
                        const insertParams = [
                            usr_id,
                            resource.resourceData[i].cr_rs_name,
                            resource.resourceData[i].cr_rs_key
                        ];

                        await dbQuery(insertQuery, insertParams);
                    }
                }
                else {
                    const insertQuery = `
                        INSERT INTO cmpny_resource (cr_usr_id, cr_rs_name, cr_rs_key)
                        VALUES (?, ?, ?)
                    `;
                    const insertParams = [
                        usr_id,
                        resource.resourceData[i].cr_rs_name,
                        resource.resourceData[i].cr_rs_key
                    ];

                    await dbQuery(insertQuery, insertParams);
                }
            }
        }

        return { message: "Data Inserted Successfully" };
    } catch (error) {
        catchAsyncError(error);
    }
};





const getResourceData = async (usr_id) => {
    try {
        const user = await dbQuery("SELECT * FROM cmpny_resource WHERE cr_usr_id = ?", [
            usr_id,
        ]);

        return { message: "getall getResourceData", user };
    } catch (error) {
        console.error("Error fetching user profile:", error);
        catchAsyncError(error);
    }
};


const updateData = async (cr_rs_key, cr_usr_id, cr_rs_name) => {
    try {

        const updatedata = await dbQuery(`UPDATE cmpny_resource SET cr_rs_key = ? WHERE cr_usr_id = ? AND  cr_rs_name = ? `, [cr_rs_key, cr_usr_id, cr_rs_name  ]);


        console.log("updateQuery", updatedata)
        return { message: "Update successful." }
    } catch (error) {
        console.log("Error during update:", error);
        catchAsyncError(error);
    }
};


module.exports = { createResource, getResourceData, updateData }



// update table cmpny_rsc set rs_key = ? where usr_id =? and rs_name = ?


//     rs key = user input
// user id = from token
// rs_name = user input





// cr_usr_id
// cr_rs_name
// cr_rs_key
// cr_sts
// cr_creation_time