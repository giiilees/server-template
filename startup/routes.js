const express = require("express");

const error = require("../middleware/error");
const media = require("../routes/media");

const test = require("../routes/test");
const users = require("../routes/users");
const posts = require("../routes/posts");

module.exports = function (app) {
  app.use(express.json());
  app.use("/static", express.static("public"));
  app.use("/media", media);
  app.use("/test", test);
  app.use("/users", users);
  app.use("/posts", posts);

  app.use(error);
};
