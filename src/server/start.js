"use strict";

require("./utils/globalsAndEnv");
const createApp = require("./app");

console.log("Server Starting");
logger.log("Global Logger Enabled");
logger.log(process.env);

process.on("uncaughtException", (err) => {
  logger.error("uncaughtException", err);
  process.exitCode = 1;
});

const app = createApp();

module.exports = app;
