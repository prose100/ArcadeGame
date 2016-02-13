function AlienTitan() {
	var $alientitan = $('<img />', {
              src: 'img/titan.gif'})
              .addClass(settings.alientitan)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));

  var position = new Position(($(window).width()-settings.characterWidth)-50, 0);

  var points = 50;

  Character.call(this, position, $alientitan);

  Alien.call(this, points);
}

AlienTitan.prototype.draw = function() {
  Character.prototype.draw.call(this);
}