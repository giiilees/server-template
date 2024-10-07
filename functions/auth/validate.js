const { User } = require("../../models/user");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const validate = async (req, res) => {
  const token = req.header("Authorization");

  if (!token) return res.status(403).send({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    const result = await User.Handle.findById(decoded._id);
    if (!result) return res.status(401).send("User does not exist");
    res.send({
      success: true,
      token,
      result,
    });
  } catch (error) {
    return res
      .status(403)
      .send({ message: "Invalid token", error: error.message });
  }
};

module.exports = validate;
