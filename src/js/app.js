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
    stop_class: 'stop',
    score_class: 'score',
    lives_class: 'lives',
    level_class: 'level',
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
      var hero = new Hero(2);    
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
      }, 275); 

    function play() {
        if (gameIsOver()) {clearInterval(stop)};
        $(".stop").click(function(){clearInterval(stop)});
        updateBoard();
        alienbullets = aliens.fire(0.1, alienbullets);
        
        if (hero.checkCollision(alienbullets)) {
          updateBoard();
          setTimeout(continueExecution, 3000);
        }
        
        function continueExecution() {
          clearBoard();
          clearInterval(stop);
          //restart(); --> new Hero(lives updated), etc.
        }
        move();
        if (checkLevelComplete()) {
          level++;
          console.log(level);
          updateBoard();
          clearBoard();
          clearInterval(stop);
        }
    }

    function createFleet(level) {
      var i = 0;
      var alienarray = [];
      if(level==0) {
        for (i; i<1; i++) {
          alienarray[i] = new AlienWimpy(new Position(19-i, 1));
        }
      }
      if(level==1) {
        for (i; i<10; i++) {
          alienarray[i] = new AlienStubborn(new Position(19-i, 1));
        }
      }
      var aliens = new Fleet(alienarray);
      return aliens;
    }

    function gameIsOver() {
      return hero.isDead(); 
    }

    function updateBoard() {
      hero.draw();
      aliens.draw();
      herobullets.draw();
      alienbullets.draw();

      score += aliens.checkNumberOfCollisions(herobullets);
      $("." + settings.score_class).html(score);
      $("." + settings.lives_class).html(hero.lives);
      $("." + settings.level_class).html(level);
    }    

    function move() {
      aliens.move();
      alienbullets.move();
      herobullets.move();
    }     
  
    function clearBoard() {
      aliens.remove();
      alienbullets.remove();
      herobullets.remove();
      hero.remove();
    }

    function checkLevelComplete() {
      return aliens.dead();
    }

    function sleep(milliseconds) {
      console.log('sleep');
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        } 
      }
    }
  }

  $.fn.arcadegame = function(options) {
    return this.each(function() {
      new ArcadeGame(this, options);
    })
  };
})();  