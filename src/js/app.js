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
    youwin_class: 'youwin'
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

    var level = 1;
    var score = 0;
    var hero = new Hero(2); 
    var aliens, alienbulletsarray, alienbullets, herobulletsarray, herobullets;
    var isNewGame = true;
    var isNewLevel = false;
    
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
      }, 300); 

    function play() {

      if (gameIsOver()) {clearInterval(stop)};
      $(".stop").click(function(){clearInterval(stop)});

      if (isNewGame == true || isNewLevel==true) {
        console.log('hi2');
        aliens = createFleet(level);
        herobulletsarray = [];
        herobullets = new Fleet(herobulletsarray);
        alienbulletsarray = [];
        alienbullets = new Fleet(alienbulletsarray);
        isNewGame = false;
        isNewLevel = false;
      }

      updateBoard();
      alienbullets = aliens.fire(0.15, alienbullets);
      
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
        if (level > 3) {
          console.log('HI');
          $("." + settings.youwin_class).html('Congrats! You Win!');
           clearInterval(stop);
        }
        updateBoard();
        clearBoard();
        isNewLevel = true;
        console.log(isNewLevel);
      }
    }

    function createFleet(level) {
      var i = 0;
      var alienarray = [];
      if(level==1) {
        for (i; i<2; i++) {
          alienarray[i] = new AlienWimpy(new Position(19-i, 1));
        }
      }
      if(level==2) {
        for (i; i<2; i++) {
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
    }

    function clearHero() {
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