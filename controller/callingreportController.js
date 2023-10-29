const catchAsyncError = require("../middleware/catchasyncErrors");
const axios = require("axios");
const info = require("../config/test")
const ExcelJS = require("exceljs");




let allData = [];
const callingReport = async (req, res) => {

    try {
        const authKey = info.CALLING_AUTH_KEY;
        const headers = {
            "auth-key": authKey,
            "Content-Type": "application/json",
        };
        // https://api.runo.in/v1/crm/interactions?processName=Tanishq&Date=2023-08-25&pageNo=5

        const uniqueRsoNames = [];

        const apiUrl =
            "https://api.runo.in/v1/user";

        const response = await axios.get(apiUrl, { headers });



        // console.log(response.data.data.data)
        allData = response.data.data;
        // console.log(response.data.data)
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("CallingReport");

        worksheet.columns = [
            { header: "RSO", key: "rso" },
            { header: "Total Attempted", key: "TotalAttempted" },
            { header: "Followup", key: "Followup" },
            { header: "Followup in %", key: "Followupin" },
            { header: "Connected", key: "Connected" },
            { header: "Connected in %", key: "Connectedin" },
            { header: "Visit (YES) ", key: "VisitYES" },
            { header: "Vistor %", key: "Vistor" },
            { header: "Visit (NO)", key: "VisitNO" },
            { header: "Non visitor %", key: "Nonvisitor" },
            { header: "Sales Closed", key: "SalesClosed" },
            { header: "Sales Closed %", key: "SalesClosedin" },

        ];

        for (let s = 0; s < allData.length; s++) {
            // console.log(" allData[s].assigned.to:", allData[s].assigned.to)
            if (!uniqueRsoNames.includes(allData[s].name)) {
                uniqueRsoNames.push(allData[s].name);
            }

        }

        
               const currentDate = new Date();
               currentDate.setDate(currentDate.getDate()-1);
        
              formattedDate = currentDate.toISOString().slice(0, 10);
              console.log(formattedDate)

           const baseApiUrl = `https://api.runo.in/v1/crm/interactions?date=${formattedDate}`;

        console.log(baseApiUrl)
        
        // const baseApiUrl = "https://api.runo.in/v1/crm/interactions?date=2023-08-19";

        let pageNo = 1; 
        var response1;
        async function fetchDataForPage(pageNo) {
            try {
                const apiUrl = `${baseApiUrl}&pageNo=${pageNo}`;

                var response1 = await axios.get(apiUrl, { headers });

                if (response1.data.statusCode === 0) {

                    var response1 = response1.data.data.data;

                    return response1;
                } else {
                    return [];
                }
            } catch (error) {
                console.error(`Error fetching data for page ${pageNo}: ${error.message}`);
                return [];
            }
        }


        async function fetchAllPages() {

            const allData = [];

            while (true) {
                const dataForPage = await fetchDataForPage(pageNo);

                if (dataForPage.length === 0) {
                    break;
                }

                allData.push(...dataForPage);

                pageNo++;
            }

            return allData;
        }

        response1 = await fetchAllPages();



        for (let t = 0; t < uniqueRsoNames.length; t++) {

            var rsoName = uniqueRsoNames[t];
            // console.log(rsoName)
            var totalAttempted = 0;
            var connected = 0;
            var coluldnotconnect = 0;

            var follwup = 0;
        
            var customerVisitYes = 0;
            var customerVisitNo = 0;
            var SalesClosed = 0




            //   const apiUrl1 = "https://api.runo.in/v1/crm/interactions?date=2023-08-19&pageNo=4"

            // var response1 = await axios.get(apiUrl1, { headers });

            // console.log( response1.data.statusCode === 0)
            // response1 = response1.data.data.data

            //------------------------------------------------------------------------------------------            


            for (let i = 0; i < response1.length; i++) {

                // console.log(alldata1.data.data.data[i].assigned.to)

                if (uniqueRsoNames[t] == response1[i].assigned.to) {

                    // console.log(response1[i].assigned.to)

                    for (let j = 0; j < response1[i].userFields.length; j++) {

                        if (response1[i].userFields[j].name == "Status") {

                            if (response1[i].userFields[j].value == "Connected") {

                                connected = connected + 1;

                            } else if (
                                response1[i].userFields[j].value == "Could Not Connect"
                            ) {
                                coluldnotconnect = coluldnotconnect + 1;

                            }
                            else if (response1[i].userFields[j].value == "Followup") {
                                follwup = follwup + 1;
                            }
                            else if (response1[i].userFields[j].value == "Sales Closed") {

                                SalesClosed = SalesClosed + 1;
                            }

                        } else if (response1[i].userFields[j].name == "Will Customer Visit") {

                            if (response1[i].userFields[j].value == "Yes") {

                                customerVisitYes = customerVisitYes + 1;

                            } else if (response1[i].userFields[j].value == "No") {

                                customerVisitNo = customerVisitNo + 1;
                            }
                        }

                    }
                }
            }

            totalAttempted = connected + coluldnotconnect + follwup
              if(totalAttempted == 0 ) {
                  worksheet.addRow({
                      rso: rsoName,
                      TotalAttempted: totalAttempted,
                      Followup: follwup,
                      Followupin: (0).toFixed(2),
                      Connected: connected,
                      Connectedin: (0).toFixed(2),
                      VisitYES: customerVisitYes,
                      Vistor: (0).toFixed(2),
                      VisitNO: customerVisitNo,
                      Nonvisitor: (0).toFixed(2),
                      SalesClosed: SalesClosed,
                      SalesClosedin: (0).toFixed(2)

                  });    
              } else {
                  worksheet.addRow({
                      rso: rsoName,
                      TotalAttempted: totalAttempted,
                      Followup: follwup,
                      Followupin: ((follwup / totalAttempted) * 100).toFixed(2),
                      Connected: connected,
                      Connectedin: ((connected / totalAttempted) * 100).toFixed(2),
                      VisitYES: customerVisitYes,
                      Vistor: ((customerVisitYes / totalAttempted) * 100).toFixed(2),
                      VisitNO: customerVisitNo,
                      Nonvisitor: ((customerVisitNo / totalAttempted) * 100).toFixed(2),
                      SalesClosed: SalesClosed,
                      SalesClosedin: ((SalesClosed / totalAttempted) * 100).toFixed(2)

                  });
              }
            // add excel code here for row entry

        
        }

        // res.setHeader(
        //     "Content-Type",
        //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            
        // );
        // res.setHeader(
        //     "Content-Disposition",
        //     "attachment; filename=callingReport.xlsx"
        // );

        workbook.xlsx.writeBuffer()
            .then((buffer) => {
                sendFileToTelegram(buffer);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send("Error generating Excel file");
            });

        function sendFileToTelegram(fileBuffer) {
            const axios = require('axios');
            const FormData = require('form-data');
          

            const botToken = info.BOT_TOKEN;
            const chatIds = [info.MANOJ_CHATID, info.OWNER_CHATID, info.MADHUSMITA_CHATID]

            async function sendFileToChat(chatId) {

                const formData = new FormData();
                formData.append('document', fileBuffer, { filename: `callingReport${formattedDate}.xlsx` });

                  axios.post(`https://api.telegram.org/bot${botToken}/sendDocument?chat_id=${chatId}`, formData, {
                        headers: {
                            ...formData.getHeaders(),
                        },
                    })
                        .then((response) => {
                            console.log('Excel file sent to Telegram');
                        })
                        .catch((error) => {
                            console.error('Error sending Excel file to Telegram:', error);
                        });
                  }
            
                    (async () => {
                   try {
                    for (const chatId of chatIds) {
                        await sendFileToChat(chatId);
                    }
                    console.log('All files sent successfully');
                  } catch (error) {
                    console.error('Error sending files:', error);
                        }
                        
                })();
              
        }
        
        // res.status(200).send({ status: true, message: "success" })
    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};



module.exports = { callingReport }
