const data = require("../../public/data/examples.json");
const { commonUtils } = require("../../utils/common");

const getPostByID = async (req, res) => {
  let { postID } = req.body;
  let posts = data["posts"];

  let post = commonUtils.findObjectById(posts, "id", postID);

  res.send(post[0]);
};

module.exports = getPostByID;
