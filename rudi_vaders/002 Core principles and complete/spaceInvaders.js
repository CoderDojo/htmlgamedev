
window.onload=setup	
document.onkeydown = handleRudi;

var reggaeBall;
var allienBall;
var rudi;
var bone;
var scoreLabel;
var welcome;
var ibm;
var player;
var playerName;

var highestPlayer;
var highestScore;
var highestPlayerName;
var highestScoreValue;

var ballSizes = [50,150,50,250, 400];
var ballAngles = [1,5,10,30,50,100,200];

var moveReggaeTop;
var moveAllienTop;

var moveAllienAmount = 5;
var moveReggaeAmount = 5;

var screenWidth;
var screenHeight;

var boneInAction = false;

var score;
var wallBouncePoints = -10;
var hitPoints = 100;

function setup() {
	highestScoreValue = 0;
	setupElementsFromHtml();
	setupScreenDimensions();
	setupHtmlPositions();
	showWelcome();
	commenceGame();
	player.val('Your name');
}

function commenceGame() {
	setupBallAngles();
	updateHighestScore(highestScoreValue);
}

function updateScore(points) {
	score = score + points;
	scoreLabel.html(score)
}

function updateScore(points) {
	score = score + points;
	scoreLabel.html(score)
}

function updateHighestScore(highScore) {
	highestScore.html(highScore);
}

function setupScreenDimensions() {
	screenWidth = $(document).width();
	screenHeight = $(document).height();
}

function setupElementsFromHtml() {
	reggaeBall = $("#reggae");
	allienBall = $("#allien");
	rudi = $("#rudi");
	bone = $("#bone");
	scoreLabel = $("#playerScore");
	welcome = $("#titleScreen");
	ibm = $("#ibm");
	player = $("#playerName");
	highestPlayer = $("#highestPlayer");
	highestScore = $("#highestScore");
}

function setupHtmlPositions() {
	var rudiTopPosition = screenHeight-100;
	rudi.css('top', rudiTopPosition + 'px');
	reggaeBall.css('left', '1000px');
	allienBall.css('left','20px');
	bone.hide();
}

function setupBallAngles() {
	moveAllienTop = getNewBallAngle();
	moveReggaeTop = getNewBallAngle();
}


function setNewBallSize(ball) {
	var newBallSize = getNewBallSize();
	ball.css('width',newBallSize+'px');
}

function getNewBallSize() {
	var randomPosition = (Math.random() * (ballSizes.length-1) | 0);
	return ballSizes[randomPosition];
}

function getNewBallAngle() {
	var randomAnglePosition = (Math.random() * (ballAngles.length-1) | 0);
	return ballAngles[randomAnglePosition];
}

function moveBalls() {
	moveAllienBall();
	moveReggaeBall()
	
	setTimeout(moveBalls,10);
}

function moveAllienBall() {

	if(allienBall.is(':visible')) {
		var currentAllienLeftPosition = getBallLeftPosition(allienBall);
		var currentAllienTopPosition = getBallTopPosition(allienBall);

		if(isBallOutSideScreenHorizontal(allienBall)) {
			moveAllienAmount = moveAllienAmount * -1;
			setNewBallSize(allienBall);
			updateScore(wallBouncePoints);
		} 
	
		if(isBallOutSideScreenTop(allienBall)
		  || isBallOutSideScreenBottom(allienBall)) {
			moveAllienTop = getNewBallAngle();
		
			if(isBallOutSideScreenBottom(allienBall)) {
				moveAllienTop = moveAllienTop * -1;
			}
			setNewBallSize(allienBall);
			updateScore(wallBouncePoints);
		} 
	
		currentAllienLeftPosition = currentAllienLeftPosition + moveAllienAmount;
		currentAllienTopPosition = currentAllienTopPosition + moveAllienTop;
		
		moveBallLeft(allienBall, currentAllienLeftPosition);
		moveBallTop(allienBall, currentAllienTopPosition);
	}
}

function moveReggaeBall() {
	
	if(reggaeBall.is(':visible')) {
		var currentReggaeLeftPosition = getBallLeftPosition(reggaeBall);
		var currentReggaeTopPosition = getBallTopPosition(reggaeBall);
		console.log(currentReggaeLeftPosition);
		
		if(isBallOutSideScreenHorizontal(reggaeBall)) {
			moveReggaeAmount = moveReggaeAmount * -1;
			setNewBallSize(reggaeBall);
			updateScore(wallBouncePoints);
		} 	
	
		if(isBallOutSideScreenTop(reggaeBall)
		  || isBallOutSideScreenBottom(reggaeBall)) {
			moveReggaeTop = getNewBallAngle();
		
			if(isBallOutSideScreenBottom(reggaeBall)) {
				moveReggaeTop = moveReggaeTop * -1;
			}
			setNewBallSize(reggaeBall);
			updateScore(wallBouncePoints);
		} 
		
		currentReggaeLeftPosition = currentReggaeLeftPosition + moveReggaeAmount;
		currentReggaeTopPosition = currentReggaeTopPosition + moveReggaeTop;
		console.log(currentReggaeLeftPosition);
		moveBallLeft(reggaeBall, currentReggaeLeftPosition);
		moveBallTop(reggaeBall, currentReggaeTopPosition);
	}
}

function isGameOver() {
	if(reggaeBall.is(':visible') || allienBall.is(':visible')) {
		return false;
	}
	return true;
}

function showWelcome() {
	welcome.show();
}

function isGameCommenced() {
	if(welcome.is(':visible')) {
		return false;
	}
	return true;
}

function moveBallLeft(ball, moveAmount) {
	ball.css('left',moveAmount  + 'px');
}

function moveBallTop(ball, moveAmount) {
	ball.css('top',moveAmount + 'px');
}

function getBallLeftPosition(ball) {
	return parseInt(ball.css('left'));
}

function getBallTopPosition(ball) {
	return parseInt(ball.css('top'));
}

function isBallOutSideScreenHorizontal(ball) {	
	var ballLeftPosition = getBallLeftPosition(ball);
	var ballMaxRightPosition = ballLeftPosition + getBallWidth(ball);
	if(ballLeftPosition < 0 ||
			ballMaxRightPosition > screenWidth) {
		return true;
	} else {
		return false;
	}
}

function isBallOutSideScreenTop(ball) {	
	var ballTopPosition = getBallTopPosition(ball);	
	if(ballTopPosition < 0) {
		return true;
	} else {
		return false;
	}
}

function isBallOutSideScreenBottom(ball) {	
	var ballTopPosition = getBallTopPosition(ball);	
	var ballMaxBottomPosition = ballTopPosition + getBallWidth(ball);
	
	if(ballMaxBottomPosition > screenHeight) {
		return true;
	} else {
		return false;
	}
}

function getBallWidth(ball) {
	var ballWidth = parseInt(ball.css('width')); 
	return ballWidth;
}


//3 NEW BELOW ALL FUNCTION
// DO IT FIRST WITHOUT MOVERACKET START WITH ALERT
function handleRudi(e) {

	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;

	if(keyCode == 32) { // space bar
		fire();
	} else if(keyCode == 37) { // left arrow
		moveRudiLeft();
	} else if(keyCode == 39) { //right arrow
		moveRudiRight();
	} 
}

function moveRudiLeft() {
	moveRudi(-20);
} 

function moveRudiRight() {
	moveRudi(20);
}

function moveRudi(moveAmount) {
	var rudiCurrentPosition = parseInt(rudi.css('left'));
	rudiCurrentPosition = rudiCurrentPosition + moveAmount;
	
	if(rudiCurrentPosition > screenWidth) {
   		rudi.css('left', '0px');
	} else if(rudiCurrentPosition < 0) {
		rudi.css('left',screenWidth +'px');
	} else {
		rudi.css('left',rudiCurrentPosition +'px');
	}
}

function clickPlay() {
	welcome.hide();
	setNewBallSize(reggaeBall);
	setNewBallSize(allienBall);
	reggaeBall.show();
	allienBall.show();
	bark();
	score = 0;
	updateScore(1000);	
	moveBalls();
	playerName = player.val();
}

function clearText() {
	player.val('');
}

function fire() {

	if(!boneInAction && isGameCommenced()) {

		bark();
		positionBone();
		bone.show();
		moveBone();
		
		boneInAction= true;
	}
}

function positionBone() {
	var rudiLeft = rudi.css('left');
	var rudiTop = rudi.css('top');
	bone.css('left', rudiLeft);
  	bone.css('top', rudiTop);
}

function moveBone() {
	var currentBoneTopPosition = parseInt(bone.css('top'));
		
	if(isBonePassTopOfScreen(currentBoneTopPosition)) {
		boneFinished();
	} else if(isBallHit(reggaeBall)|| isBallHit(allienBall)) {
		updateScore(hitPoints);
		boneFinished();
	} else {
		currentBoneTopPosition = currentBoneTopPosition - 5;
		bone.css('top', currentBoneTopPosition+'px');
		setTimeout(moveBone,1);
	}
}

function isBallHit(ball) {
	
	if(ball.is(':visible')) {
		var ballLeft = getBallLeftPosition(ball);
		var ballTop = getBallTopPosition(ball);
		var ballRight = ballLeft + getBallWidth(ball);
 		var ballBottom = ballTop + getBallWidth(ball);

 		var boneTop = parseInt(bone.css('top'));
 		var boneLeft = parseInt(bone.css('left'));
	
   		if(boneLeft >= ballLeft && boneLeft <= ballRight &&
 			boneTop >= ballTop && boneTop <= ballBottom) {
	
 			ball.hide();
 			return true;	
 		}
 	}
	return false;
}

function boneFinished() {
	boneInAction = false;
	bone.hide();
	
	if(isGameOver() ) {
		showWelcome();
		var currentHighScore = parseInt(highestScore.html());
 		if(currentHighScore < score) {
			handleHighestScore();
		}
	}	
}

function handleHighestScore() {
	highestPlayer.html(playerName);
	updateHighestScore(score);
}

function isBonePassTopOfScreen(currentBoneTopPosition) {
	if(currentBoneTopPosition < 0)  {
		return true;
	}
	return false;
}


function bark() {
	var sound = $('<embed autoplay="true" height="0" width="0" />');
	sound.attr('src', 'dog-bark1.mp3');
	$('body').append(sound);
}

