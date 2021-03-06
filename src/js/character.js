//Character.js creates a character
function Character(position, image, direction) {
  this.position = position; 
  this.image = image;
  this.direction = direction;
}

//Hero, Alien, and Bullet are descendents of Character


//getter
Character.prototype.getPosition = function() {
  return this.position;
}

Character.prototype.clearImage = function() {
  this.image.css({'display': 'none'});
}

Character.prototype.setImage = function(image) {
	console.log(image);
  this.image = image;
}

//draws a character
Character.prototype.draw = function() {
  this.image.css(
      {left: Position.prototype.getPositionX.call(this.position)*($(window).width())/20, 
       top: Position.prototype.getPositionY.call(this.position)*($(window).height())/20, 
       'display': 'block'});
}