const express = require("express");
const config = require("config");
const app = express();
const winston = require("winston");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const { Expo } = require("expo-server-sdk");

const io = new Server(server, {
  cors: {
    origins: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

let expo = new Expo({
  useFcmV1: false,
});

app.set("expo", expo);

app.set("io", io);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  //defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "logfile.log" }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

async function startUP() {
  require("./startup/config")();
  require("./startup/cors")(app);
  await require("./startup/db")(logger);
  require("./startup/routes")(app);
  require("./startup/socket")(io, app, logger);
}
app.get("/", async (req, res) => {
  res.send("Template server");
});

startUP();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const port = process.env.PORT || config.get("port");
const delta = server.listen(port, () =>
  logger.info(`Listening on port ${port}...`)
);

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);

  // You can perform cleanup or other actions here if needed
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  // You can perform cleanup or other actions here if needed
});

module.exports = delta;
