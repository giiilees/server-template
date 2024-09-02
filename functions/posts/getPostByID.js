const { Comment } = require("../../models/comment");
const { Post } = require("../../models/post");
const { commonUtils } = require("../../utils/common");

const getPostByID = async (req, res) => {
  let { postID } = req.body;

  const post = await Post.Handle.findById(postID).populate("authorID");

  if (!post)
    return res.status(404).send({
      success: false,
      message: "Post not found",
    });

  const comments = await Comment.Handle.find({
    postID,
  }).sort({
    _id: -1,
  });

  let obj = post.toObject() || {};

  res.send({
    ...obj,
    comments,
  });
};

module.exports = getPostByID;
