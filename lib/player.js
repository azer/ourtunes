var dom = require('domquery');
var current = require('./current');
var player = require('play-url')(current.playerOptions());
var playlist = require('./playlist');

player.onEnd(playlist.next);

module.exports = {
  setup: setup
};

function onSongChange(start, stop){
  stop && stop.view.removeClass('selected');

  if(start){
    current.pause(false);
    start.view.addClass('selected');
    player.play(start.url());
  }
}

function onPause(pause){
  if(pause){
    player.pause();
    return;
  }

  player.play();
}

function setup(){
  current.playing.subscribe(onSongChange);
  current.pause.subscribe(onPause);
}
