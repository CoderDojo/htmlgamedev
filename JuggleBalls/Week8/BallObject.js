function BallObject( JQueryElement ) {
	var ballHdir =1; // Positive 1 if ball moving forwards, negative 1 if moving back.
	var ballVdir =1; // Positive 1 if moving down the screen, negative 1 if moving up
	var BALL_MOVE_AMOUNT = 5;	// Number of pixels to move the ball each time.
	
	var bounds = null;

	var ballDiv = JQueryElement;
	var ballImage = ballDiv.children()[0];

	// sync our object's x and y position with the HTML element
	var curXpos = JQueryElement.offset().left;
	var curYpos = JQueryElement.offset().top;
	
	// get the width and height of the HTML element
	// assumes a JQuery element
	var curWidth = JQueryElement.width();
	var curHeight = JQueryElement.height();

	// setup visible functions	
	this.moveHorizontal = moveHorizontal;
	this.moveVertical = moveVertical;
	this.grow = grow;
	this.shrink = shrink;
	this.getXpos = getCurXpos;
	this.getYpos = getCurYpos;
	this.moveBall = moveBall;
	this.setBounds = setBounds;
	
	function moveHorizontal( pixels ) {
		curXpos = curXpos + pixels;
		ballDiv.css("left", curXpos+"px");
	}
	
	function moveVertical(pixels) {
		curYpos = curYpos + pixels;
		ballDiv.css("top",curYpos+"px");
	}
	
	function grow(pixels) {
		curWidth = curWidth + pixels;
		curHeight = curHeight + pixels;
		ballImage.width = curWidth;
		ballImage.height = curHeight;
	}
	
	function getCurXpos() {
		return curXpos;
	}
	
	function getCurYpos() {
		return curYpos;
	}
	
	function setXpos( newXpos ) {
		ballDiv.css("left", newXpos+"px");
		curXpos = newXpos;
	}
	
	function setYpos( newYpos ) {
		ballDiv.css("top", newYpos+"px");
		curYpos= newYpos;
	}
	
	function setBounds( newBounds ) {
		bounds = newBounds;
	}
	
	function shrink(pixels) {
		grow(-pixels);
	}
	
	function moveBall() {
		// Check of the ball is moving to the right
		if ( ballHdir == 1 ) {
			// Check if we're going to hit the RHS of the box
			if ( curXpos + curWidth + BALL_MOVE_AMOUNT  > bounds.w + bounds.x ) {
				ballHdir = -1;
			}
		} else {
			if ( curXpos - BALL_MOVE_AMOUNT < bounds.x ) {
				ballHdir = 1;
			}
		}
		
		// Your Challenge: With the call to setXpos below commented out you should be able to make
		// the ball go up and down the screen by copying what we did to make it move side-to-side and
		// adapting it appropriately. If you then remove the comment maker (//) before the call to setXpos
		// you should see the ball bounce around the screen.
	
//		setXpos( curXpos + ( BALL_MOVE_AMOUNT * ballHdir) );
		setYpos( curYpos + (BALL_MOVE_AMOUNT * ballVdir ));
	}
}