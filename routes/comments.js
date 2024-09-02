const express = require("express");
const { addComment } = require("../functions/comments");

const router = express.Router();

router.post("/add", addComment);

module.exports = router;
