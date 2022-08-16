"use strict";

const express = require("express");
const createError = require("http-errors");
const app = express();
const { v4: uuidv4 } = require("uuid");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const csurf = require("csurf");

// app files
const router = require("./routes");

module.exports = function () {
  // --------------------------------------
  // Request Logger
  // --------------------------------------
  app.use((req, res, next) => {
    req.startTime = Date.now();
    req.id = uuidv4();

    logger.log("Request started", {
      requestId: req.id,
      method: req.method,
      url: req.url,
    });

    res.on("finish", () => {
      logger.log("Request completed", {
        requestId: req.id,
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        timer: `${Date.now() - req.startTime}ms`,
      });
    });

    next();
  });

  // --------------------------------------
  // Middleware
  // --------------------------------------
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.text());
  app.use(helmet());
  app.use(cookieParser("COOKIE_SECRET"));
  app.use(cookieSession({ name: "session", secret: "SESSION_SECRET" }));
  app.use(csurf());
  app.use(express.static("dist"));

  // --------------------------------------
  // Routes
  // --------------------------------------
  app.use(router);

  // --------------------------------------
  // Error handlers
  // --------------------------------------
  app.use((req, res, next) => {
    next(createError(404, "Not Found"));
  });

  app.use((err, req, res, next) => {
    logger.error(err);

    // render the error page
    res.status(err.status || 500);
    res.json({
      statusCode: err.status || 500,
      error:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Something went wrong",
      stack: process.env.NODE_ENV === "development" ? err.stack : "",
    });
  });

  // --------------------------------------
  // Server start
  // --------------------------------------
  return app;
};
