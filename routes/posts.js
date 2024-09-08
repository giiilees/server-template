const express = require("express");
const {
  getAllPosts,
  getPostByID,
  getPostComments,
  getPostData,
  addPosts,
} = require("../functions/posts");
const authOnly = require("../middleware/authOnly");

const router = express.Router();

router.get("/", getAllPosts);
router.post("/one", authOnly, getPostByID);
router.post("/add", authOnly, addPosts);

router.post("/comments", getPostComments);
router.get("/:postID", getPostData);

module.exports = router;
