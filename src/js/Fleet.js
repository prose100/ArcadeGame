function Fleet(fleet) {
	this.fleet = fleet;
}

Fleet.prototype.draw = function() {
	var i=0;
	for (i; i<this.fleet.length; i++) {
		this.fleet[i].image.css({left: Position.prototype.getPositionX.call(this.fleet[i].position), 
	                top: Position.prototype.getPositionY.call(this.fleet[i].position),
	                'display': 'block'})
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
	console.log(bullets);
	return bullets;

	function toFire(frequency) {
		return Math.random()<frequency;
	}
}