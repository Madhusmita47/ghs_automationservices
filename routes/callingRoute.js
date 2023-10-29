const exoress = require("express");

const router = exoress.Router();

const { callingReport } = require("../controller/callingreportController")


router.get("/callreport", callingReport)


module.exports = router;