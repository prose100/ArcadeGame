function AlienWimpy() {
	var $alienWimpy = $('<img />', {
              src: 'img/wimpy.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));

  var position = new Position(($(window).width()-settings.characterWidth), 0);

  var points = 10;

  Character.call(this, position, $alienWimpy);

  Alien.call(this, points);
}

AlienWimpy.prototype.draw = function() {
  Character.prototype.draw.call(this);
}