const { compareResponse } = require("../services/responseComparisonService");

const router = require("express").Router();

router.post("/compareResponse", compareResponse);

module.exports = router;
