var view = require('./lib/view');
var player = require('./lib/player');
var current = require('./lib/current');
var router = require("./lib/router");

module.exports = setup;

function setup (options) {
  current.playerOptions(options);
  view.setup();
  player.setup();
  router.setup();
}
