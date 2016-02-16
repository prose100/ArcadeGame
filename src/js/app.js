(function() {
     
  var defaults = {
    hero_class: 'hero',
    alienwimpy_class: 'alienwimpy',
    alienstubbron_class: 'alienstubborn',
    alientitan_class: 'alientitan',
    alienbullet_class: 'alienbullet',
    alienbullet_class: 'herobullet',
    characterWidth: 20,
    characterHeight: 20,
    stopClass: '.stop'
  };

  function ArcadeGame(element, options) {
  
    settings = $.extend({}, defaults, options);

    var $this = $(element); //stargruntt button
    var that = this; //arcadegame
    
    $this.click(function(){
      that.start();
    })
  }

  ArcadeGame.prototype.start = function() {
    var level = 0;

    var hero = new Hero(2);    
    var numberofaliens = 0;
    var alienfleet = createFleet(level);

    var herobulletfleet = [];
    var herobulletfleet = new Fleet(herobulletfleet);
    
    var alienbulletfleet = [];
    var alienbulletfleet = new Fleet(alienbulletfleet);

    var targetElement = document.body;

    targetElement.addEventListener('keydown', function (event) {
         switch (event.keyCode) {
          case 13:
            var herobullet = hero.fire();
            herobullet.draw();
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
        //run sequence of steps to keep game going:
        //moveAliens();  
        //moveHeroBullets();
        //moveAlienBullets();
        //checkCollisions(); //heroBullets and alienBullets 
                             //Aliens and heroBullets
                             //Hero and alienBullets
        //checkAlienEndHeroLife();
        // if checkLevelComplete();
          //level++
    }

    //may put these functions in separate Arcade.prototype
    function gameIsOver() {
      return hero.isDead(); 
    }

    function createFleet(level) {
      var i = 1;
      var alienarray = [];
      if(level==0) {
        for (i; i<11; i++) {
          alienarray[i] = new AlienWimpy(new Position($(window).width()*(20-i)/(20), 25));
        }
      }
      if(level==1) {
        for (i; i<11; i++) {
          alienarray[i] = new AlienStubborn(new Position($(window).width()*(20-i)/(20), 25));
        }
      }
      var alienfleet = new Fleet(alienarray);
      return alienfleet;
    }

    function updateBoard() {
      hero.draw();
      alienfleet.draw();
    }        
  }

  $.fn.arcadegame = function(options) {
    return this.each(function() {
      new ArcadeGame(this, options);
    })
  };
})();  