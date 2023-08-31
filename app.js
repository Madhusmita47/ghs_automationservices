const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const cron = require("node-cron");
const ExcelJS = require("exceljs");

const fs = require("fs");

app.use(express.json());

app.use(cors());

//--------route import---------------------
const ghsRoute = require("./routes/ghsInstallRoute");
const storeRoute = require("./routes/storeRoute");
const attendanceRoute = require("./routes/attendanceRoute");
const runoRoute = require("./routes/runoRoutes");
const expense = require("./routes/expenseRoute");
const maintainance = require("./routes/maintainanceRoute");
//-----------------------------------------
app.use("/", ghsRoute);
app.use("/", storeRoute);
app.use("/", attendanceRoute);
app.use("/", runoRoute);
app.use("/", expense);
app.use("/", maintainance);

app.use(
  /*,*/ async (req, res) => {
    res.status(404).send({
      status: false,
      message: "Url is wrong please check the end point",
    });
  }
);
// cron.schedule("48 21 * * *", () => {
//   abcd.playIvers5days();
//   abcd.playIvers7days();
//   abcd.createAllocation();
//   //abcd.createInteraction();
//   abcd.whatsappReminder();
//   //abcd.whatsappThankYouMessage();

//   // Your task to be executed at 9 PM IST goes here
//   console.log("Cron job executed at 9 PM IST.");
// });

// Define the base API URL

module.exports = app;
