var attrs= require('attrs');
var dom = require("domquery");
var slug = require("to-slug");
var current = require('./current');
var render = require('./render');

module.exports = newSong;

function newSong(options){
  var song = attrs({
    title: options.title,
    url: options.url,
    index: options.index,
    slug: slug(options.title)
  });

  song.view = options.view;

  song.play = function(){
    current.playing(song);
    current.index(song.index());
  };

  song.view.select('span').on('click', song.play);

  return song;
}
