function Hero(lives) {
  var $hero = $('<img />', {
              src: 'img/hero.gif'})
              .addClass(settings.hero_class)
              .css({'position':'absolute'})
              .appendTo($('.gameBoard'));
  var position = new Position(($(window).width()/2), ($(window).height()-settings.characterHeight));

  Character.call(this, position, $hero);
  this.lives = lives;
  }

  Hero.prototype.draw = function() {
    Character.prototype.draw.call(this);
  }

  Hero.prototype.isDead = function() {
    ++this.lives;
    return this.lives == 50;
  }

  Hero.prototype.move = function(direction) {
    if (direction == 'right') {
      Position.prototype.setPositionX.call(this.position, (Position.prototype.getPositionX.call(this.position) + 100));
    } else if (direction == 'left'){
      Position.prototype.setPositionX.call(this.position, (Position.prototype.getPositionX.call(this.position) - 100));
    }
}