var attrs   = require('attrs'),
    dom     = require("domquery"),
    current = require('./current'),
    render  = require('./render');

module.exports = newSong;

function newSong(url, title){
  var song = attrs({
    index: 0,
    title: title,
    url: url
  });

  song.play = function(){
    current.playing(song);
    current.index(song.index());
  };

  song.show = function(){
    var el = dom(render('song.html', song));
    song.view = el;
    el.select('span').on('click', song.play);
    el.insert('.playlist');
  };

  return song;
}
