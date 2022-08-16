'use strict';

module.exports = {
  async static (req, res, next) {
    try {
      const data = {};
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
};
