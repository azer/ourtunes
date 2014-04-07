var view = require('./lib/view');
var player = require('./lib/player');
var current = require('./lib/current');

module.exports = setup;

function setup (options) {
  current.playerOptions(options);
  view.setup();
  player.setup();
}
