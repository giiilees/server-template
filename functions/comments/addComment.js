const { Comment } = require("../../models/comment");

const _ = require("lodash");

const addComment = async (req, res) => {
  let validatedBody = _.pick(req.body, ["author", "body", "postID"]);

  const { error } = Comment.validate(validatedBody);
  if (error) return res.status(400).send(error.details[0].message);

  const comment = new Comment.Handle(validatedBody);
  comment.createdAt = Date.now();
  const final = await comment.save();

  res.send({ success: true, data: final });
};

module.exports = addComment;
