function AlienStubborn(position) {
	var $alienstubborn = $('<img />', {
              src: 'img/stubborn.gif'})
              .addClass(settings.alienstubborn)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var points = 25;
  var direction = 'left';
  var hitImage = $('<img />', {
              src: 'img/hit-stubborn.gif'})
              .addClass(settings.alienstubborn)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  Alien.call(this, points, hitImage);
  Character.call(this, position, $alienstubborn, direction);
}

AlienStubborn.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

AlienStubborn.prototype.fire = function() {
  return Alien.prototype.fire.call(this);
}