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

  var title = document.title;

  current.playing.subscribe(function (song) {
    document.title = song ? song.title() + ' / ' + title : title;
  });

  dom(window)
    .on(':left', playlist.prev)
    .on(':right', playlist.next)
    .on(':space', pause)
    .on(':enter', pause);
}
