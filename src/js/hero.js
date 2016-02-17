function Hero(lives) {
  var $hero = $('<img />', {
              src: 'img/hero.gif'})
              .addClass(settings.hero_class)
              .css({'position':'absolute', 'display': 'none'})
              .appendTo($('.gameBoard'));
  var position = new Position(($(window).width()*10/20),
                               ($(window).height()-settings.characterHeight));

  Character.call(this, position, $hero);
  this.lives = lives;
  }

  Hero.prototype.draw = function() {
    Character.prototype.draw.call(this);
  }

  Hero.prototype.isDead = function() {
    ++this.lives;
    return this.lives == 40;
  }

  Hero.prototype.move = function(direction) {
    if ((direction == 'right') && 
       (Position.prototype.getPositionX.call(this.position) + $(window).width()/20 < $(window).width())) {
          Position.prototype.setPositionX.call(this.position, 
          (Position.prototype.getPositionX.call(this.position) + $(window).width()/20));
    } else if ((direction == 'left') &&
      (Position.prototype.getPositionX.call(this.position) - $(window).width()/20 > 0)) {
        Position.prototype.setPositionX.call(this.position, 
        (Position.prototype.getPositionX.call(this.position) - $(window).width()/20));
    }
  }

  Hero.prototype.fire = function() {
      console.log(this.position);
      var bullet = new HeroBullet(new Position(Position.prototype.getPositionX.call(this.position),
                                           Position.prototype.getPositionY.call(this.position)-settings.characterHeight));
    return bullet;
  }



