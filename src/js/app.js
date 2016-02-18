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
    
    do {
      var level = 0;
      var score = 0;
      var hero = new Hero(0);    
      var numberofaliens = 0;
      var aliens = createFleet(level);
      var herobulletsarray = [];
      var herobullets = new Fleet(herobulletsarray);
      var alienbulletsarray = [];
      var alienbullets = new Fleet(alienbulletsarray);
      var status = false;
    }
    while (status == true);

    var targetElement = document.body;
    targetElement.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 38:
          var bullet = hero.fire();
          herobullets.push(bullet);
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
      }, 50); 

    function play() {
        if (gameIsOver()) {clearInterval(stop)};
        $(".stop").click(function(){clearInterval(stop)});
        updateBoard();
        alienbullets = aliens.fire(0.0, alienbullets);
        //run sequence of steps to keep game going:
        checkCollisions();
        move();
         //heroBullets and alienBullets 
                             //Aliens and heroBullets
                             //Hero and alienBullets
        //checkAlienEndHeroLife();
        // if checkLevelComplete();
          //level++
    }

    function gameIsOver() {
      return hero.isDead(); 
    }

    function createFleet(level) {
      var i = 0;
      var j = 1;
      var alienarray = [];
      if(level==0) {
        for (i; i<10; i++) {
          alienarray[i] = new AlienWimpy(new Position(19-i, j));
        }
      }
      if(level==1) {
        for (i; i<10; i++) {
          alienarray[i] = new AlienStubborn(new Position(19-i, j));
        }
      }
      var aliens = new Fleet(alienarray);
      return aliens;
    }

    function move() {
      aliens.move();
      alienbullets.move();
      herobullets.move();
    }

    function checkCollisions() {
      aliens.checkCollisions(herobullets);
      hero.checkCollisions(alienbullets);
      hero.checkCollisions(aliens);
    }

    function updateBoard() {
      hero.draw();
      aliens.draw();
      herobullets.draw();
      alienbullets.draw();
    }        
  }

  $.fn.arcadegame = function(options) {
    return this.each(function() {
      new ArcadeGame(this, options);
    })
  };
})();  