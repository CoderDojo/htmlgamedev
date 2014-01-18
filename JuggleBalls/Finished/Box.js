function Box( boxDiv ) {
	var theDiv = boxDiv;
	var boxInfo = { x: theDiv.offset().left,
					y: theDiv.offset().top,
					w: theDiv.width(),
					h: theDiv.height()
				  };
	var ballRef = [];

	this.addBall = addBall;
	this.moveBall = moveBall;
	
	function addBall( theBall ) {
		ballRef.push(theBall);
        theBall.setBounds(boxInfo);
        // Make sure that the ball starts at the top of the box, not at the top of the page.
        theBall.setXpos(boxInfo.x);
        theBall.setYpos(boxInfo.y);
	}
	
	function moveBall() {
		if ( ballRef != null ) {
 /*           var ballNo = 0;
            for( ballNo = 0; ballNo < ballRef.length; ballNo++) {
			    ballRef[ballNo].moveBall();
            } */
            $(ballRef).each(function(){this.moveBall();});
			setTimeout(moveBall,10);
		}
	}

    theDiv.on("click", function(event) {
        // Create a div to contain the new ball and set it's css position to be absolute so that
        // we can control it's placement on the screen.
        var newBall = $("<div/>", {style:"position:absolute"});
        // Create the img to reference the image
        var newImg = $("<img/>", {src: "CoderDojo-ball.png", width:"50px", height:"50px"});
        // Add the IMG to the DIV
        newBall.append(newImg);
        // Add the newly created div as the first element of the body
        $("body").prepend(newBall);
        // Now wrap our newly created DIV in a BallObject and add it to the box.
        addBall(new BallObject(newBall));
    });

    // If our window resizes, then we want to recalculate the size of the Box div
    // So add a resize event handler to the window. Then every time the window resizes
    // we recalculate the values of the boxInfo attributes.
    $(window).on("resize", function(event) {
        boxInfo.x = theDiv.offset().left;
        boxInfo.y = theDiv.offset().top;
        boxInfo.w = theDiv.width();
        boxInfo.h = theDiv.height();
    });
}