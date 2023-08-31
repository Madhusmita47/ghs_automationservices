const express = require("express");

const router = express.Router();
const {
  listCrmInteraction,
} = require("../controller/runoInteractionController");

router.get("/runoreport", listCrmInteraction);

module.exports = router;
