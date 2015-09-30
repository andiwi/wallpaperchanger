var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    }),
    new (winston.transports.File)({
      level: 'info',
      filename: './logs/application.log',
      handleExceptions: true,
      maxsize: 5242880, //5MB
      maxFiles: 5
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function(msg, encoding) {
    logger.info(msg);
  }
};
