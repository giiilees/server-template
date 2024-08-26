const express = require("express");

const error = require("../middleware/error");
const media = require("../routes/media");

module.exports = function (app) {
  app.use(express.json());
  app.use("/static", express.static("public"));
  app.use("/media", media);

  app.use(error);
};
