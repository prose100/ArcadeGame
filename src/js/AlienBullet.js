function AlienBullet(position) {
	var $alienbullet = $('<img />', {
              src: 'img/alien_blt.gif'})
              .addClass(settings.alienbullet_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var direction = 'down';            

	Character.call(this, position, $alienbullet, direction);
}

AlienBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}