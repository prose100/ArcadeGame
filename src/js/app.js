(function() {

  $(document).ready(function(){

    var defaults = {
      hero: 'hero'
    };

    function ArcadeGame(element, options) {
    
      settings = $.extend({}, defaults, options);
      $this = $(element);
      this.init();
    }

    ArcadeGame.prototype.init = function() {
      var hero = new Hero(3);
      hero.draw();
    }
    
    function Position(x,y) {
      this.x = x
      this.y = y
    }

    function Character(image, position) {
      this.image = image;
      this.position = position;
    }

    Character.prototype = Object.create(Hero.prototype);

    function Hero(lives) {
      var $hero = $('<img />', {
                  src: 'img/hero.gif'})
                  .addClass(settings.hero)
                  .css({'position':'absolute'})
                  .appendTo($('.gameBoard'));
      var position = new Position(0, 0);

      Character.call(this, $hero, position);
      this.lives = lives;
    }

    Character.prototype.draw = function() {
      this.image.css({left: this.position.x, top: this.position.y});
    }

    Hero.prototype.draw = function() {
      Character.prototype.draw.call(this);
    }

    $.fn.arcadegame = function(options) {
      return this.each(function() {
        new ArcadeGame(this, options);
      })
    };
  });
})();

