//Alien.js creates a generic alien
function Alien(points) {
  this.points = points;
}

//AlienWimpy, AlienStubborn, and AlienTitan are descendents of Alien
Alien.prototype = Object.create(AlienWimpy.prototype);
Alien.prototype = Object.create(AlienStubborn.prototype);
Alien.prototype = Object.create(AlienTitan.prototype);

Alien.prototype.fire = function() {
  var bullet = new AlienBullet(new Position(Position.prototype.getPositionX.call(this.position),
                                           Position.prototype.getPositionY.call(this.position)+1));
  return bullet;
}