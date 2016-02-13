function Alien(points) {
  this.points = points;
}

Alien.prototype = Object.create(AlienWimpy.prototype);