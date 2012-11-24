window.onload=setup	

var reggaeBall;
var allienBall;

var ballSizes = [20,50,150,50,250];
var ballAngles = [1,5,10,30,50,100,200];

var reggaeBallSize;
var reggaeBallAngle;

var allienBallSize;
var allienBallAngle;

function setup() {
	reggaeBall = $("#reggae");
	allienBall = $("#allien");
	setNewReggaeSize();
}

function setNewReggaeSize() {
	var newReggaeSize = getNewImageSize();
	reggaeBall.css('width',newReggaeSize+'px');
}

function getNewImageSize() {
	var randomPosition = (Math.random() * (ballSizes.length-1) | 0);
	return ballSizes[randomPosition];
}