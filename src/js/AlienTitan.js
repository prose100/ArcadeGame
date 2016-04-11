//AlienTitan.js creates an alientitan
function AlienTitan(position) {
	var $alientitan = $('<img />', {
              src: 'img/titan.gif'})
              .addClass(settings.alientitan)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
 var points = 50;
 var direction = 'left';
 var hitImage = $('<img />', {
              src: 'img/hit-titan.gif'})
              .addClass(settings.alientitan)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  Alien.call(this, points, hitImage);
  Character.call(this, position, $alientitan, direction);
}

//draws alientitan
AlienTitan.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

AlienTitan.prototype.fire = function() {
  return Alien.prototype.fire.call(this);
}