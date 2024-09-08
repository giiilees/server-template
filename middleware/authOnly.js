const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/user");

module.exports = async function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    const result = await User.Handle.findById(decoded._id);
    if (!result) return res.status(401).send("User does not exist");
    req.user = result;

    next();
  } catch (ex) {
    res.status(400).send({ message: "Invalid token." });
    return;
  }
};
