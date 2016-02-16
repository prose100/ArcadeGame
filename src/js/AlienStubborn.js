function AlienStubborn(position) {
	var $alienstubborn = $('<img />', {
              src: 'img/stubborn.gif'})
              .addClass(settings.alienstubborn)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  var points = 25;

  Alien.call(this, points);
  Character.call(this, position, $alienstubborn);
}

AlienStubborn.prototype.draw = function() {
  Character.prototype.draw.call(this);
}