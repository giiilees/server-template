const data = require("../../public/data/examples.json");
const { commonUtils } = require("../../utils/common");

const getUserByID = async (req, res) => {
  let { userid } = req.params;
  let users = data["users"];

  let user = commonUtils.findObjectById(users, "id", userid);

  res.send(user[0]);
};

module.exports = getUserByID;
