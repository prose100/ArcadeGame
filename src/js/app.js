(function() {

  $(document).ready(function(){

    var defaults = {
      hero: 'hero',
      heroWidth: 50,
      heroHeight: 50
    };

    function ArcadeGame(element, options) {
    
      settings = $.extend({}, defaults, options);
      $this = $(element);
      this.init();
    }

    ArcadeGame.prototype.init = function() {
      var hero = new Hero(3);
      hero.draw();
      var keyBoard = new Keyboard
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
      var position = new Position(($(window).width()/2), ($(window).height()-settings.heroHeight));

      Character.call(this, $hero, position);
      this.lives = lives;
    }

    Character.prototype.draw = function() {
      this.image.css({left: this.position.x, top: this.position.y});
    }

    Hero.prototype.draw = function() {
      Character.prototype.draw.call(this);
    }

    function Keyboard() {
      var targetElement = document.body;

      targetElement.addEventListener('keydown', function (event) {
           this.keyCode = event.keyCode;
           console.log(this.keyCode);
        });
    }     


    $.fn.arcadegame = function(options) {
      return this.each(function() {
        new ArcadeGame(this, options);
      })
    };
  });
})();

