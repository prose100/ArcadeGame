function HeroBullet(position) {
	var $herobullet = $('<img />', {
              src: 'img/hero_blt.gif'})
              .addClass(settings.herobullet_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));; 
  var direction = 'up';

	Character.call(this, position, $herobullet, direction);
}

HeroBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

HeroBullet.prototype.move = function() {

}