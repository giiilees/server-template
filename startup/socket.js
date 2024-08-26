const winston = require("winston");

module.exports = function (io, app, logger) {
  io.on("connection", (socket) => {
    logger.info(socket.id + " Connected");

    socket.on("disconnect", function () {
      //winston.info(socket.id + ' Disconnected')
    });
  });

  io.on("connect_error", (err) => {
    logger.info(`connect_error due to ${err.message}`);
  });
};
