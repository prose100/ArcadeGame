function AlienBullet() {
	var $alienbullet = $('<img />', {
              src: 'img/alien_blt.gif'})
              .addClass(settings.alienbullet_class)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));

	Character.call(this, position, $alienbullet);
}

AlienBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}