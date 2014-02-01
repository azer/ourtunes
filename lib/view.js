var dom      = require("domquery"),
    current  = require('./current'),
    header   = require('./header'),
    playlist = require('./playlist'),
    pause    = require('./pause');

module.exports = {
  setup: setup
};

function setup(){
  header.setup();
  playlist.setup();

  dom(window)
    .on(':left', playlist.prev)
    .on(':right', playlist.next)
    .on(':space', pause)
    .on(':enter', pause);
}
