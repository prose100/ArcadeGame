//Bullet.js creates a generic bullet
function Bullet() {
}

//AlienBullet and HeroBullet are descendents of Bullet
Bullet.prototype = Object.create(Character.prototype);