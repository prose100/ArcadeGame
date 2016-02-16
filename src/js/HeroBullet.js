function HeroBullet(position) {
	var $herobullet = $('<img />', {
              src: 'img/hero_blt.gif'})
              .addClass(settings.herobullet_class)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));

	Character.call(this, position, $herobullet);
}

HeroBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}