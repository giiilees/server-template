const data = require("../../public/data/examples.json");
const { commonUtils } = require("../../utils/common");

const getPostData = async (req, res) => {
  let { postID } = req.params;
  let posts = data["posts"];
  let users = data["users"];
  let cmnts = data["comments"];

  let post = commonUtils.findObjectById(posts, "id", postID)[0];

  if (!post)
    return res.status(403).send({
      message: "Post not found",
    });

  let author = commonUtils.findObjectById(users, "id", post.authorId)[0];
  let comments = commonUtils.findObjectById(cmnts, "postId", post.id);

  res.send({
    ...post,
    author: author,
    comments,
  });
};

module.exports = getPostData;
