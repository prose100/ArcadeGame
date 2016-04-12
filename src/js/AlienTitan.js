//AlienTitan.js creates an alientitan
function AlienTitan(position) {
 var points = 50;
 var direction = 'left';
 var $normalImage = $('<img />', {
              src: 'img/titan.gif'})
              .addClass(settings.alientitan)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
 var $hitImage = $('<img />', {
              src: 'img/hit-titan.gif'})
              .addClass(settings.alientitan)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  this.normalImage = function() { return $normalImage };
  this.hitImage = function() { return $hitImage };

  Alien.call(this, points);
  Character.call(this, position, $normalImage, direction);
}

//set normal and hit images
AlienTitan.prototype.setImage = function(type) {
  Character.prototype.clearImage.call(this);
  if (type == 'normal') {
    this.image = this.normalImage();
  }
  if (type == 'hit') {
    this.image = this.hitImage();
  }
}

//draws alientitan
AlienTitan.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

//alientitan fires bullet
AlienTitan.prototype.fire = function() {
  return Alien.prototype.fire.call(this);
}