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
const stockRoute = require("./routes/stockRoute")
const tokenRoute = require("./routes/tokenRoute")
const callRoute = require("./routes/callingRoute")
const salesRoute = require("./routes/salesRoute")
const userRoute = require("./routes/userRoute")
const resourceRoute = require("./routes/resourceRoute")
const moduleRoute = require("./routes/moduleRoute")
const resourcmstRoute = require("./routes/resourcemstRoute")
const modulemstRoute =require("./routes/modulemstRoute")
//-----------------------------------------
app.use("/", ghsRoute);
app.use("/", storeRoute);
app.use("/", attendanceRoute);
app.use("/", runoRoute);
app.use("/", expense);
app.use("/", maintainance);
app.use("/", stockRoute);
app.use("/", tokenRoute);
app.use("/", callRoute);
app.use("/", salesRoute);
app.use("/", userRoute);
app.use('/', resourceRoute);
app.use("/", moduleRoute);
app.use("/", resourcmstRoute);
app.use("/", modulemstRoute)


app.use(
  /*,*/ async (req, res) => {
    res.status(404).send({
      status: false,
      message: "Url is wrong please check the end point",
    });
  }
);

const abcd = require("./controller/ghsController")
cron.schedule("0 21 * * *", () => {
  abcd.playIvers5days();
  abcd.playIvers7days();
  abcd.createAllocation();
  abcd.createInteraction();
  abcd.whatsappReminder();
  abcd.whatsappThankYouMessage();

  // Your task to be executed at 9 PM IST goes here
  console.log("Cron job executed at 9 PM IST.");
});

const runo = require("./controller/runoInteractionController")
const call = require("./controller/callingreportController")

cron.schedule("0 6 * * *", () => {
  runo.listCrmInteraction();
  call.callingReport();

});

cron.schedule("0 1 * * *", () => {
  runo.Test();
});


const inserToken = require("./service/zohoTokenService")

cron.schedule("55 * * * *", () => {
  inserToken.insertToken();
  //   console.log("Cron job executed at 9 PM IST.");

});





module.exports = app;
