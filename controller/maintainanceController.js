const catchAsyncError = require("../middleware/catchasyncErrors");
const maintainanceService = require("../service/maintainanceService");
const { dbQuery } = require("../config/database");
const axios = require('axios');
const moment = require('moment-timezone');
const info = require("../config/test")
//----------------------------------------------------------------------------------
const TelegramBot = require("node-telegram-bot-api");
const botToken = info.BOT_TOKEN;
// console.log(botToken)
const bot = new TelegramBot(botToken, { polling: true });

const getmaintainanceData = async (req, res) => {
    try {
        const getmaintainanceData = await dbQuery(`SELECT * FROM maintenance_list WHERE mntnc_sts = 1`);
        res.status(200).send({ data: "getall maintainancedata", getmaintainanceData });
    } catch (error) {
        catchAsyncError(error);
    }
}

const createMaintainance = async (req, res) => {
    try {
        const maintainance = req.body;
       
        const token = await dbQuery(`SELECT auth_token FROM zoho_auth_key ORDER BY auth_id DESC LIMIT 1`);
       
      

        const authKey = `Zoho-oauthtoken ${token[0].auth_token}`;
        console.log(authKey)
        const headers = {
            "Authorization": authKey,
            "Content-Type": "application/json",
        };

        const apiUrl = "https://mail.zoho.in/api/tasks/groups/60023644382";

        const inputDate = maintainance.date;

        // Add 2 days to the input date and then convert it to the desired format
        const outputDate = moment(inputDate, "DD-MMM-YYYY")
            .add(2, 'days') // Add 2 days
            .tz('Asia/Kolkata') // Set the desired timezone (in this case, Indian Standard Time)
            .format(); // Output in ISO 8601 format


        const postData = {
            title: maintainance.unique_id + " : " + maintainance.problem_type + " at " + maintainance.vertical, //unique_id+":"+problem_type+"at"+vertical
            description: maintainance.name + "\n" + "\n" + maintainance.problem_desc + "\n" + "\n" + maintainance.additional_remark, //name \n\n problem_desc \n\n additional_remark
            reminderDate: outputDate, //date + 2days
            emailReminder: "true",
            assignee: "60021114251"
        }

        // console.log(postData)

        const response = await axios.post(apiUrl, postData, { headers });
        // console.log(response.data.data)
        const rsodetailId = response.data.data.id;
        const rsodetail2Status = response.data.data.status;

        const result = await maintainanceService.createmaintainance(maintainance, rsodetailId, rsodetail2Status, outputDate);

        // const updateidandsts = await dbQuery(
        //     `UPDATE maintenance_list 
        //     SET mntnc_task_id = ?, mntnc_task_sts = ?
        //     WHERE mntnc_unique_id = '${maintainance.unique_id}';`,
        //     [rsodetailId, rsodetail2Status]
        // );

        // console.log("rsodetail:", rsodetailId, "rsodetail2:", rsodetail2Status);
        
        res.status(201).json({ message: result.message });
        
        // res.status(200).send({ message: "success" });
}
    catch (error) {
        // Handle error
        catchAsyncError(error);
    }
};

const createTaskStatus = async (maintainance) => {
    try {
        const getmaintainanceData = await dbQuery(`SELECT * FROM maintenance_list WHERE mntnc_task_sts = 'In Progress' `);
        // console.log(getmaintainanceData)
         for (let i = 0; i < getmaintainanceData.length; i++){
            //  console.log(getmaintainanceData[i].mntnc_task_id)

             const authKey = "Zoho-oauthtoken 1000.9e5924f68ab16ca06feced3028bd6fb3.f859afb40910f7440e214a66bf02275c";
            const headers = {
                "Authorization": authKey,
                "Content-Type": "application/json",
            };

             const apiUrl = `https://mail.zoho.in/api/tasks/groups/60023644382/${getmaintainanceData[i].mntnc_task_id}`;
             
            
            // const apiUrl = `https://mail.zoho.in/api/tasks/groups/60023644382/1693643168220160001`
            //  console.log(apiUrl)
            // const inputDate = maintainance.date;

    
            // const outputDate = moment(inputDate, "DD-MMM-YYYY")
            //     .add(2, 'days') // Add 2 days
            //     .tz('Asia/Kolkata') // Set the desired timezone (in this case, Indian Standard Time)
            //     .format(); // Output in ISO 8601 format

           const response = await axios.get(apiUrl, { headers });
            //  console.log("status", response.data.data.tasks[0].status)
              const updateidandsts = await dbQuery(
              `UPDATE maintenance_list 
               SET mntnc_task_sts = ?
               WHERE mntnc_task_id ='${getmaintainanceData[i].mntnc_task_id}';`,
                  [response.data.data.tasks[0].status]
             );
             console.log("updateidandsts:", updateidandsts)
             
         }
        // res.status(200).send({ message: "success", getmaintainanceData });
    } catch (error) {
        console.error("Error occurred:", error);
        catchAsyncError(error);
    }
};


module.exports = { createMaintainance, getmaintainanceData,createTaskStatus }

// {
//     "status": {
//         "code": 200,
//             "description": "success"
//     },
//     "data": {
//         "tasks": [
//             {
//                 "owner": {
//                     "name": "Bobby Subudhi",
//                     "id": 60006562688
//                 },
//                 "modifiedTime": "2023-09-02T13:56:08+05:30",
//                 "resourceId": "-1",
//                 "assigneeList": [
//                     {
//                         "name": "HR",
//                         "id": 60021114251
//                     }
//                 ],
//                 "attachments": [],
//                 "subtasks": [],
//                 "statusValue": 2,
//                 "description": "“Revamp update blog and announcements”",
//                 "project": {
//                     "name": "General",
//                     "id": "4133025000000004001"
//                 },
//                 "title": "“MN19”",
//                 "priority": "Medium",
//                 "tags": [],
//                 "createdAt": "2023-09-02T13:56:08+05:30",
//                 "followers": [],
//                 "namespaceId": "60023644382",
//                 "id": "1693643168220160001",
//                 "assignee": {
//                     "name": "HR",
//                     "id": 60021114251
//                 },
//                 "serviceId": "-1",
//                 "status": "In Progress"
//             }
//         ]
//     }
// }