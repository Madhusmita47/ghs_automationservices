const catchAsyncError = require("../middleware/catchasyncErrors");
const axios = require("axios");
const fs = require("fs");
const ExcelJS = require("exceljs");
const info = require("../config/test");

const apiUrl = "https://api.runo.in/v1/crm/interactions";

// https://api.runo.in/v1/crm/interactions?processName=Tanishq&date=2023-09-14
const listCrmInteraction = async (req, res) => {
  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    formattedDate = currentDate.toISOString().slice(0, 10);
    // console.log(formattedDate)

    const baseApiUrl = `https://api.runo.in/v1/crm/interactions?processName=Tanishq&date=${formattedDate}`;

    // console.log(baseApiUrl)

    let pageNo = 1;
    var allData;
    async function fetchDataForPage(pageNo) {
      try {
        const apiUrl = `${baseApiUrl}&pageNo=${pageNo}`;

        var allData = await axios.get(apiUrl, { headers });

        if (allData.data.statusCode === 0) {
          var allData = allData.data.data.data;
          // console.log(allData)
          return allData;
        } else {
          return [];
        }
      } catch (error) {
        console.error(
          `Error fetching data for page ${pageNo}: ${error.message}`
        );
        return [];
      }
    }

    async function fetchAllPages() {
      const Data = [];

      while (true) {
        const dataForPage = await fetchDataForPage(pageNo);

        if (dataForPage.length === 0) {
          break;
        }

        Data.push(...dataForPage);

        pageNo++;
      }

      return Data;
    }

    allData = await fetchAllPages();

    //  const apiUrl =
    //       "https://api.runo.in/v1/crm/interactions?processName=Tanishq&Date=2023-08-25&pageNo=4";

    const uniqueRsoNames = [];
    // const apiUrl =
    //   "https://api.runo.in/v1/crm/interactions?processName=Tanishq&date=2023-09-14&pageNo=1";

    // const response = await axios.get(apiUrl, { headers });

    // allData = response.data.data.data;
    // console.log(allData)

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
      { header: "new Customer Sales Amount", key: "newcustomersalesamount" },
      { header: "Old Customer Sales Amount", key: "oldcustomersalesamount" },
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
      var walkInPurchaseAmountCustomerNew = 0;
      var walkInPurchaseAmountCustomerOld = 0;

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
                for (let p = 0; p < allData[i].userFields.length; p++) {
                  if (allData[i].userFields[p].name == "Purchase Amount") {
                    walkInPurchaseAmountCustomerNew =
                      walkInPurchaseAmountCustomerNew +
                      allData[i].userFields[p].value;
                  }
                }
                walkInCustomerTypeNew = walkInCustomerTypeNew + 1;
              } else if (allData[i].userFields[j].value == "Old") {
                walkInCustomerTypeOld = walkInCustomerTypeOld + 1;

                for (let p = 0; p < allData[i].userFields.length; p++) {
                  if (allData[i].userFields[p].name == "Purchase Amount") {
                    walkInPurchaseAmountCustomerOld =
                      walkInPurchaseAmountCustomerOld +
                      allData[i].userFields[p].value;
                  }
                }
              }
            } else if (allData[i].userFields[j].name == "Purchase Type") {
              for (let k = 0; k < allData[i].userFields[j].value.length; k++) {
                // console.log("allData[i].userFields[j].value[k]", allData[i].userFields[j].value[k])

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
      if (totalAttempted == 0 && connected == 0) {
        worksheet.addRow({
          rso: rsoName,
          TotalAttempted: totalAttempted,
          TotalConnected: connected,
          TotalConnectedin: (0).toFixed(2) + "%",
          ConnectedYes: customerVisitYes,
          ConnectedYesin: (0).toFixed(2) + "%",
          ConnectedNo: customerVisitNo,
          ConnectedNoin: (0).toFixed(2) + "%",
          CouldNotConnect: coluldnotconnect,
          CouldNotConnectin: (0).toFixed(2) + "%",
          Followup: follwup,
          Followupin: (0).toFixed(2) + "%",
        });
      } else if (totalAttempted == 0) {
        worksheet.addRow({
          rso: rsoName,
          TotalAttempted: totalAttempted,
          TotalConnected: connected,
          TotalConnectedin: (0).toFixed(2) + "%",
          ConnectedYes: customerVisitYes,
          ConnectedYesin:
            ((customerVisitYes / connected) * 100).toFixed(2) + "%",
          ConnectedNo: customerVisitNo,
          ConnectedNoin: ((customerVisitNo / connected) * 100).toFixed(2) + "%",
          CouldNotConnect: coluldnotconnect,
          CouldNotConnectin: (0).toFixed(2) + "%",
          Followup: follwup,
          Followupin: (0).toFixed(2) + "%",
        });
      } else if (connected == 0) {
        worksheet.addRow({
          rso: rsoName,
          TotalAttempted: totalAttempted,
          TotalConnected: connected,
          TotalConnectedin: (0).toFixed(2) + "%",
          ConnectedYes: customerVisitYes,
          ConnectedYesin: (0).toFixed(2) + "%",
          ConnectedNo: customerVisitNo,
          ConnectedNoin: (0).toFixed(2) + "%",
          CouldNotConnect: coluldnotconnect,
          CouldNotConnectin:
            ((coluldnotconnect / totalAttempted) * 100).toFixed(2) + "%",
          Followup: follwup,
          Followupin: ((follwup / totalAttempted) * 100).toFixed(2) + "%",
        });
      } else {
        worksheet.addRow({
          rso: rsoName,
          TotalAttempted: totalAttempted,
          TotalConnected: connected,
          TotalConnectedin:
            ((connected / totalAttempted) * 100).toFixed(2) + "%",
          ConnectedYes: customerVisitYes,
          ConnectedYesin:
            ((customerVisitYes / connected) * 100).toFixed(2) + "%",
          ConnectedNo: customerVisitNo,
          ConnectedNoin: ((customerVisitNo / connected) * 100).toFixed(2) + "%",
          CouldNotConnect: coluldnotconnect,
          CouldNotConnectin:
            ((coluldnotconnect / totalAttempted) * 100).toFixed(2) + "%",
          Followup: follwup,
          Followupin: ((follwup / totalAttempted) * 100).toFixed(2) + "%",
        });
      }

      if (walkin == 0) {
        worksheet2.addRow({
          rso2: rsoName,
          Totalwalkin: walkin,
          Purchase: walkInPurchaseTypePurchase,
          Purchasein: (0).toFixed(2) + "%",
          NonPurchase: walkInPurchaseTypeNoPurchase,
          NonPurchasein: (0).toFixed(2) + "%",
          GHSPay: walkInPurchaseTypeGhsPay,
          GHSPayin: (0).toFixed(2) + "%",
          CustomerNew: walkInCustomerTypeNew,
          CustomerNewin: (0).toFixed(2) + "%",
          CustomerOld: walkInCustomerTypeOld,
          CustomerOldin: (0).toFixed(2) + "%",
          newcustomersalesamount: walkInPurchaseAmountCustomerNew,
          oldcustomersalesamount: walkInPurchaseAmountCustomerOld,
          TotalPurchaseAmount: walkInPurchaseTypePurchase_PurchaseAmout,
        });
      } else {
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
          GHSPayin:
            ((walkInPurchaseTypeGhsPay / walkin) * 100).toFixed(2) + "%",
          CustomerNew: walkInCustomerTypeNew,
          CustomerNewin:
            ((walkInCustomerTypeNew / walkin) * 100).toFixed(2) + "%",
          CustomerOld: walkInCustomerTypeOld,
          CustomerOldin:
            ((walkInCustomerTypeOld / walkin) * 100).toFixed(2) + "%",
          newcustomersalesamount: walkInPurchaseAmountCustomerNew,
          oldcustomersalesamount: walkInPurchaseAmountCustomerOld,
          TotalPurchaseAmount: walkInPurchaseTypePurchase_PurchaseAmout,
        });
      }
    }

    // res.setHeader(
    //   "Content-Type",
    //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    // );

    // res.setHeader(
    //   "Content-Disposition",
    //   "attachment; filename=runoEveryDayReport.xlsx"
    // );

    workbook.xlsx
      .writeBuffer()
      .then((buffer) => {
        sendFileToTelegram(buffer);

        // Finally, end the response
        // res.end();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error generating Excel file");
      });

    function sendFileToTelegram(fileBuffer) {
      const axios = require("axios");
      const FormData = require("form-data");

      const botToken = info.BOT_TOKEN;

      const chatId = info.OWNER_CHATID;
      const chatId2 = info.MANOJ_CHATID;
      const chatId3 = info.MADHUSMITA_CHATID;
      const chatIds = [
        info.MANOJ_CHATID,
        info.OWNER_CHATID,
        info.MADHUSMITA_CHATID,
      ];

      async function sendFileToChat(chatId) {
        const formData = new FormData();
        formData.append("document", fileBuffer, {
          filename: `runoEveryDayReport${formattedDate}.xlsx`,
        });

        axios
          .post(
            `https://api.telegram.org/bot${botToken}/sendDocument?chat_id=${chatId}`,
            formData,
            {
              headers: {
                ...formData.getHeaders(),
              },
            }
          )
          .then((response) => {
            console.log("Excel file sent to Telegram");
          })
          .catch((error) => {
            console.error("Error sending Excel file to Telegram:", error);
          });
      }

      (async () => {
        try {
          for (const chatId of chatIds) {
            await sendFileToChat(chatId);
          }
          console.log("All files sent successfully");
        } catch (error) {
          console.error("Error sending files:", error);
        }
      })();
    }
    //  res.status(200).send({message:"success"})
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

const Test = async (req, res) => {
  var purchaseData = [];
  var allData;
  var finalArrayData = [];

  function dateCurrentFormat(timestampvalue) {
    try {
      const timestamp = parseInt(timestampvalue) * 1000; // Convert to milliseconds
      const date = new Date(timestamp);
      //console.log(timestampvalue);

      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
      const year = date.getFullYear();

      const formattedDate = `${day}-${month}-${year}`;
      return formattedDate;
    } catch (error) {
      console.error(`Error fetching data for page ${pageNo}: ${error.message}`);
      return "";
    }
  }

  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("RAIProcessed");

    // Add data to the worksheet
    worksheet.columns = [
      { header: "Customer Id", key: "uniqueIds" },
      { header: "Name", key: "Name" },
      { header: "Phone", key: "Phone" },
      { header: "Priority", key: "Priority" },
      { header: "Assigned to", key: "assignTo" },
      { header: "Interaction Date", key: "datestore" },
      { header: "Notes", key: "notes" },
      { header: "Previous Calls", key: "previouscalls" },
      { header: "Previous Calls Dates", key: "previouscalldates" },
    ];

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 200);

    formattedDate = currentDate.toISOString().split("T")[0];
    // console.log(formattedDate)

    const baseApiUrl = `https://api.runo.in/v1/crm/interactions?processName=Tanishq`;

    // console.log(baseApiUrl)

    async function fetchDataForPage(formattedDate, pageNo) {
      try {
        const apiUrl = `${baseApiUrl}&date=${formattedDate}&pageNo=${pageNo}`;

        var allDatamini = await axios.get(apiUrl, { headers });

        if (allDatamini.data.statusCode === 0) {
          var allDatamininew = allDatamini.data.data.data;
          //console.log(allData);
          return allDatamininew;
        } else {
          return [];
        }
      } catch (error) {
        console.error(
          `Error fetching data for page ${pageNo}: ${error.message}`
        );
        return [];
      }
    }

    async function fetchAllPages() {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate());

      curformattedDate = currentDate.toISOString().split("T")[0];
      // console.log("curformattedDate", curformattedDate)

      const Data = [];
      while (true) {
        let pageNo = 1;
        while (true) {
          const dataForPage = await fetchDataForPage(formattedDate, pageNo);

          if (dataForPage.length === 0) {
            break;
          }

          Data.push(...dataForPage);
          // console.log("pageNo", pageNo)
          pageNo++;
        }

        if (formattedDate > curformattedDate) {
          break;
        }

        const originalDate = new Date(formattedDate);

        originalDate.setDate(originalDate.getDate() + 1);

        formattedDate = originalDate.toISOString().split("T")[0];

        // console.log("formattedDate", formattedDate)
      }
      return Data;
    }

    allData = await fetchAllPages();

    for (let i = 0; i < allData.length; i++) {
      for (let j = 0; j < allData[i].userFields.length; j++) {
        if (allData[i].userFields[j].name == "Purchase Type") {
          for (let k = 0; k < allData[i].userFields[j].value.length; k++) {
            if (allData[i].userFields[j].value[k] == "Purchase") {
              purchaseData.push(allData[i]);
            }
          }
        }
      }
    }

    for (let p = 0; p < purchaseData.length; p++) {
      var previosCall = "";
      var previosCallDate = "";

      for (let q = 0; q < allData.length; q++) {
        if (purchaseData[p].customer.id == allData[q].customer.id) {
          for (let j = 0; j < allData[q].userFields.length; j++) {
            if (allData[q].userFields[j].name == "Status") {
              if (allData[q].userFields[j].value == "Connected") {
                const startDateString = dateCurrentFormat(allData[q].createdAt);
                const endDateString = dateCurrentFormat(
                  purchaseData[p].createdAt
                );

                // Convert the date strings to yyyy-mm-dd format
                const startDateParts = startDateString.split("-");
                const endDateParts = endDateString.split("-");
                const startDateFormatted = `${startDateParts[2]}-${startDateParts[1]}-${startDateParts[0]}`;
                const endDateFormatted = `${endDateParts[2]}-${endDateParts[1]}-${endDateParts[0]}`;

                // Parse the date strings into Date objects
                const startDate = new Date(startDateFormatted);
                const endDate = new Date(endDateFormatted);

                // Calculate the time difference in milliseconds
                const timeDifference = endDate - startDate;

                // Convert the time difference to days
                const daysDifference = Math.floor(
                  timeDifference / (1000 * 60 * 60 * 24)
                );

                previosCall = previosCall + " " + daysDifference;
                console.log(previosCall);
                previosCallDate =
                  previosCallDate +
                  " " +
                  dateCurrentFormat(allData[q].createdAt);
                console.log(previosCallDate);
              }
            }
          }
        }
      }

      var finalData = {
        Customer_Id: purchaseData[p].customer.id,
        Name: purchaseData[p].customer.name,
        Phone: purchaseData[p].customer.phoneNumber,
        Priority: purchaseData[p].priority,
        Assigned_to: purchaseData[p].assigned.to,
        Interaction_Date: dateCurrentFormat(purchaseData[p].createdAt),
        Notes: purchaseData[p].notes,
        previousCalls: previosCall,
        previousCallDates: previosCallDate,
      };

      finalArrayData.push(finalData);
    }

    for (let m = 0; m < finalArrayData.length; m++) {
      worksheet.addRow({
        uniqueIds: finalArrayData[m].Customer_Id,
        Name: finalArrayData[m].Name,
        Phone: finalArrayData[m].Phone,
        Priority: finalArrayData[m].Priority,
        assignTo: finalArrayData[m].Assigned_to,
        datestore: finalArrayData[m].Interaction_Date,
        notes: finalArrayData[m].Notes,
        previouscalls: finalArrayData[m].previousCalls,
        previouscalldates: finalArrayData[m].previousCallDates,
      });
    }
    // console.log("All Data", allData);
    //console.log("Purchasedata", purchaseData);
    // console.log("finalArrayData", finalArrayData);

    workbook.xlsx
      .writeBuffer()
      .then((buffer) => {
        sendFileToTelegram(buffer);

        // Finally, end the response
        // res.end();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error generating Excel file");
      });

    function sendFileToTelegram(fileBuffer) {
      const axios = require("axios");
      const FormData = require("form-data");

      const botToken = info.BOT_TOKEN;

      const chatId = info.OWNER_CHATID;
      const chatId2 = info.MANOJ_CHATID;
      const chatId3 = info.MADHUSMITA_CHATID;
      const chatIds = [
        info.OWNER_CHATID,
        info.MANOJ_CHATID,
        info.MADHUSMITA_CHATID,
        // info.MOHEET_CHATID,
        // info.PUNIT_CHATID,
      ];

      async function sendFileToChat(chatId) {
        const formData = new FormData();
        formData.append("document", fileBuffer, {
          filename: `RAI_PROCESSED${formattedDate}.xlsx`,
        });

        axios
          .post(
            `https://api.telegram.org/bot${botToken}/sendDocument?chat_id=${chatId}`,
            formData,
            {
              headers: {
                ...formData.getHeaders(),
              },
            }
          )
          .then((response) => {
            console.log("Excel file sent to Telegram");
          })
          .catch((error) => {
            console.error("Error sending Excel file to Telegram:", error);
          });
      }

      (async () => {
        try {
          for (const chatId of chatIds) {
            await sendFileToChat(chatId);
          }
          console.log("All files sent successfully");
        } catch (error) {
          console.error("Error sending files:", error);
        }
      })();
    }
    res.status(200).send({ message: "success" });
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

module.exports = { listCrmInteraction, Test };
