const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

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
  password: {
    type: String,
    select: false,
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

schema.pre("save", function () {
  this.updatedAt = Date.now();
});

schema.methods.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  let pass = await bcrypt.hash(password, salt);
  this.password = pass;
};

schema.methods.generateAuthToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const Handle = mongoose.model("User", schema);

function validate(post) {
  const schema = Joi.object({
    name: Joi.string().max(250).required(),

    email: Joi.string().email().max(250).required(),
    password: Joi.string().max(300).required(),
  });

  return schema.validate(post);
}

exports.User = {
  Handle,
  validate,
};
