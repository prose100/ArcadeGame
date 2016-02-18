function Alien(points, hitImage) {
  this.points = points;
  this.hitImage = hitImage;
}

Alien.prototype = Object.create(AlienWimpy.prototype);
Alien.prototype = Object.create(AlienStubborn.prototype);
Alien.prototype = Object.create(AlienTitan.prototype);

Alien.prototype.fire = function() {
}

Alien.prototype.move = function() {
}