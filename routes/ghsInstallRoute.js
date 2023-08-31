const express = require("express");

const router = express.Router();

const {
  playIvers5days,
  playIvers7days,
  uploadGhsExcel,
  createAllocation,
  createInteraction,
  whatsappReminder,
  whatsappThankYouMessage,
} = require("../controller/ghsController");

router.post("/uploadexcel", uploadGhsExcel);

router.get("/createivrs5", playIvers5days);
router.get("/createivrs7", playIvers7days);

router.post("/createallocation", createAllocation);
router.post("/createInteraction", createInteraction);

router.post("/whatsappReminder", whatsappReminder);
router.post("/whatsappThankYouMessage", whatsappThankYouMessage);

module.exports = router;
