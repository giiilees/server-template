const { Post } = require("../../models/post");

const getAllPosts = async (req, res) => {
  const results = await Post.Handle.find({
    $and: [
      { hidden: req.body.hidden || false },
      { likes: { $gte: req.body.gte } },
    ],
  });

  res.send(results);
};

module.exports = getAllPosts;
