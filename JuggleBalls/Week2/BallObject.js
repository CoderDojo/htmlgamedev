function BallObject( JQueryElement ) {
	var ballDiv = JQueryElement;
	var curXpos = 0;
	var curYpos = 0;
	
	this.moveHorizontal = moveHorizontal;
	this.moveVertical = moveVertical;
	
	function moveHorizontal( pixels ) {
		curXpos = curXpos + pixels;
		ballDiv.css("left", curXpos+"px");
	}
	
	function moveVertical( pixels ) {
		curYpos = curYpos + pixels;
		ballDiv.css("top",curYpos+"px");
	}
}