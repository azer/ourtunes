var attr = require("attr");

module.exports = {
  index: attr(0),
  pause: attr(),
  playing: attr(),
  content: attr(),
  playerOptions: attr({})
};
