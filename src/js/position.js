//Position.js creates a position. It is used for each of the characters to move them on the gameboard.
function Position(x,y) {
  this.x = x;
  this.y = y;
}
 
//setters
Position.prototype.setPositionX = function(x) {
  this.x = x;
}

Position.prototype.setPositionY = function(y) {
  this.y = y;
}

//getters
Position.prototype.getPositionX = function() {
  return this.x;
}
Position.prototype.getPositionY = function() {
  return this.y;
}

Position.prototype.isSamePosition = function(pos1, pos2) {
	return ((Position.prototype.getPositionX.call(pos1) ==
        	 Position.prototype.getPositionX.call(pos2)) &&
        	(Position.prototype.getPositionY.call(pos1) ==
        	 Position.prototype.getPositionY.call(pos2)))
}