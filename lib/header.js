var dom = require('domquery');
var current = require('./current');
var render = require("./render");
var playlist = require('./playlist');
var pause = require('./pause');

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
  dom('svg').on('click', pause);
}
