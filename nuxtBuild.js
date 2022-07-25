const { Nuxt } = require("nuxt-start");

const config = require("./nuxt.config.js");

const nuxtBuild = new Nuxt({ ...config, dev: false });

module.exports = (req, res) =>
  nuxtBuild.ready().then(() => nuxtBuild.server.app(req, res));
