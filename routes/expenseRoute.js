const express = require("express");

const router = express.Router();

const {
  createexpense,
  getexpenseData,
} = require("../controller/expenseController");

router.post("/createexpense", createexpense);
router.get("/getexpense", getexpenseData);

module.exports = router;
