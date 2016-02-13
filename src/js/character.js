function Character(position, image) {
  this.position = position;
  this.image = image;
}

Character.prototype = Object.create(Hero.prototype);
Character.prototype = Object.create(Alien.prototype);

Character.prototype.getImage = function() {
  return this.image;
}

Character.prototype.draw = function() {
  (Character.prototype.getImage.call(this)).css({left: Position.prototype.getPositionX.call(this.position), 
                  top: Position.prototype.getPositionY.call(this.position)});
}