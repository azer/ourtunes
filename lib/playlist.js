var dom = require('domquery');
var shuffle = require('shuffle-array');
var current = require('./current');
var render = require("./render");
var newSong = require('./song');
var songs = [];
current.songs(songs);

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
  current.content({});

  var content = dom('.playlist').html().split('\n');

  dom('.playlist').html(shuffle(content).join('\n'));

  dom('.playlist .song').forEach(function (el, index) {
    var view = dom(el);
    var url = view.attr('data-url');
    var title = view.select('span').html();

    songs.push(newSong({
      title: title,
      url: url,
      view: view,
      index: index
    }));

    current.content()[title] = url;
  });
}
