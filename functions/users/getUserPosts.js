const data = require("../../public/data/examples.json");
const { commonUtils } = require("../../utils/common");

const getUserPosts = async (req, res) => {
  let { userid } = req.body;
  let posts = data["posts"];

  let result = commonUtils.findObjectById(posts, "authorId", userid);

  res.send(result);
};

module.exports = getUserPosts;
