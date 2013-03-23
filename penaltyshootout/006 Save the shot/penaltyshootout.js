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
var keeperWidth=130;

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

var playerGoal;
var playerPoint;
var keeperGoal;
var keeperPoint;
var playerScore;
var keeperScore;

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
	
	playerScore = $("#playerScore");
	keeperScore = $("#keeperScore");
}

function commenceGame() {
	setupHtmlPositions();
	startKeeper();
	resetScores();
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

function resetScores() {
	playerGoal = 0;
	playerPoint = 0;
	keeperGoal = 0;
	keeperPoint = 0;
	updateScores();
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
	var keeperTop = parseInt(keeper.css('top'));
	var keeperBottom = keeperTop + keeperWidth;
		
	var ballLeft = parseInt(ball.css('left'));
	var ballRight = parseInt(ballLeft)+ballWidth;
	var ballTop = parseInt(ball.css('top'));
	var ballBottom = ballTop + ballWidth;

	if(isScore(ballLeft, ballRight, keeperLeft, keeperRight, ballTop,
		keeperTop, keeperBottom, ballBottom)) {
		
		if(isGoal()) {
			alert('Goal');
		}
		else if(isPoint()){
			alert('Point');
		}
	} else {
		alert('Saved');
	}
}

function isGoal() {
	
	if(topStopPoint == goalTop) {
		return true;
	} else {
		return false;
	}
}

function isPoint() {
	if(topStopPoint == pointTop) {
		return true;
	} else {
		return false;
	}
}

function isScore(ballLeft, ballRight, keeperLeft, keeperRight, ballTop, keeperTop,
				keeperBottom, ballBottom) {	
	
	if((isBallOutsideLeft(ballRight, keeperLeft)
	|| isBallOutsideRight(ballLeft, keeperRight)
	|| isBallOutsideTop(ballBottom, keeperTop)
	|| isBallOutsideBottom(ballTop, keeperBottom))) {
		return true;
	}
	else {
		return false;
	} 
}

function isBallOutsideLeft(ballRight, keeperLeft) {
	if(keeperLeft > ballRight) {
		console.log('left true ' + ballRight + ' ' 
		+ keeperLeft);
		return true;
	} else {
		return false;
	}
}

function isBallOutsideRight(ballLeft, keeperRight) {
	if(keeperRight < ballLeft) {
		console.log('right true ' + ballLeft + ' ' 
		+ keeperRight);
		return true;
	} else {
		return false;
	}
}

function isBallOutsideTop(ballBottom, keeperTop) {
	if(ballBottom < keeperTop) {
	console.log('top true ' + ballBottom + ' ' 
		+ keeperTop);
		return true;
	} else {
		return false;
	}
}

function isBallOutsideBottom(ballTop, keeperBottom) {
	if(keeperBottom < ballTop) {
	console.log('bottom true ' + ballTop + ' ' 
		+ keeperBottom);
		return true;
	} else {
		return false;
	}
}

function updateScores() {
	playerScore.val(playerGoal+'-'+playerPoint);
	keeperScore.val(keeperGoal+'-'+keeperPoint);
}

function handleGoalScored() {
	playerGoal = playerGoal + 1;
}