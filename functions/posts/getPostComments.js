const data = require("../../public/data/examples.json");
const { commonUtils } = require("../../utils/common");

const getPostComments = async (req, res) => {
  let { postID } = req.body;
  let comments = data["comments"];

  let result = commonUtils.findObjectById(comments, "postId", postID);

  res.send(result);
};

module.exports = getPostComments;
