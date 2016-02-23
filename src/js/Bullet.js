//Bullet.js creates a generic bullet
function Bullet(direction) {
	this.direction = direction;
}

//AlienBullet and HeroBullet are descendents of Bullet
Bullet.prototype = Object.create(AlienBullet.prototype);
Bullet.prototype = Object.create(HeroBullet.prototype);