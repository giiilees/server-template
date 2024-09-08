const express = require("express");
const { login, validate } = require("../functions/auth");

const router = express.Router();

router.post("/", login);
router.post("/validate", validate);

module.exports = router;
