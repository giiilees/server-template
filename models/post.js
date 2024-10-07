const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
  authorID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Handle = mongoose.model("Post", schema);

function validate(post) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(250).required(),
    body: Joi.string().max(500).allow("", null),
    likes: Joi.number().integer(),
    authorID: Joi.string().max(250),
  });

  return schema.validate(post);
}

exports.Post = {
  Handle,
  validate,
};
