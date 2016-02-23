//Character.js creates a character
function Character(position, image, direction) {
  this.position = position;
  this.image = image;
  this.direction = direction;
}

//Hero, Alien, and Bullet are descendents of Character
Character.prototype = Object.create(Hero.prototype);
Character.prototype = Object.create(Alien.prototype);
Character.prototype = Object.create(Bullet.prototype);

//getter
Character.prototype.getImage = function() {
  return this.image;
}

//draws a character
Character.prototype.draw = function() {
  (Character.prototype.getImage.call(this)).css(
      {left: Position.prototype.getPositionX.call(this.position)*($(window).width())/20, 
       top: Position.prototype.getPositionY.call(this.position)*($(window).height())/20, 
       'display': 'block'});
}