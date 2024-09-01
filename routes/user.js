const express = require("express");
const userAdd = require("../functions/user/add");
const router = express.Router();

router.post("/add", userAdd);

module.exports = router;
