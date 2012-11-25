window.onload=setup	

var reggaeBall;
var allienBall;
var rudi;

var ballSizes = [50,150,50,250, 400];
var ballAngles = [1,5,10,30,50,100,200];

var moveReggaeTop;
var moveAllienTop;

var moveAllienAmount = 5;
var moveReggaeAmount = 5;

var screenWidth;
var screenHeight;

function setup() {
	setupElementsFromHtml();
	setupScreenDimensions();
	setupHtmlPositions();
	setupBallAngles();
	setNewBallSize(reggaeBall);
	setNewBallSize(allienBall);
	
	moveBalls();
}


function setupScreenDimensions() {
	screenWidth = $(document).width();
	screenHeight = $(document).height();
}

function setupElementsFromHtml() {
	reggaeBall = $("#reggae");
	allienBall = $("#allien");
	rudi = $("#rudi");
}

function setupHtmlPositions() {
	var rudiTopPosition = screenHeight-100;
	rudi.css('top', rudiTopPosition + 'px');
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

	var currentAllienLeftPosition = getBallLeftPosition(allienBall);
	var currentAllienTopPosition = getBallTopPosition(allienBall);

	if(isBallOutSideScreenHorizontal(allienBall)) {
		moveAllienAmount = moveAllienAmount * -1;
		setNewBallSize(allienBall);
	} 
	
	if(isBallOutSideScreenTop(allienBall)
	  || isBallOutSideScreenBottom(allienBall)) {
		moveAllienTop = getNewBallAngle();
		
		if(isBallOutSideScreenBottom(allienBall)) {
			moveAllienTop = moveAllienTop * -1;
		}
		setNewBallSize(allienBall);
	} 
	
	currentAllienLeftPosition = currentAllienLeftPosition + moveAllienAmount;
	currentAllienTopPosition = currentAllienTopPosition + moveAllienTop;
		
	moveBallLeft(allienBall, currentAllienLeftPosition);
	moveBallTop(allienBall, currentAllienTopPosition);
}

function moveReggaeBall() {
	
	var currentReggaeLeftPosition = getBallLeftPosition(reggaeBall);
	var currentReggaeTopPosition = getBallTopPosition(reggaeBall);

	if(isBallOutSideScreenHorizontal(reggaeBall)) {
		moveReggaeAmount = moveReggaeAmount * -1;
		setNewBallSize(reggaeBall);
	} 
	
	if(isBallOutSideScreenTop(reggaeBall)
	  || isBallOutSideScreenBottom(reggaeBall)) {
		moveReggaeTop = getNewBallAngle();
		
		if(isBallOutSideScreenBottom(reggaeBall)) {
			moveReggaeTop = moveReggaeTop * -1;
		}
		setNewBallSize(reggaeBall);
	} 

	currentReggaeLeftPosition = currentReggaeLeftPosition + moveReggaeAmount;
	currentReggaeTopPosition = currentReggaeTopPosition + moveReggaeTop;
		
	moveBallLeft(reggaeBall, currentReggaeLeftPosition);
	moveBallTop(reggaeBall, currentReggaeTopPosition);
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
