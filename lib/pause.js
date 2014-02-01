var current  = require("./current"),
    playlist = require('./playlist');

module.exports = pause;

function pause(){
  if(!current.playing()){
    playlist.songs[current.index()].play();
    return;
  }

  if (current.pause()){
    current.pause(false);
    return;
  }

  current.pause(true);
}
