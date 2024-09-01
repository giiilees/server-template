const mongoose = require("mongoose");
const { Post } = require("../../models/post");

const getPostByID = async (req, res) => {
  let { postID } = req.body;

  const result = await Post.Handle.findById(postID).populate("authorID");

  res.send({
    success: true,
    data: result,
  });
};

module.exports = getPostByID;
