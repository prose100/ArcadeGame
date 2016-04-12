//Fleet.js creates an array of characters, namely aliens and hero/alien bullets
function Fleet(fleet) {
	this.fleet = fleet;
}

//draws fleet on the gameboard
Fleet.prototype.draw = function() {
	var i=0;
	for (i; i<this.fleet.length; i++) {
		this.fleet[i].draw();
  	}
}

//pushes element on to the fleet array
Fleet.prototype.push = function(element) {
	this.fleet.push(element);
}

//element in fleet fires bullet
Fleet.prototype.fire = function(frequency, bullets) {
	var i = 0;

	for (i; i<this.fleet.length; i++) {
		if (toFire(frequency)) {
			var bullet = this.fleet[i].fire();
			bullets.push(bullet);
		}
	}
	return bullets;

	function toFire(frequency) {
		return Math.random()<frequency;
	}
}

//moves each of the elemnts in a fleet
Fleet.prototype.move = function() {
	var i=0;
	for (i; i<this.fleet.length; i++) {
		switch (this.fleet[i].direction) {
			case 'left':
				if ((Position.prototype.getPositionX.call(this.fleet[i].position)) == 1) {
		    	Position.prototype.setPositionY.call(this.fleet[i].position, 
		     	(Position.prototype.getPositionY.call(this.fleet[i].position)) + 2)
		     	this.fleet[i].direction = 'right';
		    } else {
					Position.prototype.setPositionX.call(this.fleet[i].position, 
		      (Position.prototype.getPositionX.call(this.fleet[i].position)) - 1)
				}
		    break;
			case 'right':
				if ((Position.prototype.getPositionX.call(this.fleet[i].position)) == 19) {
		    	Position.prototype.setPositionY.call(this.fleet[i].position, 
		     	(Position.prototype.getPositionY.call(this.fleet[i].position)) + 2)
		     	this.fleet[i].direction = 'left';
		    } else {
					Position.prototype.setPositionX.call(this.fleet[i].position, 
		      (Position.prototype.getPositionX.call(this.fleet[i].position)) + 1)
				}
		    break;
		  case 'up':
				Position.prototype.setPositionY.call(this.fleet[i].position, 
	      (Position.prototype.getPositionY.call(this.fleet[i].position)) - 1)

	      if ((Position.prototype.getPositionY.call(this.fleet[i].position)) == 1) {
	      	if (i > -1) {
					  this.fleet[i].image.remove();
					  this.fleet.splice(i, 1);
					};
	      }
		    break;
		  case 'down':
				Position.prototype.setPositionY.call(this.fleet[i].position, 
	      (Position.prototype.getPositionY.call(this.fleet[i].position)) + 1)

	      if ((Position.prototype.getPositionY.call(this.fleet[i].position)) == 20) {
	      	if (i > -1) {
					  this.fleet[i].image.remove();
					  this.fleet.splice(i, 1);
					};
	      }
		    break;
		}
	}
}

//checks collisions between each of the aliens and each of the herobullets
Fleet.prototype.checkCollisions = function(herobullets) {
	var points = 0;

	if (herobullets.fleet.length>0){
		for (var j=0; j<herobullets.fleet.length; j++) {
			for (var i=0; i<this.fleet.length; i++) {
				if (Position.prototype.isSamePosition(this.fleet[i].position, herobullets.fleet[j].position)) {
					this.fleet[i].image.remove();
					this.fleet[i].setImage('hit');
					this.fleet[i].draw();
					points += this.fleet[i].points;
					alien = this.fleet[i];
	
        			//delay so that the alien's hitImage remains on the board for 115ms
					setTimeout(continueExecution, 200);
					function continueExecution() {
			          	alien.image.remove();
			        }
			        this.fleet.splice(i, 1)
				}				
			}
		}
	}
	return points;
}

//checks if fleet is gone
Fleet.prototype.dead = function() {
	return this.fleet.length == 0;
}

//removes each item of a fleet
Fleet.prototype.remove = function() {
	for (var i=0; i<this.fleet.length; i++) {
		this.fleet[i].image.remove();

		if (Alien == this.fleet[i]) {
			this.fleet[i].setImage('hit');
			this.fleet[i].image.remove();
		}
	}
}

Fleet.prototype.sizeOf = function() {
	return this.fleet.length;
}