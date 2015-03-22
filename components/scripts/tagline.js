var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append('#{item}');
})('The most cretive minds in the Art');
