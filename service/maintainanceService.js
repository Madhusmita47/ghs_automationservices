const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createmaintainance = async (maintainance,taskId,taskSts,reminderDate) => {
    try {
        const query = `
           INSERT INTO maintenance_list (mntnc_unique_id ,mntnc_name,mntnc_additional_remark,mntnc_problem_desc, mntnc_date,mntnc_time,mntnc_vertical,mntnc_problem_type,mntnc_task_id,mntnc_task_sts,mntnc_task_reminder)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
        await dbQuery(query, [
            maintainance.unique_id,
            maintainance.name,
            maintainance.additional_remark,
            maintainance.problem_desc,
            maintainance.date,
            maintainance.time,
            maintainance.vertical,
            maintainance.problem_type,
            taskId,
            taskSts,
            reminderDate
        ]);

       

        return { message: "data Inserted Successfully" };
    } catch (error) {

        catchAsyncError(error);
    }
};

module.exports = { createmaintainance }


