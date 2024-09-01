const { Post } = require("../../models/post");
const data = require("../../public/data/examples.json");
const _ = require("lodash");

const addPosts = async (req, res) => {
  let validatedBody = _.pick(req.body, [
    "title",
    "body",
    "hidden",
    "likes",
    "authorID",
  ]);

  const { error } = Post.validate(validatedBody);
  if (error) return res.status(400).send(error.details[0].message);

  const post = new Post.Handle(validatedBody);
  post.createdAt = Date.now();
  const final = await post.save();

  res.send({ success: true, data: final });
};

module.exports = addPosts;
