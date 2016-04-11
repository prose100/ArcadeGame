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

Position.prototype.isSamePosition = function(item1, item2) {
	return ((Position.prototype.getPositionX.call(item1) ==
        	 Position.prototype.getPositionX.call(item2)) &&
        	(Position.prototype.getPositionY.call(item1) ==
        	 Position.prototype.getPositionY.call(item2)))
}