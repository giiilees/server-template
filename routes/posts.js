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

router.post("/comments", getPostComments);
router.get("/:postID", getPostData);

module.exports = router;
