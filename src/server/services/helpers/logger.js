const consola = require('consola');

module.exports = () => {
  return consola.create({
    level: process.env.LOG_LEVEL,
    reporters: [
      process.env.NODE_ENV === 'development' ? new consola.FancyReporter() : new consola.JSONReporter()
    ]
  });
};
