window.onload=setup

document.onkeydown = handleKey;

function handleKey(e) {
	var event; 
	if(window.event) {
	 event = window.event;
	} else {
		event = e;
	}
	
	var keyCode = event.keyCode;

    if(keyCode == 32) { //space
    	rooneyStart();
    } else if(keyCode == 38) { // up arrow
		kickPoint();
    } else if(keyCode == 40) { //down arrow
    	kickGoal();
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

var ball;
var ballWidth = 50;

var rooney;
var penaltySpot;

var rooneyKick;

var goalTop = 120;
var pointTop = 20;
var topStopPoint = goalTop;

var arrowImage;


function setup() {

	//get the variables required from the HTML
	keeper = $("#keeper");
  	goalWidth=400;
  	
  	setupVariables();
  	
  	commenceGame();
}

function setupVariables() {
	ball = $("#ball");
	rooney = $("#rooney");
	penaltySpot = $("#penaltySpot");
	
	rooneyKick = $("#rooneyKick");
	arrowImage = $("#arrowImage");
}

function commenceGame() {
	setupHtmlPositions();
	startKeeper();
}

//setupHtmlPositions
function setupHtmlPositions() {
	keeper.css('top','0px');
	keeper.css('left','0px');
	ball.css('left','175px');
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
	
	var currentBallPosition = parseInt(ball.css('top'));
	
	if(currentBallPosition  > topStopPoint) {
		setTimeout(moveKeeper, 2);
	}
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

function rooneyStart() {
	rooney.css('display', 'block');
	
	penaltySetup();
	rooneyRun();
}

function penaltySetup() {
	ball.css('top','500px');
	rooney.css('left', '300px');
	rooneyKick.css('display', 'none');
}

function rooneyRun() {
	
	var ballPosition = 200;	
	var rooneyLeftPosition = parseInt(rooney.css('left'));
	
	if(rooneyLeftPosition > ballPosition) {
		var newRooneyPosition = rooneyLeftPosition - 5;
		rooney.css('left', newRooneyPosition+'px');	
	
		setTimeout(rooneyRun, 50);
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

	var currentBallTop = parseInt(ball.css('top'));
	var newBallTop = currentBallTop - 10;
	
	ball.css('top', newBallTop + 'px');
	
	if(newBallTop > topStopPoint) {
		setTimeout(moveBall, 20);
	} else {
		save();
	}
	
}

function kickPoint() {
	topStopPoint = pointTop;
	arrowImage.attr('src', 'arrowup.png');
}

function kickGoal() {
	topStopPoint = goalTop;
	arrowImage.attr('src', 'arrowdown.png');
}

function save() {
		
	var keeperLeft = parseInt(keeper.css('left'));
	var keeperRight = keeperLeft+keeperWidth;
		
	var ballLeft = parseInt(ball.css('left'));
	var ballRight = parseInt(ballLeft)+ballWidth;
		
	alert(keeperLeft + ' - ' + keeperRight + ' ' + ballLeft +
		' ' + ballRight);
		
	if(isGoal(ballLeft, ballRight, keeperLeft, keeperRight)) {
		alert('Score');
	} else {
		alert('Saved');
	}
}

function isGoal(ballLeft, ballRight, keeperLeft, keeperRight) {
	if((ballRight < keeperLeft) ||
			(ballLeft > keeperRight)) {
		return true;
	}
	else {
		return false;
	} 
}
