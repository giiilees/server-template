const { User } = require("../../models/user");

const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;

  let emailVerified = email.replace(" ", "");

  const result = await User.Handle.findOne({ email: emailVerified });
  if (!result)
    return res.status(404).send({
      success: false,
      error: 101,
      message: "Invalid email or password.",
    });

  if (!password) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(password, result.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  let token = await result.generateAuthToken();

  res.send({ success: true, token });
};

module.exports = login;
