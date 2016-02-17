function Bullet(direction) {
	this.direction = direction;
}

Bullet.prototype = Object.create(AlienBullet.prototype);
Bullet.prototype = Object.create(HeroBullet.prototype);