$ = require 'jquery'

do fill = (item = 'The most cretive minds in the Art') ->
	$('.tagline').append '#{item}'