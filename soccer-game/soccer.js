window.onload=setup	

//keeper moving
var keeper;
var ball;
var keeperWidth=120;
var timeOut = 10;
var leftMovePixels=2;
var ballMove = 1;
var keeperSaved;

function setup() {
	keeper = document.getElementById("keeper");
  	ball = document.getElementById("ball");
  	keeperStart();
}

function keeperStart() {
  	keeperSaved=false;
  	
  	keeper.style.width=keeperWidth+'px';
  	keeper.style.left = '2px'; // set its initial position to 0px
  	keeper.style.bottom = '0px';
  	keeper.style.display = 'block';
  	keeper.style.position = "absolute";
  	
  	ball.style.left = '250px'; //ball position
  	ball.style.top = '600px';
  	ball.style.position = "relative";
  	
	keeperMove();
}

function keeperMove() {
	var currentPosition = parseInt(keeper.style.left);
	if(currentPosition >= 370 || currentPosition <= 1) 
		leftMovePixels *= -1;
		
	keeper.style.left = parseInt(currentPosition) + leftMovePixels + 'px';
	
	if(!keeperSaved)
		animator = setTimeout(keeperMove,timeOut);
}

function moveBall() {	
	var currentTop = parseInt(ball.style.top);
	ball.style.top = parseInt(currentTop) - ballMove + 'px';
	if(currentTop > 150)
		animator = setTimeout(moveBall,2);
	else {
		keeperSave();
	}
}

function keeperSave() {	
		
		keeperSaved = true;
		
		var keeperLeft = parseInt(keeper.style.left);
		var keeperRight = parseInt(keeperLeft)+keeperWidth;
		var ballLeft = parseInt(ball.style.left);
		var ballRight = parseInt(ballLeft)+30;
		
		if(ballLeft >= keeperLeft 
			&& ballRight <= keeperRight) {
			alert('Saved ha ha');	
		} else {
			timeOut--;
			keeperWidth +=2;
			keeper.style.display='none';
			alert('Gooooooaaaaaaaaaaaaaaaaaaaaal' + timeOut);
		}
		animator = setTimeout(keeperStart,1000);
}
