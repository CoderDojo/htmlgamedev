window.onload=setup

document.onkeydown = handleKey;

function handleKey(e) {

	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;
	
	if (keyCode == 32) { // space bar
		rooneyStart();	
	} else if(keyCode == 38) { // arrow up
		kickPoint();
	} else if(keyCode == 40) { // arrow down
		kickGoal();
	} else if(keyCode ==13) { //enter key
		alert('enter');
	}
}



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

var rooneyKick;

var goalTop = 120;
var pointTop = 20;
var topStopPoint = goalTop;

var arrowImage;

function setup() {

	setupVariables();
  	goalWidth=400;
  	
  	commenceGame();
}

function setupVariables() {
	//get the variables required from the HTML
	ball  = $("#ball");
	penaltySpot = $("#penaltySpot");
  	rooney  = $("#rooney");
  	keeper = $("#keeper");
  	rooneyKick = $("#rooneyKick");
  	arrowImage = $("#arrowImage");
}

function commenceGame() {
	setupHtmlPositions();
	startKeeper();
	penaltySetup();
	kickGoal();
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


function penaltySetup() {
  	ball.css('top','500px');
  	rooney.css('left', '300px'); 
  	rooneyKick.css('display', 'none');
}

function rooneyStart() {
	rooney.css('display', 'block');
	penaltySetup();
	rooneyRun();
}

function rooneyRun() {
	var ballPosition = 200;
	
	var rooneyPosition = parseInt(rooney.css('left'));
	if(ballPosition < (rooneyPosition)) {
		rooney.css('left',(rooneyPosition-5)+'px');
		setTimeout(rooneyRun,50);
	} else {
		rooneyKickBall();
		moveBall();
	}
}
	
function rooneyKickBall() {
	rooney.css('display', 'none');
	rooneyKick.css('display', 'block');
}

function moveBall() {	
	var currentTop = parseInt(ball.css('top'));
	var newTopValue = currentTop - 10;
	ball.css('top',newTopValue+'px');
	if(currentTop > topStopPoint) {
		setTimeout(moveBall,20);
	}
}

function kickGoal() {
	topStopPoint = goalTop;
	arrowImage.attr('src','arrowdown.png');
}

function kickPoint() {
	topStopPoint = pointTop;
	arrowImage.attr('src','arrowup.png');
}







