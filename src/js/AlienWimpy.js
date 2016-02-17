function AlienWimpy(position) {
	var $alienWimpy = $('<img />', {
              src: 'img/wimpy.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var points = 10;
  var direction = 'left';

  Alien.call(this, points);
  Character.call(this, position, $alienWimpy, direction);
}

AlienWimpy.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

AlienWimpy.prototype.fire = function() {
  var bullet = new AlienBullet(new Position(Position.prototype.getPositionX.call(this.position),
                                           Position.prototype.getPositionY.call(this.position)+1));
  return bullet;
}