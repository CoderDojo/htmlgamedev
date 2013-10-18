function BallObject( JQueryElement ) {
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
	this.getCurXpos = getCurXpos;
	this.getCurYpos = getCurYpos;
	
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
	
	function getCurXPos() {
		return curXpos;
	}
	
	function getCurYpos() {
		return curYpos;
	}
	
	function shrink(pixels) {
		grow(-pixels);
	}
}