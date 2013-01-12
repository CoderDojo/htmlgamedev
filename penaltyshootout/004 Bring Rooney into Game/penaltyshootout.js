window.onload=setup

//keeper variables
var keeper;
var keeperWidth=150;

var goalWidth;
var leftMovePixels=1;

var moveAmount = 5;

var jumpSequence = 40;
var currentJumpSequence = 1;

//new	
var keeperPositions = ["0px","100px"];
var keeperArrayPosition = 0;

//ball variables
var ball;
var penaltySpot;

//rooney variables
var rooney;


function setup() {

	//get the variables required from the HTML
	keeper = $("#keeper");
  	goalWidth=400;
  	
  	ball = $("ball");
  	penaltySpot = $("penaltySpot");
  	rooney = $("rooney");
  	
  	commenceGame();
}

function commenceGame() {
	setupHtmlPositions();
	startKeeper();
}

//setupHtmlPositions
function setupHtmlPositions() {
	keeper.css('top','0px');
	keeper.css('left','0px');
}

function startKeeper() {
	keeper.css('width',keeperWidth+'px');
	keeper.show();
	moveKeeper();
}

function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	
	// new after show problem
	var maxRightPosition = goalWidth - keeperWidth;
	
	if(currentPosition >= maxRightPosition
		|| currentPosition < 0) {
		moveAmount = moveAmount * -1;
	}
	
	var newPosition = currentPosition + moveAmount;
	keeper.css('left',newPosition+'px');
	
	jumpKeeper();
	
	setTimeout(moveKeeper, 2);
}

function jumpKeeper() {
	
	if(jumpSequence == currentJumpSequence) {
		if(keeperArrayPosition == keeperPositions.length) {
			keeperArrayPosition = 0;
		}
		
		var newKeeperPosition = keeperPositions[keeperArrayPosition];
		keeper.css('top',newKeeperPosition);
	
		keeperArrayPosition = keeperArrayPosition + 1;
		currentJumpSequence = 0;
	} else {
		currentJumpSequence = currentJumpSequence +1;
	}
}

function startGameSetup() {
  	
  	//15 is the half the width of the ball
  	ball.css('left', ((goalWidth-40)/2) +'px'); //ball position
  	ball.css('top','550px');
  	
  	penaltySpot.css('left', ((goalWidth-60)/2) +'px');
  	penaltySpot.css('position', 'relative');
  	
  	var ballPosn = parseInt(ball.css('left'));
  	rooney.css('left', (ballPosn+200)+'px'); //ball position
  	rooney.css('display','block');  	
}

function rooneyStart() {
	rooney.css('display', 'block');
	startGameSetup();
	rooneyRun();
}

function rooneyRun() {
	var ballPosition = parseInt(ball.css('left'));
	var rooneyPosition = parseInt(rooney.css('left'));
	alert(ballPosition + ' ' + rooneyPosition);
	if(ballPosition < (rooneyPosition-50)) {
		rooney.css('left',(rooneyPosition-5)+'px');
		setTimeout(rooneyRun,50);
	} 
}







