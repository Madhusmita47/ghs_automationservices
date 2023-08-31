const axios = require("axios");
const catchAsyncError = require("../middleware/catchasyncErrors");
const serviceghs = require("../service/ghsInstallService");
const { dbQuery } = require("../config/database");
const info = require("../config/test")

const uploadGhsExcel = async (req, res) => {
  try {
    const invoice = req.body;

    const result = await serviceghs.uploadGhsExcel(invoice);

    res.status(201).json({ message: result.message });
  } catch (error) {
    // Handle error
    catchAsyncError(error);
  }
};

const playIvers5days = async (req, res) => {
  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      // 'auth-key': authKey,
      "Content-Type": "application/json",
    };

    const createivrs = await dbQuery(
      `SELECT g.*
      FROM ghs_due_installemnt g
      JOIN (
          SELECT GHSAccount_No, MAX(GHS_ID) AS Max_GHS_ID
          FROM ghs_due_installemnt
          WHERE Next_Installment_Due_Date = DATE_ADD(CURDATE(), INTERVAL 5 DAY)
            AND Total_Due > 0
          GROUP BY GHSAccount_No
      ) max_ghs ON g.GHSAccount_No = max_ghs.GHSAccount_No AND g.GHS_ID = max_ghs.Max_GHS_ID
      ORDER BY g.GHS_ID DESC`
    );

    for (let i = 0; i < createivrs.length; i++) {
      const apiUrl = `http://103.255.103.28/api/voice/voice_broadcast.php?username=sr1770&token=Rt5Ps7&plan_id=33084&announcement_id=444002&caller_id=1&contact_numbers=${createivrs[i].Contact_Number}&retry_json={"FNA":"2","FBZ":"2","FCG":"2","FFL":"2"}&dtmf_wait=1&dtmf_wait_time=1`;

      const response = await axios.get(apiUrl, { headers });
    }
    // console.log(createivrs);

    // const responseData = response.data;
    // res.json(responseData);
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

const playIvers7days = async (req, res) => {
  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      // 'auth-key': authKey,
      "Content-Type": "application/json",
    };

    const createivrs = await dbQuery(
      `SELECT g.*
      FROM ghs_due_installemnt g
      JOIN (
          SELECT GHSAccount_No, MAX(GHS_ID) AS Max_GHS_ID
          FROM ghs_due_installemnt
          WHERE Next_Installment_Due_Date = DATE_ADD(CURDATE(), INTERVAL 7 DAY)
            AND Total_Due > 0
          GROUP BY GHSAccount_No
      ) max_ghs ON g.GHSAccount_No = max_ghs.GHSAccount_No AND g.GHS_ID = max_ghs.Max_GHS_ID
      ORDER BY g.GHS_ID DESC`
    );

    for (let i = 0; i < createivrs.length; i++) {
      const apiUrl = `http://103.255.103.28/api/voice/voice_broadcast.php?username=sr1770&token=Rt5Ps7&plan_id=33084&announcement_id=444002&caller_id=1&contact_numbers=${createivrs[i].Contact_Number}&retry_json={"FNA":"2","FBZ":"2","FCG":"2","FFL":"2"}&dtmf_wait=1&dtmf_wait_time=1`;

      const response = await axios.get(apiUrl, { headers });
    }
    console.log(createivrs);

    // const responseData = response.data;
    // res.json(responseData);
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

const createAllocation = async (req, res) => {
  var rsodetail;
  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

    const apiUrl = "https://api.runo.in/v1/user/ids";

    const response = await axios.get(apiUrl, { headers });

    rsodetail = response.data;
    // console.log(rsodetail)
    // return rsodetail;
  } catch (error) {
    // Handle errors
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }

  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };
    const apiUrl = "https://api.runo.in/v1/crm/allocation";

    const createallocation = await dbQuery(
      `SELECT g.*
      FROM ghs_due_installemnt g
      JOIN (
          SELECT GHSAccount_No, MAX(GHS_ID) AS Max_GHS_ID
          FROM ghs_due_installemnt
          WHERE Next_Installment_Due_Date NOT 
            IN ( DATE_ADD(CURDATE(), INTERVAL 5 DAY),DATE_ADD(CURDATE(), INTERVAL 6 DAY),DATE_ADD(CURDATE(), 
            INTERVAL 7 DAY)) AND Total_Due > 0
          GROUP BY GHSAccount_No
      ) max_ghs ON g.GHSAccount_No = max_ghs.GHSAccount_No AND g.GHS_ID = max_ghs.Max_GHS_ID
      ORDER BY g.GHS_ID DESC`
    );

    for (let i = 0; i < createallocation.length; i++) {
      var phNo;
      for (let j = 0; j < rsodetail.data.length; j++) {
        if (rsodetail.data[j].name === createallocation[i].RSO) {
          phNo = rsodetail.data[j].phoneNumber;
          // console.log("phNo", phNo)
        }
      }
      var last_installment_date =
        new Date(createallocation[i].Dateof_Last_Installment).getTime() / 1000;

      var next_installment_due_date =
        new Date(createallocation[i].Next_Installment_Due_Date).getTime() /
        1000;

      var Date_of_Enrolment =
        new Date(createallocation[i].Dateof_Enrolment).getTime() / 1000;

      const postData = {
        customer: {
          name: createallocation[i].Customer_Name,
          phoneNumber: "+91" + createallocation[i].Contact_Number,
        },

        priority: -1,
        // "notes":"",
        processName: "GHS",
        assignedTo: phNo,
        userFields: [
          {
            name: "Date Of Enrolment",
            value: Date_of_Enrolment, // this should on timestamp format //const epochTimestamp = new Date(inputDate).getTime() / 1000
          },
          {
            name: "Last Payment Date",
            value: last_installment_date,
          },
          {
            name: "Next Installment Due Date",
            value: next_installment_due_date,
          },
          {
            name: "Next Installment Due",
            value: createallocation[i].Next_Installment_Due,
          },
          {
            name: "Instalment Amount",
            value: createallocation[i].Installment_Amount,
          },
          {
            name: "Total Number Of Instalments Due",
            value: createallocation[i].Total_Due,
          },
        ],
        fixedFields: [
          {
            name: "customer.company.kdm.name",
            displayName: createallocation[i].Typeof_Scheme,
          },
          {
            name: "customer.company.kdm.phoneNumber",
            displayName: createallocation[i].GHSAccount_No,
          },
        ],
      };
      console.log(postData);
      const response = await axios.post(apiUrl, postData, { headers });
    }
    // const responseData = response.data;
    // res.json(responseData);
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

const createInteraction = async (req, res) => {
  var rsodetail;
  try {
    const authKey = info.AUTH_KEY; // Replace with the actual authentication key
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

    const apiUrl = "https://api.runo.in/v1/user/ids";

    const response = await axios.get(apiUrl, { headers });

    rsodetail = response.data;
    // console.log(rsodetail);
    // return rsodetail;
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }

  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };
    const apiUrl = "https://api.runo.in/v1/crm/interaction";

    // const createallocation = await dbQuery(
    //   `SELECT * FROM ghs_due_installemnt WHERE Next_Installment_Due_Date NOT IN ( DATE_ADD(CURDATE(), INTERVAL 5 DAY),DATE_ADD(CURDATE(), INTERVAL 6 DAY),DATE_ADD(CURDATE(), INTERVAL 7 DAY)) AND Total_Due > 0`
    // );

    const createallocation = await dbQuery(
      `SELECT * FROM ghs_due_installemnt WHERE Total_Due > 0 AND GHS_CRETN_DT = CURRENT_DATE - INTERVAL 1 DAY AND Contact_Number IN (SELECT Contact_Number FROM ghs_due_installemnt WHERE
        GHS_CRETN_DT = CURRENT_DATE 
        AND Total_Due = 0)`
    );

    for (let i = 0; i < createallocation.length; i++) {
      var phNo;
      for (let j = 0; j < rsodetail.data.length; j++) {
        if (rsodetail.data[j].name === createallocation[i].RSO) {
          phNo = rsodetail.data[j].phoneNumber;
        }
      }

      var last_installment_date =
        new Date(createallocation[i].Dateof_Last_Installment).getTime() / 1000;
      var next_installment_due_date =
        new Date(createallocation[i].Next_Installment_Due_Date).getTime() /
        1000;

      const postData = {
        customer: {
          name: createallocation[i].Customer_Name,
          phoneNumber: "+91" + createallocation[i].Contact_Number,
          // "email": createallocation[i].Mail_Id,
        },

        priority: -1,
        // "notes":"",
        processName: "GHS",
        assignedTo: phNo,
        userFields: [
          {
            name: "Status",
            value: "Due Paid",
          },
          {
            name: "Last Payment Date",
            value: last_installment_date, // this should on timestamp format //const epochTimestamp = new Date(inputDate).getTime() / 1000
          },
          {
            name: "Next Installment Due Date",
            value: next_installment_due_date,
          },
          {
            name: "Next Installment Due",
            value: createallocation[i].Next_Installment_Due,
          },
          {
            name: "Total Number Of Instalments Due",
            value: createallocation[i].Total_Due,
          },
        ],
      };
      console.log(postData);
      const response = await axios.post(apiUrl, postData, { headers });
    }

    // const responseData = response.data;
    // res.json(responseData);
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

const whatsappReminder = async (req, res) => {
  var rsodetail;
  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

    const apiUrl = "https://api.runo.in/v1/user/ids";

    const response = await axios.get(apiUrl, { headers });

    rsodetail = response.data;

    // return rsodetail;
  } catch (error) {
    // Handle errors
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }

  try {
    const getlist = await dbQuery(
      `SELECT g.*
      FROM ghs_due_installemnt g
      JOIN (
          SELECT GHSAccount_No, MAX(GHS_ID) AS Max_GHS_ID
          FROM ghs_due_installemnt
          WHERE Next_Installment_Due_Date = DATE_ADD(CURDATE(), 
            INTERVAL 4 DAY) AND Total_Due > 0 
          GROUP BY GHSAccount_No
      ) max_ghs ON g.GHSAccount_No = max_ghs.GHSAccount_No AND g.GHS_ID = max_ghs.Max_GHS_ID
      ORDER BY g.GHS_ID DESC`
    );

    // const headers = {
    //   Authorization: `Basic <VTRKcWJFeXIwaWM5VzA1bF9MMVV6bFpWMThnblpkREtZMnZlblFMVUJ6QTo=>`,
    //   "Content-Type": "application/json",
    // };

    const headers = {
      Authorization: info.WP_KEY,
      "Content-Type": "application/json",
    };
    const apiUrl = "https://api.interakt.ai/v1/public/message/";

    for (let i = 0; i < getlist.length; i++) {
      var phNo;
      for (let j = 0; j < rsodetail.data.length; j++) {
        if (rsodetail.data[j].name === getlist[i].RSO) {
          phNo = rsodetail.data[j].phoneNumber;
          console.log("phNo", phNo);
        }
      }
      var amount = getlist[i].Installment_Amount * getlist[i].Total_Due;
      const postData = {
        countryCode: "+91",
        phoneNumber: getlist[i].Contact_Number,
        callbackData: "some text here",
        type: "Template",
        template: {
          name: "ghs_reminder_",
          languageCode: "en",
          bodyValues: [
            getlist[i].GHSAccount_No,
            getlist[i].Customer_Name,
            getlist[i].Next_Installment_Due_Date,
            amount,
            phNo,
          ],
        },
      };

      const response = await axios.post(apiUrl, postData, { headers });
      // const responseData = response.data;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

const whatsappThankYouMessage = async (req, res) => {
  var rsodetail;
  try {
    const authKey = info.AUTH_KEY;
    const headers = {
      "auth-key": authKey,
      "Content-Type": "application/json",
    };

    const apiUrl = "https://api.runo.in/v1/user/ids";

    const response = await axios.get(apiUrl, { headers });

    rsodetail = response.data;

    // return rsodetail;
  } catch (error) {
    // Handle errors
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }

  try {
    const getlist = await dbQuery(
      `SELECT * FROM ghs_due_installemnt WHERE Total_Due > 0 AND GHS_CRETN_DT = CURRENT_DATE - INTERVAL 1 DAY AND Contact_Number IN (SELECT Contact_Number FROM ghs_due_installemnt WHERE
        GHS_CRETN_DT = CURRENT_DATE 
        AND Total_Due = 0)`
    );
    
    // const headers = {
    //   Authorization: `Basic <VTRKcWJFeXIwaWM5VzA1bF9MMVV6bFpWMThnblpkREtZMnZlblFMVUJ6QTo=>`,
    //   "Content-Type": "application/json",
    // };
   
    const headers = {
      Authorization: info.WP_KEY,
      "Content-Type": "application/json",
    };
    console.log(headers)
    const apiUrl = "https://api.interakt.ai/v1/public/message/";

    for (let i = 0; i < getlist.length; i++) {
      var phNo;
      for (let j = 0; j < rsodetail.data.length; j++) {
        if (rsodetail.data[j].name === getlist[i].RSO) {
          phNo = rsodetail.data[j].phoneNumber;
          console.log("phNo", phNo);
        }
      }
      var amount = getlist[i].Installment_Amount * getlist[i].Total_Due;
      const postData = {
        countryCode: "+91",
        phoneNumber: getlist[i].Contact_Number,
        callbackData: "some text here",
        type: "Template",
        template: {
          name: "ghs_thankyou",
          languageCode: "en_GB",
          bodyValues: [getlist[i].Customer_Name, amount],
        },
      };

      const response = await axios.post(apiUrl, postData, { headers });
      // const responseData = response.data;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    catchAsyncError(error);
  }
};

module.exports = {
  playIvers5days,
  playIvers7days,
  uploadGhsExcel,
  createInteraction,
  createAllocation,
  whatsappReminder,
  whatsappThankYouMessage,
};

