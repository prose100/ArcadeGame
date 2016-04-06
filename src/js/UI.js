//UI.js creates user interface for the game
function UI() {
	this.play = $('<button>')
              .addClass(settings.play_class)
              .html('Play')
              .css({'display':'inline-block'})
              .appendTo($('.heading'));
    this.pause = $('<button>')
              .addClass(settings.pause_class)
              .html('Pause')
              .css({'display':'inline-block'})
              .appendTo($('.heading'));
    this.quit = $('<button>')
              .addClass(settings.quit_class)
              .html('Quit')
              .css({'display':'inline-block'})
              .appendTo($('.heading'));
    this.gameover = $('<div>')
              .addClass(settings.gameover_class)
              .css({'display':'inline-block', 'display': 'none'})
              .html('Sorry. Game Over!')
              .appendTo($('.main'));   
    this.youwin = $('<div>')
              .addClass(settings.youwin_class)
              .css({'display':'inline-block', 'display': 'none'})
              .appendTo($('.main'));
    this.startnewgame = $('<button>')
              .addClass(settings.startnewgame_class)
              .html('Start New Game')
              .css({'display':'none'})
              .appendTo($('.main'));
}
//play button
UI.prototype.getPlay = function() {
	return this.play;
}

//pause button
UI.prototype.getPause = function() {
	return this.pause;
}

//quit button
UI.prototype.getQuit = function() {
	return this.quit;
}

//start new game button
UI.prototype.getStartNewGame = function() {
	return this.startnewgame;
}

//game over message
UI.prototype.getGameOver = function() {
	return this.gameover;
}

//you win message
UI.prototype.getYouWin = function() {
	return this.youwin;
}

//if user presses play
UI.prototype.pressPlay = function() {
	(UI.prototype.getQuit.call(this)).css({'display':'inline-block'});
	(UI.prototype.getQuit.call(this)).css({'display':'inline-block'});
  (UI.prototype.getPlay.call(this)).css({'display': 'none'});
  (UI.prototype.getPause.call(this)).css({'display': 'inline-block'});
  (UI.prototype.getStartNewGame.call(this)).css({'display': 'none'});
  (UI.prototype.getGameOver.call(this)).css({'display': 'none'});
  (UI.prototype.getYouWin.call(this)).css({'display': 'none'});
}

//if user presses pause
UI.prototype.pressPause = function() {
	(UI.prototype.getQuit.call(this)).css({'display':'none'});
  (UI.prototype.getPlay.call(this)).css({'display': 'inline-block'});
  (UI.prototype.getPause.call(this)).css({'display': 'none'});
}

//makes game over message visible to user
UI.prototype.displayGameOver = function() {
	(UI.prototype.getGameOver.call(this)).css({'display': 'block'});
}

//makes start new game button visible to user
UI.prototype.displayStartNewGame = function() {
	(UI.prototype.getStartNewGame.call(this)).css({'display': 'block'});
}

//makes win message visible to user
UI.prototype.displayYouWin = function() {
	(UI.prototype.getYouWin.call(this)).css({'display': 'block'});
}