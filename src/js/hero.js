//Hero.js creates hero character
function Hero(lives) {
  this.lives = lives;
  var position = new Position(10, 19);
  var $normalImage = $('<img />', {
              src: 'img/hero.gif'})
              .addClass(settings.hero_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var $hitImage = $('<img />', {
                src: 'img/explosion.gif'})
                .addClass(settings.hero_class)
                .css({'position':'absolute', 'display': 'none'})
                .appendTo($('.gameBoard'));
  
  this.normalImage = function() { return $normalImage } 
  this.hitImage = function() { return $hitImage }

  Character.call(this, position, $normalImage);
  }

  //getter and setter of lives
  Hero.prototype.getLives = function() {
    return this.lives;
  }

  Hero.prototype.setLives = function(lives) {
    this.lives = lives;
  }

  Hero.prototype.setImage = function(type) {
    Character.prototype.clearImage.call(this);
    if (type == 'normal') {
      this.image = this.normalImage();
    }
    if (type == 'hit') {
      this.image = this.hitImage();
    }
  }

  Hero.prototype.positionAtHome = function() {
    Position.prototype.setPositionX.call(this.position, 10);
    Position.prototype.setPositionY.call(this.position, 19);
  }

  //draws hero on the gameboard
  Hero.prototype.draw = function() {
    Character.prototype.draw.call(this);
  }

  //removes hero from gameboard
  Hero.prototype.remove = function() {
    //remove normalImage
    this.image = this.normalImage();
    this.image.remove();
    //remove hitImage
    this.image = this.hitImage();
    this.image.remove();
  }

  //moves hero on gameboard
  Hero.prototype.move = function(direction) {
    if ((direction == 'right') && (Position.prototype.getPositionX.call(this.position) < 19)) {
        Position.prototype.setPositionX.call(this.position, 
       (Position.prototype.getPositionX.call(this.position)) + 1);
    } else if ((direction == 'left') && (Position.prototype.getPositionX.call(this.position) > 1)) {
       Position.prototype.setPositionX.call(this.position, 
      (Position.prototype.getPositionX.call(this.position)) - 1);
    }
  }

  //fires bullets
  Hero.prototype.fire = function() {
    var bullet = new HeroBullet(new Position(Position.prototype.getPositionX.call(this.position),
                                            (Position.prototype.getPositionY.call(this.position))-1));
    return bullet;
  }

  //checks for collisions between hero and alienbullets/aliens
  Hero.prototype.checkCollision = function(killer) {
    if (killer.fleet.length) {
      for (var i=0; i<killer.fleet.length; i++) {
        if ((Position.prototype.isSamePosition(this.position, killer.fleet[i].position))) {
          return true;
        }
      }
    return false;
    }
  } 