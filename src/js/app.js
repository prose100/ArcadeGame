(function() {

  // "use strict";

  $(document).ready(function(){

    var defaults = {
      hero: 'hero',
      heroWidth: 50,
      heroHeight: 50,
      stopClass: '.stop'
    };

    function ArcadeGame(element, options) {
    
      settings = $.extend({}, defaults, options);

      var $this = $(element); //start button
      var that = this; //arcadegame
      
      $this.click(function(){
        that.start();
      })
    }

    ArcadeGame.prototype.start = function() {
      hero = new Hero(1);
      var targetElement = document.body;

      targetElement.addEventListener('keydown', function (event) {
           switch (event.keyCode) {
            case 13:
              //***fire bullet
              break;
            case 37:
              hero.move('left');
              break;
            case 39:
              hero.move('right');
              break;
           };
        });
     
      var stop = setInterval(function() {
          play();
        }, 100); 

      function play() {
          if (gameIsOver()) {clearInterval(stop)};
          $(".stop").click(function(){clearInterval(stop)});
        
          updateBoard();
          //run sequence of steps to keep game going
      }

      //may put these functions in separate Arcade.prototype
      function gameIsOver() {
        return hero.isDead(); 
      }

      function updateBoard() {
        hero.draw();
      }        
    }
    
    function Position(x,y) {
      this.x = x;
      this.y = y;
    }

    Position.prototype.setPositionX = function(x) {
      this.position.x = x;
    }

    Position.prototype.setPositionY = function(y) {
      this.position.y = y;
    }

    Position.prototype.getPositionX = function() {
      return this.position.x;
    }
    Position.prototype.getPositionY = function() {
      return this.position.y;
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

    Hero.prototype.isDead = function() {
      ++this.lives;
      console.log(this.lives);
      return this.lives == 80;
    }

    Hero.prototype.move = function(direction) {
      if (direction == 'right') {
        Position.prototype.setPositionX.call(this, (Position.prototype.getPositionX.call(this) + 100));
      } else if (direction == 'left'){
        Position.prototype.setPositionX.call(this, (Position.prototype.getPositionX.call(this) - 100));
      }
    }

    $.fn.arcadegame = function(options) {
      return this.each(function() {
        new ArcadeGame(this, options);
      })
    };
  });
})();

