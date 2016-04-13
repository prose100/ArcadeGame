//AlienBullet.js creates an alienbullet
function HeroBullet(position) {
	var $herobullet = $('<img />', {
              src: 'img/hero_blt.gif'})
              .addClass(settings.herobullet_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));; 
  var direction = 'up';

	Character.call(this, position, $herobullet, direction);
}

HeroBullet.prototype = Object.create(Bullet.prototype);

//draw herobullet on gameboard
HeroBullet.prototype.draw = function() {
  Character.prototype.draw.call(this);
}