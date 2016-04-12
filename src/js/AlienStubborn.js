//AlienWimpy.js creates an alienstubborn
function AlienStubborn(position) {	
  var points = 25;
  var direction = 'left';
  var $normalImage = $('<img />', {
              src: 'img/stubborn.gif'})
              .addClass(settings.alienstubborn)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var $hitImage = $('<img />', {
              src: 'img/hit-stubborn.gif'})
              .addClass(settings.alienstubborn)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  this.normalImage = function() { return $normalImage };
  this.hitImage = function() { return $hitImage };

  Alien.call(this, points);
  Character.call(this, position, $normalImage, direction);
}

//set normal and hit images
AlienStubborn.prototype.setImage = function(type) {
  Character.prototype.clearImage.call(this);
  if (type == 'normal') {
    this.image = this.normalImage();
  }
  if (type == 'hit') {
    this.image = this.hitImage();
  }
}

//draws alienstubborn
AlienStubborn.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

//alienstubborn fires bullet
AlienStubborn.prototype.fire = function() {
  return Alien.prototype.fire.call(this);
}