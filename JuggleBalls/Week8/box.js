function Box( boxDiv ) {
	var theDiv = boxDiv;
	var boxInfo = {
			x: theDiv.offset().left,  // this.x = theDiv.offset().left,
			y: theDiv.offset.top,
			w: theDiv.width(),
			h: theDiv.height()
		};
		
	var ballRef = null;
	
	this.addBall = addBall;
	this.moveBall = moveBall;
	
	function addBall( theBall ) {
		ballRef = theBall;
		ballRef.setBounds(boxInfo);
	}
	
	function moveBall() {
		if ( ballRef != null ) {
			ballRef.moveBall();
			setTimeout(moveBall,10);
		} else {
			alert("You need to add a ball to the box");
		}
	}

}