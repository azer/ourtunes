var dom = require('domquery');
var shuffle = require('shuffle-array');
var current = require('./current');
var render = require("./render");
var newSong = require('./song');
var songs = [];

module.exports = {
  next: next,
  prev: prev,
  songs: songs,
  setup: setup
};

function next(){
  songs[(current.index() + 1) % songs.length].play();
}

function prev(){
  songs.slice(current.index() - 1)[0].play();
}

function setup(){
  dom('.container').add(render('playlist.html'));

  var artist, album, title, ind;
  var content = current.content();

  for (title in content) {
    songs.push(newSong(content[title], title)) - 1;
  }

  songs = shuffle(songs);
  var i = -1, len = songs.length;
  while ( ++i < len ){
    songs[i].index(i);
    songs[i].show();
  }
}
