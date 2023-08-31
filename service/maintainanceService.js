const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createmaintainance = async (maintainance) => {
    try {
        const query = `
           INSERT INTO maintenance_list (mntnc_unique_id ,mntnc_name,mntnc_additional_remark,mntnc_problem_desc, mntnc_date,mntnc_time,mntnc_vertical,mntnc_problem_type)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)
            `;
        await dbQuery(query, [
            maintainance.unique_id,
            maintainance.name,
            maintainance.additional_remark,
            maintainance.problem_desc,
            maintainance.date,
            maintainance.time,
            maintainance.vertical,
            maintainance.problem_type

        ]);



        return { message: "data Inserted Successfully" };
    } catch (error) {

        catchAsyncError(error);
    }
};

module.exports = { createmaintainance }


