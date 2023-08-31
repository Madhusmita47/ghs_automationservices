const catchAsyncError = require("../middleware/catchasyncErrors");
const { dbQuery } = require("../config/database");

const uploadGhsExcel = async (store) => {
  try {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    for (let i = 0; i < store.storeList.length; i++) {
      const query = `
           INSERT INTO ghs_due_installemnt  (LEVEL,
Region,
BTQCode,
Customer_Name,
GHSAccount_No,
Location_Short_Name,
Typeof_Scheme,
Scheme_Description,
Dateof_Enrolment,
Installment_Amount,
Dateof_Last_Installment,
Total_Installments_Paid,
Next_Installment_Due,
Total_Due,
Next_Installment_Due_Date,
Contact_Number,
Mail_Id,
RSO,
Fiscal_Year,
GHS_CRETN_DT)
             VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

      await dbQuery(query, [
        store.storeList[i].LEVEL,
        store.storeList[i].Region,
        store.storeList[i].BTQCode,
        store.storeList[i].Customer_Name,
        store.storeList[i].GHSAccount_No,
        store.storeList[i].Location_Short_Name,
        store.storeList[i].Typeof_Scheme,
        store.storeList[i].Scheme_Description,
        store.storeList[i].Dateof_Enrolment,
        store.storeList[i].Installment_Amount,
        store.storeList[i].Dateof_Last_Installment,
        store.storeList[i].Total_Installments_Paid,
        store.storeList[i].Next_Installment_Due,
        store.storeList[i].Total_Due,
        store.storeList[i].Next_Installment_Due_Date,
        store.storeList[i].Contact_Number,
        store.storeList[i].Mail_Id,
        store.storeList[i].RSO,
        store.storeList[i].Fiscal_Year,
        formattedCurrentDate,
      ]);
    }

    return { message: "Inserted Successfully" };
  } catch (error) {
    // Handle error
    catchAsyncError(error);
  }
};

module.exports = { uploadGhsExcel };
