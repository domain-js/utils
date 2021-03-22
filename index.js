const Logger = require("@open-node/logger");

function Main(cnf, deps) {
  const { logger } = cnf;

  return new Logger(logger, deps);
}

Main.Deps = ["_"];

module.exports = Main;
