const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = async function (logger) {
  const db = config.get("db");

  let loaded = false;

  while (!loaded) {
    try {
      await mongoose
        .connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
          dbName: "ghileslagha",
        })
        .then(() => {
          loaded = true;
          logger.info(`Connected to MongoDB`);
          return;
        });
    } catch (error) {
      logger.info(`Error loading MongoDB Retrying ...`);
    }
  }
};
