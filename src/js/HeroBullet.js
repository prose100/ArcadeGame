function HeroBullet() {
	var $herobullet = $('<img />', {
              src: 'img/hero_blt.gif'})
              .addClass(settings.herobullet_class)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));
  var position = new Position(($(window).width()-settings.characterWidth-250), 0);

	Character.call(this, position, $herobullet);
}

HeroBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}