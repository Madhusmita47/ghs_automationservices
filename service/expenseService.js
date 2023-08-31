const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const createexpense = async (expense) => {
  try {
    const query = `
           INSERT INTO expense_list (exp_Vertical, exp_from, exp_to, exp_amountincludinggst, exp_approvalstate, exp_person, exp_GSTPercentage, exp_GSTAmount, exp_ExpID, exp_ExpenseDiscription, exp_LedgerName, exp_date, exp_time)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
    await dbQuery(query, [
      expense.Vertical,
      expense.from,
      expense.to,
      expense.amountincludinggst,
      expense.approvalstate,
      expense.person,
      expense.GSTPercentage,
      expense.GSTAmount,
      expense.ExpID,
      expense.ExpenseDiscription,
      expense.LedgerName,
      expense.date,
      expense.time,
    ]);

    return { message: "data Inserted Successfully" };
  } catch (error) {
    catchAsyncError(error);
  }
};

module.exports = { createexpense };
