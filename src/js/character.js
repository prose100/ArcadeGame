function Character(image, position) {
  this.image = image;
  this.position = position;
}

Character.prototype = Object.create(Hero.prototype);

Character.prototype.getImage = function() {
  console.log(this.image);
  return this.image;
}

Character.prototype.draw = function() {
  (Character.prototype.getImage.call(this)).css({left: Position.prototype.getPositionX.call(this.position), 
                  top: Position.prototype.getPositionY.call(this.position)});
}