const { Post } = require("../../models/post");

const getAllPosts = async (req, res) => {
  const count = await Post.Handle.countDocuments({});
  const results = await Post.Handle.find({})
    .sort({ _id: -1 })
    .skip(req.body.skip ? req.body.skip : 0)
    .limit(req.body.limit ? req.body.limit : 4);

  res.send({ count, results });
};

module.exports = getAllPosts;
