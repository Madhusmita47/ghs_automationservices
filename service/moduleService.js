const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");



const createModule = async (module, usr_id) => {

    try {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate());

        formattedDate = currentDate.toISOString().slice(0, 10);
        // console.log(formattedDate)


        for (let i = 0; i < module.moduleData.length; i++) {
            
              if (usr_id) {
            const selectQuery = `
        SELECT * FROM cmpny_module
        WHERE  cm_usr_id = ?
      `;
           
                  const selectParams = [usr_id];
            const selectResult = await dbQuery(selectQuery, selectParams);
                
                  
                if (selectResult.length > 0 && selectResult[0].cm_module_name == module.moduleData[i].cm_module_name) {


                    const updateQuery = `
         UPDATE cmpny_module SET  cm_module_sts = ? WHERE cm_usr_id = ? AND  cm_module_name = ?`;
                    const updateParams = [
                        module.moduleData[i].cm_module_sts,
                        usr_id,
                        module.moduleData[i].cm_module_name

                    ];

                    result = await dbQuery(updateQuery, updateParams);
                }
                  
                else {
                    const insertQuery =
                        ` INSERT INTO  cmpny_module (cm_usr_id,
                             cm_module_name,
                          cm_module_sts)
                            VALUES(?, ?, ?)`
                        ;
                    const insertParams = [usr_id,
                        module.moduleData[i].cm_module_name,
                        module.moduleData[i].cm_module_sts

                    ]

                    result = await dbQuery(insertQuery, insertParams);

                }

         }
            
  }



    return { message: "data Inserted Successfully" };

      
    } catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};



const getModuleData = async (usr_id) => {
    try {
        const user = await dbQuery("SELECT * FROM cmpny_module WHERE cm_usr_id = ?", [
            usr_id,
        ]);

        return { message: "getall getModuleData", user };
    } catch (error) {
        console.error("Error fetching user profile:", error);
        catchAsyncError(error);
    }
};



const updateData = async (cm_module_sts,cm_module_name, cm_usr_id) => {
    try {
        const updatedata = await dbQuery(
            `UPDATE cmpny_module SET  cm_module_sts = ? WHERE cm_usr_id = ? AND  cm_module_name = ?`,
            [cm_module_sts,cm_usr_id,cm_module_name]
        );

        console.log("updateQuery", updatedata);
        return { message: "Update successful." };
    } catch (error) {
        console.log("Error during update:", error);
        catchAsyncError(error);
    }
};




module.exports = { createModule, getModuleData, updateData }

    //  cm_id
    // cm_usr_id
    // cm_module_name
    // cm_module_sts
// cm_creation_time
    


