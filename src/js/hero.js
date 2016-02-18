function Hero(lives) {
  var $hero = $('<img />', {
              src: 'img/hero.gif'})
              .addClass(settings.hero_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var position = new Position(10, 19);
  this.hitImage = $('<img />', {
                src: 'img/explosion.gif'})
                .addClass(settings.hero_class)
                .css({'position':'absolute', 'display': 'none'})
                .appendTo($('.gameBoard'));

  Character.call(this, position, $hero);
  this.lives = lives;
  }

  Hero.prototype.draw = function() {
    Character.prototype.draw.call(this);

    this.hitImage.css(
      {left: Position.prototype.getPositionX.call(this.position)*($(window).width())/20, 
       top: Position.prototype.getPositionY.call(this.position)*($(window).height())/20});
  }

  Hero.prototype.isDead = function() {
    ++this.lives;
    return this.lives == 100;
  }

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

  Hero.prototype.fire = function() {
    var bullet = new HeroBullet(new Position(Position.prototype.getPositionX.call(this.position),
                                            (Position.prototype.getPositionY.call(this.position))-1));
    return bullet;
  }

  Hero.prototype.checkCollision = function(killer) {
    if (killer.fleet.length) {
      for (var i=0; i<killer.fleet.length; i++) {
        if ((Position.prototype.getPositionX.call(this.position) ==
        Position.prototype.getPositionX.call(killer.fleet[i].position)) &&
        (Position.prototype.getPositionY.call(this.position) ==
        Position.prototype.getPositionY.call(killer.fleet[i].position))) {
          --this.lives;
          this.image.remove();
          this.hitImage.css({'display': 'block'});
          return true;
        }
        return false;
      } 
    }
  }
