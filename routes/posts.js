const express = require("express");
const getAllPosts = require("../functions/posts/getAllPosts");
const getPostByID = require("../functions/posts/getPostByID");
const getPostComments = require("../functions/posts/getPostComments");

const router = express.Router();

router.get("/", getAllPosts);
router.post("/one", getPostByID);
router.post("/comments", getPostComments);

module.exports = router;
