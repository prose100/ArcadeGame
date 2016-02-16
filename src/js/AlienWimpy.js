function AlienWimpy(position) {
	var $alienWimpy = $('<img />', {
              src: 'img/wimpy.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));

  var points = 10;

  Alien.call(this, points);
  Character.call(this, position, $alienWimpy);
}

AlienWimpy.prototype.draw = function() {
  Character.prototype.draw.call(this);
}