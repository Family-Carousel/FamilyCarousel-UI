const sls = require("serverless-http");
const binaryMimeTypes = require("./binaryMimeTypes");
const nuxtBuild = require("./nuxtBuild");

let handler;

module.exports.nuxt = async (event, context) => {
  if (!handler) {
    handler = sls(nuxtBuild, {
      request: (request) => {
        request.serverless = { event, context };
      },
      binary: binaryMimeTypes
    });
  }

  const res = await handler(event, context);

  return res;
};
