var format    = require('new-format'),
    templates = require('./templates');

module.exports = render;

function render(template, vars){
  return format(templates[template], vars);
}
