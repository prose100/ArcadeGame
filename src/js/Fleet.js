function Fleet(fleet) {
	this.fleet = fleet;
}

// Fleet.prototype = Object.create(Character.prototype);

Fleet.prototype.draw = function() {
	var i=1;
	for (i; i<this.fleet.length; i++) {
		this.fleet[i].image.css({left: Position.prototype.getPositionX.call(this.fleet[i].position), 
	                top: Position.prototype.getPositionY.call(this.fleet[i].position),
	                'display': 'block'});
  }
}