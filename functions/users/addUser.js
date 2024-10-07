const { User } = require("../../models/user");
const _ = require("lodash");
const { commonUtils } = require("../../utils/common");

const addUser = async (req, res) => {
  let validatedBody = _.pick(req.body, ["name", "username", "email"]);

  const { error } = User.validate({
    ...validatedBody,
    password: req.body.password,
  });
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User.Handle(validatedBody);
  await user.hashPassword(req.body.password);
  user.createdAt = Date.now();
  user.username = commonUtils.generateUsername(req.body.name);
  const final = await user.save();
  let token = await user.generateAuthToken();
  res.send({ success: true, data: final, token });
};

module.exports = addUser;
