var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append('#{item}');
})('The most Cretive minds in the Art');
