const express = require("express");

const router = express.Router();
const {
  listCrmInteraction,

  Test,
} = require("../controller/runoInteractionController");

router.get("/runoreport", listCrmInteraction);
router.get("/test", Test);

module.exports = router;
