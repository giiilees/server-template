const express = require("express");

const error = require("../middleware/error");
const media = require("../routes/media");

const test = require("../routes/test");
const users = require("../routes/users");
const auth = require("../routes/auth");
const posts = require("../routes/posts");
const comments = require("../routes/comments");

module.exports = function (app) {
  app.use(express.json());
  app.use("/static", express.static("public"));
  app.use("/media", media);
  app.use("/test", test);
  app.use("/users", users);
  app.use("/auth", auth);
  app.use("/posts", posts);
  app.use("/comments", comments);

  app.use(error);
};
