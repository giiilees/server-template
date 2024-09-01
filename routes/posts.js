const express = require("express");
const {
  getAllPosts,
  getPostByID,
  getPostComments,
  getPostData,
  addPosts,
} = require("../functions/posts");

const router = express.Router();

router.get("/", getAllPosts);
router.post("/one", getPostByID);
router.post("/add", addPosts);
router.get("/:postID", getPostData);
router.post("/comments", getPostComments);

module.exports = router;
