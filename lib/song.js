var attrs   = require('attrs'),
    dom     = require("domquery"),
    current = require('./current'),
    render  = require('./render');

module.exports = newSong;

function newSong(options){
  var song = attrs({
    title: options.title,
    url: options.url,
    index: options.index
  });

  song.view = options.view;

  song.play = function(){
    current.playing(song);
    current.index(song.index());
  };

  song.view.select('span').on('click', song.play);

  return song;
}
