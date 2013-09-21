var gameCanvas = null;

var ball;

function setup() {
	ball = new animatedObject("CoderDojo-ball.png",50,50);
	getCanvas().appendChild(ball.imageObject);
	ball.setPosition( Math.floor(Math.random()* (getCanvas().clientWidth+1)), Math.floor(Math.random()*(getCanvas().clientHeight+1)));
	
	animate();
}

function animate() {
	ball.animate();
	setTimeout(animate,20);
}

function getCanvas() {
	if ( gameCanvas == null ) {
		gameCanvas = document.body;
	}
	return gameCanvas;
}

window.onload = function() {
	setup();
}