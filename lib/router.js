var page = require("page");
var slug = require("to-slug");
var current = require("./current");

module.exports = {
  setup: setup
};

function setup () {
  page('/', index);
  page('/:song', play);
  page('*', index);
  page();

  current.playing.subscribe(onPlay);
}

function index () {}

function play (ctx, next) {
  var songs = current.songs();
  var playing = current.playing();
  var name = ctx.params.song;

  if (/^.+\.\w+$/.test(name)) return next();

  if(playing && name == playing.slug()) return;

  var i = songs.length;

  while (i--) {
    if (songs[i].slug() != name) continue;
    songs[i].play();
    return;
  }

  page('/');
}

function onPlay (song) {
  page('/' + song.slug());
}
