function AlienTitan(position) {
	var $alientitan = $('<img />', {
              src: 'img/titan.gif'})
              .addClass(settings.alientitan)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  var points = 50;

  Alien.call(this, points);
  Character.call(this, position, $alientitan);
}

AlienTitan.prototype.draw = function() {
  Character.prototype.draw.call(this);
}