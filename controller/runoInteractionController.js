const catchAsyncError = require("../middleware/catchasyncErrors");
const axios = require("axios");
const fs = require("fs");
const ExcelJS = require("exceljs");
const info = require("../config/test")
//-----------------------------------------------------------------
const TelegramBot = require("node-telegram-bot-api");
const botToken = info.BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: true });
const chatId = "5304244458";


const apiUrl = "https://api.runo.in/v1/crm/interactions";

// Initialize variables for pagination and data storage
let currentPage = 1;
let allData = [];
const startDateString = "2023-08-16";
const endDateString = "2023-08-24";

// Convert the date strings to JavaScript Date objects
const startDate = new Date(startDateString);
const endDate = new Date(endDateString);



const listCrmInteraction = async (req, res) => {


  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

   
    const uniqueRsoNames = [];
    const apiUrl =
      "https://api.runo.in/v1/crm/interactions?processName=Tanishq&Date=2023-08-25&pageNo=5";

    const response = await axios.get(apiUrl, { headers });
    //const total = response.data.data.metadata[0].total;
    // console.log("total", appData.allData);

    allData = response.data.data.data;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Connected");
    const worksheet2 = workbook.addWorksheet("Walk-in");

    // Add data to the worksheet
    worksheet.columns = [
      { header: "RSO", key: "rso" },
      { header: "Total Attempted", key: "TotalAttempted" },
      { header: "Total Connected ", key: "TotalConnected" },
      { header: "Total Connected in % ", key: "TotalConnectedin" },
      { header: "Connected (Yes)", key: "ConnectedYes" },
      { header: "Connected (Yes) in %", key: "ConnectedYesin" },
      { header: "Connected (No)", key: "ConnectedNo" },
      { header: "Connected (No) in %", key: "ConnectedNoin" },
      { header: "Could Not Connect", key: "CouldNotConnect" },
      { header: "Could Not Connect in %", key: "CouldNotConnectin" },
      { header: "Followup", key: "Followup" },
      { header: "Followup in %", key: "Followupin" },
    ];

    worksheet2.columns = [
      { header: "RSO", key: "rso2" },
      { header: "Total Walk In", key: "Totalwalkin" },
      { header: "Purchase ", key: "Purchase" },
      { header: "Purchase in % ", key: "Purchasein" },
      { header: "Non Purchase", key: "NonPurchase" },
      { header: "Non Purchase in %", key: "NonPurchasein" },
      { header: "GHS Pay", key: "GHSPay" },
      { header: "GHS Pay in %", key: "GHSPayin" },
      { header: "Customer New", key: "CustomerNew" },
      { header: "Customer New in %", key: "CustomerNewin" },
      { header: "Customer Old", key: "CustomerOld" },
      { header: "Customer Old in %", key: "CustomerOldin" },
      { header: "Total Purchase Amount", key: "TotalPurchaseAmount" },
    ];
    for (let s = 0; s < allData.length; s++) {
      if (!uniqueRsoNames.includes(allData[s].assigned.to)) {
        uniqueRsoNames.push(allData[s].assigned.to);
      }
    }

    for (let t = 0; t < uniqueRsoNames.length; t++) {
      var rsoName = uniqueRsoNames[t];
      var totalAttempted = 0;
      var connected = 0;
      var coluldnotconnect = 0;
      var follwup = 0;
      var walkin = 0;
      var customerVisitYes = 0;
      var customerVisitNo = 0;
      var walkInCustomerTypeOld = 0;
      var walkInCustomerTypeNew = 0;
      var walkInPurchaseTypePurchase = 0;
      var walkInPurchaseTypePurchase_PurchaseAmout = 0;
      var walkInPurchaseTypeGhsPay = 0;
      var walkInPurchaseTypeNoPurchase = 0;

      for (let i = 0; i < allData.length; i++) {
        if (uniqueRsoNames[t] === allData[i].assigned.to) {
          for (let j = 0; j < allData[i].userFields.length; j++) {
            if (allData[i].userFields[j].name == "Status") {
              if (allData[i].userFields[j].value == "Connected") {
                connected = connected + 1;
              } else if (
                allData[i].userFields[j].value == "Could Not Connect"
              ) {
                coluldnotconnect = coluldnotconnect + 1;
              } else if (allData[i].userFields[j].value == "Walk-In") {
                walkin = walkin + 1;
              } else if (allData[i].userFields[j].value == "Followup") {
                follwup = follwup + 1;
              }
            } else if (allData[i].userFields[j].name == "Will Customer Visit") {
              if (allData[i].userFields[j].value == "Yes") {
                customerVisitYes = customerVisitYes + 1;
              } else if (allData[i].userFields[j].value == "No") {
                customerVisitNo = customerVisitNo + 1;
              }
            } else if (allData[i].userFields[j].name == "Customer Type") {
              if (allData[i].userFields[j].value == "New") {
                walkInCustomerTypeNew = walkInCustomerTypeNew + 1;
              } else if (allData[i].userFields[j].value == "Old") {
                walkInCustomerTypeOld = walkInCustomerTypeOld + 1;
              }
            } else if (allData[i].userFields[j].name == "Purchase Type") {
              for (let k = 0; k < allData[i].userFields[j].value.length; k++) {
                if (allData[i].userFields[j].value[k] == "Purchase") {
                  walkInPurchaseTypePurchase = walkInPurchaseTypePurchase + 1;
                } else if (
                  allData[i].userFields[j].value[k] == "Non Purchase"
                ) {
                  walkInPurchaseTypeNoPurchase =
                    walkInPurchaseTypeNoPurchase + 1;
                } else if (allData[i].userFields[j].value[k] == "GHS Pay") {
                  walkInPurchaseTypeGhsPay = walkInPurchaseTypeGhsPay + 1;
                }
              }
            } else if (allData[i].userFields[j].name == "Purchase Amount") {
              walkInPurchaseTypePurchase_PurchaseAmout =
                walkInPurchaseTypePurchase_PurchaseAmout +
                allData[i].userFields[j].value;
            }
          }
        }
      }

      totalAttempted = connected + coluldnotconnect + follwup;

      // add excel code here for row entry

      worksheet.addRow({
        rso: rsoName,
        TotalAttempted: totalAttempted,
        TotalConnected: connected,
        TotalConnectedin: ((connected / totalAttempted) * 100).toFixed(2) + "%",
        ConnectedYes: customerVisitYes,
        ConnectedYesin: ((customerVisitYes / connected) * 100).toFixed(2) + "%",
        ConnectedNo: customerVisitNo,
        ConnectedNoin: ((customerVisitNo / connected) * 100).toFixed(2) + "%",
        CouldNotConnect: coluldnotconnect,
        CouldNotConnectin:
          ((coluldnotconnect / totalAttempted) * 100).toFixed(2) + "%",
        Followup: follwup,
        Followupin: ((follwup / totalAttempted) * 100).toFixed(2) + "%",
      });

      worksheet2.addRow({
        rso2: rsoName,
        Totalwalkin: walkin,
        Purchase: walkInPurchaseTypePurchase,
        Purchasein:
          ((walkInPurchaseTypePurchase / walkin) * 100).toFixed(2) + "%",
        NonPurchase: walkInPurchaseTypeNoPurchase,
        NonPurchasein:
          ((walkInPurchaseTypeNoPurchase / walkin) * 100).toFixed(2) + "%",
        GHSPay: walkInPurchaseTypeGhsPay,
        GHSPayin: ((walkInPurchaseTypeGhsPay / walkin) * 100).toFixed(2) + "%",
        CustomerNew: walkInCustomerTypeNew,
        CustomerNewin:
          ((walkInCustomerTypeNew / walkin) * 100).toFixed(2) + "%",
        CustomerOld: walkInCustomerTypeOld,
        CustomerOldin:
          ((walkInCustomerTypeOld / walkin) * 100).toFixed(2) + "%",
        TotalPurchaseAmount: walkInPurchaseTypePurchase_PurchaseAmout,
      });

      
    }

    // Set response headers for Excel file
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=runoEveryDayReport.xlsx"
    );

    //Send the Excel file to the client
    workbook.xlsx
      .write(res)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error generating Excel file");
      });

    //res.json(responseData);
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

module.exports = { listCrmInteraction };
