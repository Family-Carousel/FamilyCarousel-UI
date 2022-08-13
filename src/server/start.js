"use strict";

require("./utils/globalsAndEnv");
const createApp = require("./app");

process.on("uncaughtException", (err) => {
  logger.error("uncaughtException", err);
  process.exitCode = 1;
});

const app = createApp();

module.exports = app;
