const express = require("express");
const userAdd = require("../functions/user/add");
const makeCalc = require("../functions/test/calc");
const router = express.Router();

router.post("/calc", makeCalc);

module.exports = router;
