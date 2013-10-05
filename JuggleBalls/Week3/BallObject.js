function BallObject( JQueryElement ) {
	var ballDiv = JQueryElement;

	// sync our object's x and y position with the HTML element
	var curXpos = JQueryElement.offset().top;
	var curYpos = JQueryElement.offset().left;
	
	// get the width and height of the HTML element
	// assumes a JQuery element
	var width = JQueryElement.width();
	var height = JQueryElement.height();

	// setup visible functions	
	this.moveHorizontal = moveHorizontal;
	this.moveVertical = moveVertical;
	this.grow = grow;
	this.shrink = shrink;
	
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
		ballImage.attr("width",curWidth+"px");
		ballImage.attr("height", curHeight+"px");
	}
	
	function shrink(pixels) {
		grow(-pixels);
	}
}