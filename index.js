const Logger = require("@open-node/logger");

function Main(cnf) {
  const { logger } = cnf;

  return new Logger(logger);
}

module.exports = Main;
