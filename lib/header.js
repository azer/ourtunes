var dom      = require('domquery'),
    current  = require('./current'),
    render   = require("./render"),
    playlist = require('./playlist'),
    pause    = require('./pause');

module.exports = {
  setup: setup
};

function onPauseChange(paused){
  if(paused) {
    dom('.container').removeClass('playing');
    return;
  }

  dom('.container').addClass('playing');
}

function setup(){
  current.pause.subscribe(onPauseChange);

  dom(render('header.html'))
    .insert('.container');

  dom('svg').on('click', pause);
}
