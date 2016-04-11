//AlienWimpy.js creates an alienwimpy
function AlienWimpy(position) {
	var $alienWimpy = $('<img />', {
              src: 'img/wimpy.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var points = 10;
  var direction = 'left';
  var hitImage = $('<img />', {
              src: 'img/alienhit.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  Alien.call(this, points, hitImage);
  Character.call(this, position, $alienWimpy, direction);
}

//draws an alienwimpy on the gameboard
AlienWimpy.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

AlienWimpy.prototype.fire = function() {
  return Alien.prototype.fire.call(this);
}