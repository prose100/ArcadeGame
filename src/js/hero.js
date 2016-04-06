//Hero.js creates hero character
function Hero(lives) {
  this.lives = lives;
  this.normalImage = $('<img />', {
              src: 'img/hero.gif'})
              .addClass(settings.hero_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  this.position = new Position(10, 19);
  this.hitImage = $('<img />', {
                src: 'img/explosion.gif'})
                .addClass(settings.hero_class)
                .css({'position':'absolute', 'display': 'none'})
                .appendTo($('.gameBoard'));

  Character.call(this, this.position, this.normalImage);
  }

  //getter and setter of lives
  Hero.prototype.getLives = function() {
    return this.lives;
  }

  Hero.prototype.setLives = function(lives) {
    this.lives = lives;
  }

  Hero.prototype.positionAtHome = function() {
    Position.prototype.setPositionX.call(this.position, 10);
    Position.prototype.setPositionY.call(this.position, 19); 
    Hero.prototype.flipImages.call(this, "newLife");
  }

  //draws hero on the gameboard
  Hero.prototype.draw = function() {
    Character.prototype.draw.call(this);

    this.hitImage.css(
      {left: Position.prototype.getPositionX.call(this.position)*($(window).width())/20, 
       top: Position.prototype.getPositionY.call(this.position)*($(window).height())/20});
  }

  //removes hero from gameboard
  Hero.prototype.remove = function() {
    this.hitImage.remove();
    this.image.remove();
  }

  //toggle hit and normal images
  Hero.prototype.flipImages = function(status) {
      if (status == "destroy") {
        this.normalImage.css({'display': 'none'});
        this.hitImage.css({'display': 'block'});
      } 
      if (status == "newLife") {
        this.hitImage.css({'display': 'none'});
        this.normalImage.css({'display': 'block'});
      }
  }

  //moves hero on gameboard
  Hero.prototype.move = function(direction) {
    if ((direction == 'right') && 
       (Position.prototype.getPositionX.call(this.position) < 19)) {
          Position.prototype.setPositionX.call(this.position, 
          (Position.prototype.getPositionX.call(this.position)) + 1);
    } else if ((direction == 'left') &&
      (Position.prototype.getPositionX.call(this.position) > 1)) {
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

  //checks for collisions between alienbullets/aliens and hero.
  Hero.prototype.checkCollision = function(killer) {
    if (killer.fleet.length) {
      for (var i=0; i<killer.fleet.length; i++) {
        if ((Position.prototype.getPositionX.call(this.position) ==
        Position.prototype.getPositionX.call(killer.fleet[i].position)) &&
        (Position.prototype.getPositionY.call(this.position) ==
        Position.prototype.getPositionY.call(killer.fleet[i].position))) {
          Hero.prototype.flipImages.call(this, "destroy");
          return true;
        }
        return false;
      } 
    }
  }
