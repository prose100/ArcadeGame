(function() {

 // The app.js file serves as the hub for the program
 
  //names of html elements can be set at index.html
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
    youwin_class: 'youwin',
    gameover_class: 'gameover',
    play_class: 'play',
    pause_class: 'pause',
    quit_class: 'quit',
    startnewgame_class: 'startnewgame'
  };

  function ArcadeGame(element, options) {
  
    settings = $.extend({}, defaults, options);

    var that = this; //arcadegame

    that.start();
  }

  ArcadeGame.prototype.start = function() { 
     
    var level = 1;
    var score = 0;
    var lives = 3;
    var hero = new Hero(lives);
    var uicontent = new UI(); 
    var aliens, alienbulletsarray, alienbullets, herobulletsarray, herobullets;
    var isNewGame = true;
    var isNewLevel = false;
    var isNextLife = false;
    var quit = false;
    
    //assign keyboard functions
    var targetElement = document.body;
    targetElement.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        //up arrow
        case 38:
          var bullet = hero.fire();
          herobullets.push(bullet);
          break;
          //left arrow
        case 37:
          hero.move('left');
          break;
          //right arrow
        case 39:
          hero.move('right');
          break;
      };
    });
  
    //start and stop loop that repeats the methods of the program
    var stop;
    function runInterval(run) {  
        if (run == true) {
            stop = setInterval(function() {
            play();
          }, 300); 
        };

        if (run == false) {
          clearInterval(stop);
        };
        quit=false;
    }     

    //UI content for playing, pausing, and quitting the program
    (uicontent.getPlay()).click(function() {
      runInterval(true);
      uicontent.pressPlay();
    });
    (uicontent.getStartNewGame()).click(function() {
      runInterval(true);
      uicontent.pressPlay();
    });
    (uicontent.getPause()).click(function() {
      runInterval(false);
      uicontent.pressPause();
    });
    (uicontent.getQuit()).click(function() {
      quit=true;
    });

    //play() starts and stops depending on input to runInterval()
    function play() {
      //methods that take place if hero dies or user quits
      if (lives == 0 || quit == true) {
        clearBoard();
        isNewGame=true;
        level=1;
        lives = 3;  
        runInterval(false);
        uicontent.displayGameOver();
        uicontent.displayStartNewGame();
      };

      //new characters are created if game, level, of life is new
      if (isNewGame == true || isNewLevel==true || isNextLife==true) {
        aliens = createFleet(level);
        herobulletsarray = [];
        herobullets = new Fleet(herobulletsarray);
        alienbulletsarray = [];
        alienbullets = new Fleet(alienbulletsarray);
        isNewGame = false;
        isNewLevel = false;
        isNextLife = false;
      }

      //update characters on the gameboard
      updateBoard();
      //fire alien bullets at provided frequency input
      alienbullets = aliens.fire(0.15, alienbullets);
      
      //checks for collisions between the hero and the alienbullets
      if (hero.checkCollision(alienbullets)) {
        updateBoard();
        setTimeout(continueExecution, 250);
      }
      
      //continueExecution() when the hero comes in contact with an alien bullet
      function continueExecution() {
        clearBoard();
        hero.remove(); 
        hero = new Hero(--lives);
        isNextLife = true;
      }

      //move all characters on the gameboard
      move();
      
      //steps to run after completing a level
      if (checkLevelComplete()) {
        level++;
        //check if final level is completed
        if (level > 3) {
          level = 1;
          uicontent.getYouWin().html("Congrats! You Win! Your is score is " + score + ".");
          uicontent.displayYouWin();
          uicontent.displayStartNewGame();
          score = 0;
          runInterval(false);
        }
        updateBoard();
        clearBoard();
        isNewLevel = true;
      }
    }

    //create appropriate alien fleet for a particular level
    function createFleet(level) {
      var i = 0;
      var alienarray = [];
      if(level==1) {
        for (i; i<10; i++) {
          alienarray[i] = new AlienWimpy(new Position(19-i, 1));
        }
      }
      if(level==2) {
        for (i; i<10; i++) {
          alienarray[i] = new AlienStubborn(new Position(19-i, 1));
        }
      }
       if(level==3) {
        for (i; i<10; i++) {
          alienarray[i] = new AlienTitan(new Position(19-i, 1));
        }
      }
      var aliens = new Fleet(alienarray);
      return aliens;
    }

    //draw characters
    function updateBoard() {
      hero.draw();
      aliens.draw();
      herobullets.draw();
      alienbullets.draw();

      //update scoreboard
      score += aliens.checkNumberOfCollisions(herobullets);
      $("." + settings.score_class).html(score);
      $("." + settings.lives_class).html(lives);
      $("." + settings.level_class).html(level);
    }    

    //move characters
    function move() {
      aliens.move();
      alienbullets.move();
      herobullets.move();
    }     
  
    //remove characters
    function clearBoard() {
      aliens.remove();
      alienbullets.remove();
      herobullets.remove();
    }

    //remove hero
    function clearHero() {
      hero.remove();
    }

    function checkLevelComplete() {
      return aliens.dead();
    }

    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        } 
      }
    }
  }

  //entry in arcade game code
  $.fn.arcadegame = function(options) {
    return this.each(function() {
      new ArcadeGame(this, options);
    })
  };
})();  