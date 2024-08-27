const data = require("../../public/data/examples.json");

const getAllUsers = async (req, res) => {
  let users = data["users"];

  res.send(users);
};

module.exports = getAllUsers;
