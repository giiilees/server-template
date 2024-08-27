const express = require("express");

const error = require("../middleware/error");
const media = require("../routes/media");
const user = require("../routes/user");
const test = require("../routes/test");

module.exports = function (app) {
  app.use(express.json());
  app.use("/static", express.static("public"));
  app.use("/media", media);
  app.use("/user", user);
  app.use("/test", test);

  app.use(error);
};
