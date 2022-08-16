'use strict';

const fs = require('fs');

module.exports = {
  async index (req, res, next) {
    let build = {};
    // let vastSecrets = {};
    try {
      const buildFile = fs.readFileSync('build/build.json', 'UTF-8');

      build = JSON.parse(buildFile);

      // vastSecrets = JSON.parse(process.env.VAST_SECRETS.replace(/\\"/g, '"'));
    } catch (e) {}

    build.NODE_ENV = process.env.NODE_ENV;
    // build.VAST_SECRETS = vastSecrets;
    // build.config = config;

    res.json(build);
  }
};
