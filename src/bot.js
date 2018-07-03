const Eris = require('eris');
const config = require('./config');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

const bot = new Eris.CommandClient(config.token, {}, {
  prefix: config.prefix,
  ignoreSelf: true,
  ignoreBots: true,
  defaultHelpCommand: false,
  getAllUsers: true,
  defaultCommandOptions: {
    caseInsensitive: true,
  },
});

module.exports = bot;
