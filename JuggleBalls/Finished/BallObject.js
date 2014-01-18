function BallObject( JQueryElement ) {
	var ballHdir = 1;			// Positive if the ball is moving forwards, negative otherwise
	var ballVdir = 1;			// Positive if the ball is moving down, negative otherwise
	var BALL_MOVE_AMOUNT = 5;	// Move the ball by 10 pixels at a time.
	var BALL_MOVE_SPEED = 100;	// Number of milli-seconds between moves.
	
	var bounds = { x:0, y: 0, w: 500, h: 500 };

	var ballDiv = JQueryElement;
	var ballImage  = ballDiv.children()[0];

	// sync our object's x and y position with the HTML element
	var curXpos = JQueryElement.offset().top;
	var curYpos = JQueryElement.offset().left;
	
	var hOffset = 0, vOffset = 0;
	
	// get the width and height of the HTML element
	// assumes a JQuery element
	var curWidth = JQueryElement.width();
	var curHeight = JQueryElement.height();
	
	function setXpos( xpos ) {
		ballDiv.css("left", xpos+"px");
		curXpos = xpos;
	}
	
	function setYpos( ypos ) {
		ballDiv.css("top",ypos+"px");
		curYpos = ypos;
	}

	// setup visible functions	
	this.moveHorizontal = moveHorizontal;
	this.moveVertical = moveVertical;
	this.grow = grow;
	this.shrink = shrink;
	this.getXpos = getXpos;
	this.getYpos = getYpos;
	this.setXpos = setXpos;
	this.setYpos = setYpos;
	this.moveBall = move;
	this.setBounds = setBounds;
	
	function moveHorizontal( pixels ) {
		setXpos(curXpos + pixels); 
	}
	
	function moveVertical(pixels) {
		setYpos(curYpos + pixels); 
	}
	
	function grow(pixels) {
		curWidth = curWidth + pixels;
		curHeight = curHeight + pixels;
		ballImage.width = curWidth;
		ballImage.height = curHeight;
	}
	
	function shrink(pixels) {
		grow(-pixels);
	}
	
	function getXpos() {
		return curXpos;
	}
	
	function getYpos() {
		return curYpos;
	}
	
	function setBounds( newBounds ) {
		bounds = newBounds;
	}
	
	function move() {
		// See which direction we're going to move the ball horizontally
		if ( ballHdir > 0 ) {
			if ( curXpos + BALL_MOVE_AMOUNT + curWidth > bounds.w  + bounds.x) {
				ballHdir = -1;
			}
		} else {
			if ( curXpos - BALL_MOVE_AMOUNT < bounds.x ) {
				ballHdir = 1;
			}
		}
		// See which direction we're going to move the ball vertically.
		if ( ballVdir > 0 ) {
			if ( curYpos + BALL_MOVE_AMOUNT + curHeight > bounds.h + bounds.y ) {
				ballVdir = -1;
			}
		} else {
			if ( curYpos - BALL_MOVE_AMOUNT < bounds.y ) {
				ballVdir = 1;
			}
		}
		
		setXpos(curXpos+(BALL_MOVE_AMOUNT*ballHdir));
		setYpos(curYpos+(BALL_MOVE_AMOUNT*ballVdir));
	}
	
	setXpos(curXpos);
	setYpos(curYpos);
}