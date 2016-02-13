function AlienBullet() {
	var $alienbullet = $('<img />', {
              src: 'img/alien_blt.gif'})
              .addClass(settings.alienbullet_class)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));
  var position = new Position(($(window).width()-settings.characterWidth-200), 0);

	Character.call(this, position, $alienbullet);
}

AlienBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}