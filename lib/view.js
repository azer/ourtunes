var dom = require("domquery");
var current = require('./current');
var header = require('./header');
var playlist = require('./playlist');
var pause = require('./pause');

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
