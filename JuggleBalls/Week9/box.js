function Box( boxDiv ) {
	var theDiv = boxDiv;
	var boxInfo = {
			x: theDiv.offset().left,  // this.x = theDiv.offset().left,
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
	}
	
	function moveBall() {
		var ballNo;
		for( ballNo = 0;
			 ballNo < ballRef.length;
			 ballNo++) {  // ballNo = ballNo + 1;
			// var thisBall = ballRef[ballNo];
			// thisBall.moveBall();
			ballRef[ballNo].moveBall(); 
		}
		setTimeout(moveBall,10);
	}
	theDiv.on("click",function(event) {
		// Create a div to contain the new ball and set it's css position
		// to be absolute so that we can control it's placement
		// <div style="position:absolute"/>
		var newBall = $("<div/>",{style:"position:absolute"});
		// Now create the image that we're going to add to the 
		// div just created
		// <img src="CoderDojo-ball.png" width:50px height:50px/>
		var newImg = $("<img/>",{src:"CoderDojo-ball.png", width: "50px", 
							height: "50px"});
		// Add the IMG to the DIV - now our DIV is no longer empty
		newBall.append(newImg);
		// Add the newly created div as the first element of the body
		$("body").prepend(newBall);
		// Wrap our newly created DIV in a BallObject and add it to the box
		addBall(new BallObject(newBall));
		
	} );
}