const Logger = require("@open-node/logger");

function Main(cnf, deps) {
  const { logger, clientId } = cnf;

  return new Logger(logger, deps, clientId);
}

Main.Deps = ["_"];

module.exports = Main;
