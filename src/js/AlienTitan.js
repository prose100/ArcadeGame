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

AlienTitan.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

AlienTitan.prototype.fire = function() {
  var bullet = new AlienBullet(new Position(Position.prototype.getPositionX.call(this.position),
                                           Position.prototype.getPositionY.call(this.position)+1));
  return bullet;
}