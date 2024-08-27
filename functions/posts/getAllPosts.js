const data = require("../../public/data/examples.json");

const getAllPosts = async (req, res) => {
  let users = data["posts"];

  res.send(users);
};

module.exports = getAllPosts;
