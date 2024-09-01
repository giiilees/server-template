const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Handle = mongoose.model("User", schema);

function validate(post) {
  const schema = Joi.object({
    name: Joi.string().max(250).required(),
    username: Joi.string().alphanum().min(3).max(10).required(),
    email: Joi.string().email().required(),
  });

  return schema.validate(post);
}

exports.User = {
  Handle,
  validate,
};
