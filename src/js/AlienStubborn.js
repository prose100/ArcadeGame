function AlienStubborn() {
	var $alienstubborn = $('<img />', {
              src: 'img/stubborn.gif'})
              .addClass(settings.alienstubborn)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));

  var position = new Position(($(window).width()-settings.characterWidth)-100, 0);

  var points = 25;

  Character.call(this, position, $alienstubborn);

  Alien.call(this, points);
}

AlienStubborn.prototype.draw = function() {
  Character.prototype.draw.call(this);
}