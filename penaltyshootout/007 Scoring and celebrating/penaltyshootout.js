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
    } else if(keyCode == 37) {
    	changeBallDirection(-4, 'arrowleft.png');
    } else if(keyCode == 38) { // up arrow
		kickPoint();
		rooneyStart();
    } else if(keyCode == 39) {
    	changeBallDirection(3, 'arrowright.png');
    } else if(keyCode == 40) { //down arrow
    	kickGoal();
    	rooneyStart();
    }
}

//keeper variables
var keeper;
var keeperWidth=120;

var goalWidth;
var leftMovePixels=1;

var moveAmount = 5;
var moveLeftAmount = 0;

var jumpSequence = 40;
var currentJumpSequence = 1;

//new	
var keeperPositions = ["0px","100px"];
var keeperArrayPosition = 0;

var ball;
var rooney;
var penaltySpot;

var rooneyKick;
var rooneyFly;

var goalTop = 120;
var pointTop = 20;
var topStopPoint = goalTop;

var arrowImage;
var arrowDirectionImage;

// Scoring
var computerScore = 0;
var playerScore = 0;
var computerScoreDiv;
var playerScoreDiv;

var rooneyTakingPenalty;

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
	arrowDirectionImage = $("#arrowDirectionImage");
	rooneyFly = $("#rooneyCelebrate");
	computerScoreDiv = $("#computerScore");
	playerScoreDiv = $("#playerScore");
}

function commenceGame() {
	rooney.css('display', 'block');
	rooneyKick.hide();
	rooneyFly.hide();
	
	rooneyKicking = false;
	
	penaltySetup();
	setupHtmlPositions();
	startKeeper();
}

//setupHtmlPositions
function setupHtmlPositions() {
	keeper.css('top','0px');
	keeper.css('left','0px');
	ball.css('left','175px');

	rooneyFly.css('left', '50%');
	rooneyFly.css('top',rooney.css('top'));
	
}

function startKeeper() {
	keeper.css('width',keeperWidth+'px');
	keeper.show();
	moveKeeper();
}

function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
//	console.log(currentPosition);
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
	
	if(!rooneyKicking) {
		rooneyKicking = true;
		rooney.css('display', 'block');
		rooneyRun();
	}
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
	
	var currentBallLeft = parseInt(ball.css('left'));
	var newBallLeft = currentBallLeft+moveLeftAmount;
	
	ball.css('top', newBallTop + 'px');
	ball.css('left', newBallLeft + 'px');
	
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
	var keeperRight = keeperLeft + keeperWidth;
	var keeperTop = parseInt(keeper.css('top'));
	var keeperBottom = keeperTop + keeperWidth;
	
	var ballLeft = parseInt(ball.css('left'));
	var ballRight = ballLeft + 50;
	var ballTop = parseInt(ball.css('top'));
	var ballBottom = ballTop + 50;
	
		
	if (isScored(keeperLeft, keeperRight, 
		ballLeft, ballRight, keeperTop, keeperBottom,
		ballTop, ballBottom)) {
			
		rooneyKick.hide();
		playGoal();	
		rooneyCelebrate();
		
		if ( isGoal() ) {
			playerScore = playerScore + 3;  // playerScore += 3;
		} else {
			playerScore = playerScore + 1;	// playerScore += 1;
		}
		
	} else {
		if ( isGoal() ) {
			computerScore = computerScore + 3;
		} else {
			computerScore = computerScore + 1;
		}
	}
	updateScores();
	setTimeout(commenceGame,2000);
}

function updateScores() {
	computerScoreDiv.html(computerScore);
	playerScoreDiv.html(playerScore);
}

function isScored(keeperLeft, keeperRight, 
	ballLeft, ballRight, keeperTop, keeperBottom,
	ballTop, ballBottom) {
	
	if(isBallOutsideKeeperTop(ballBottom, keeperTop)
	  || isBallOutsideKeeperLeft(ballRight, keeperLeft)
	  || isBallOutsideKeeperRight(ballLeft, keeperRight)
	  || isBallOutsideKeeperBottom(ballTop, keeperBottom)
	) {
		return true;
	} else {
		return false;
	}
	
}

function isBallOutsideKeeperTop(ballBottom,
	 keeperTop) {
	if(ballBottom < keeperTop) {
		return true;
	} else {
		return false;
	}
}

function isBallOutsideKeeperLeft(ballRight, 
		keeperLeft) {
	if(ballRight < keeperLeft) {
		return true; 
	} else {
		return false;
	}
}	

function isBallOutsideKeeperRight(ballLeft, keeperRight) {
	if(ballLeft > keeperRight) {
		return true;
	} else {
		return false;
	}
}

function isBallOutsideKeeperBottom(ballTop, keeperBottom) {
	if(ballTop > keeperBottom) {
		return true;
	} else {
		return false;
	}
}

function rooneyCelebrate() {
	rooneyFly.show();
	fly();
}

function isGoal() {
	if (topStopPoint == goalTop) {
		return true;
	} else {
		return false;
	}
}

function fly() {
	var rooneyFlyLeft = parseInt(rooneyFly.css('left'));
	if(rooneyFlyLeft > 0) {
		var newRooneyFlyLeft = rooneyFlyLeft - 5;
		rooneyFly.css('left', newRooneyFlyLeft+'px');
		setTimeout(fly, 2);
	} else {
		rooneyFly.hide();
	}
}

function changeBallDirection(moveAmountValue, imageUrl) {
	if(!rooneyKicking) {
		moveLeftAmount = moveAmountValue;
	   	arrowDirectionImage.attr('src', imageUrl);
	}
}

function playGoal() {
		var audio = "<audio style='display: none' autoplay><source src='gooooaal.wav' type='audio/wav'/></audio>";
		$("body").append(audio);
}