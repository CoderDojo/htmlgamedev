function Box( boxDiv ) {
	var theDiv = boxDiv;
	
	var ballRef = null;
	
	this.addBall = addBall;
	this.moveBall = moveBall;
	
	function addBall( theBall ) {
		ballRef = theBall;
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