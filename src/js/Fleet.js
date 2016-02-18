function Fleet(fleet) {
	this.fleet = fleet;
}

Fleet.prototype = Object.create(Character.prototype);

Fleet.prototype.draw = function() {
	var i=0;
	for (i; i<this.fleet.length; i++) {
		this.fleet[i].image.css(
			{left: Position.prototype.getPositionX.call(this.fleet[i].position)*($(window).width())/20, 
	     top: Position.prototype.getPositionY.call(this.fleet[i].position)*($(window).height())/20,
	     'display': 'block'});
		if(this.fleet[i].hitImage) {
			this.fleet[i].hitImage.css(
				{left: Position.prototype.getPositionX.call(this.fleet[i].position)*($(window).width())/20, 
		     top: Position.prototype.getPositionY.call(this.fleet[i].position)*($(window).height())/20});
  	}
  }
}

Fleet.prototype.push = function(element) {
	this.fleet.push(element);
}

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

Fleet.prototype.checkNumberOfCollisions = function(herobullets) {
	var points = 0;

	if (herobullets.fleet.length>0){
		for (var j=0; j<herobullets.fleet.length; j++) {
			for (var i=0; i<this.fleet.length; i++) {
				if ((Position.prototype.getPositionX.call(this.fleet[i].position))
				== (Position.prototype.getPositionX.call(herobullets.fleet[j].position)) && 
				(Position.prototype.getPositionY.call(this.fleet[i].position)) 
				== (Position.prototype.getPositionY.call(herobullets.fleet[j].position))) {
					this.fleet[i].image.remove();
					this.fleet[i].hitImage.css({'display': 'block'});
					this.fleet.splice(i, 1);
					points += this.fleet[i].points;
				}				
			}
		}
	}
	return points;
}


Fleet.prototype.getPoints = function() {

}
