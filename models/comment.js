const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
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

const Handle = mongoose.model("Comment", schema);

function validate(post) {
  const schema = Joi.object({
    author: Joi.string().max(250).required(),
    body: Joi.string().max(500),
    postID: Joi.string().required(),
  });

  return schema.validate(post);
}

exports.Comment = {
  Handle,
  validate,
};
