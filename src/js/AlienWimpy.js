//AlienWimpy.js creates an alienwimpy
function AlienWimpy(position) {
  var points = 10;
  var direction = 'left';
  var $normalImage = $('<img />', {
              src: 'img/wimpy.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var $hitImage = $('<img />', {
              src: 'img/alienhit.gif'})
              .addClass(settings.alienwimpy)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));

  this.normalImage = function() { return $normalImage };
  this.hitImage = function() { return $hitImage };

  Alien.call(this, points, $hitImage);
  Character.call(this, position, $normalImage, direction);
}

AlienWimpy.prototype.setImage = function(type) {
    Character.prototype.clearImage.call(this);
    if (type == 'normal') {
      this.image = this.normalImage();
    }
    if (type == 'hit') {
      console.log(this.hitImage());
      this.image = this.hitImage();
    }
  }

//draws an alienwimpy
AlienWimpy.prototype.draw = function() {
  Character.prototype.draw.call(this);
}

//alienwimpy fires bullet
AlienWimpy.prototype.fire = function() {
  return Alien.prototype.fire.call(this);
}