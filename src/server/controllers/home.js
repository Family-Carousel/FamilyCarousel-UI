"use strict";

module.exports = {
  async index(req, res, next) {
    try {
      res.json({ csrfToken: req.csrfToken() });
    } catch (error) {
      logger.error("CSRF Error: ", error);
      next(error);
    }
  },
};
