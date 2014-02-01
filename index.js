var view   = require('./lib/view'),
    player = require('./lib/player'),
    current = require('./lib/current');

module.exports = setup;

function setup (songs) {
  current.content(songs);
  player.setup();
  view.setup();
}
