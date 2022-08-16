"use strict";

require("./utils/globalsAndEnv");
const createApp = require("./app");
const logger = require("./services/helpers/logger");

console.log("server starting");
logger.log("Global Logger Enabled");
console.log(process.env);

process.on("uncaughtException", (err) => {
  logger.error("uncaughtException", err);
  process.exitCode = 1;
});

const app = createApp();

module.exports = app;
