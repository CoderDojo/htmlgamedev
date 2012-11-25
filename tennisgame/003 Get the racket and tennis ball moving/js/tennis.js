/*
    Tennis game
    Version: 0.0.1
*/

var game;
var moveLeftDecision = 1;
var ballStartPosition;
var ballEndPosition;

var ballHit;
var ballDivertAmount = 0;
var ballDivertSeq = 0;

var playerScore=0;
var computerScore=0;

var playerScoreHtml;
var computerScoreHtml;

function setup() {
    var playButton = document.getElementById("playButton");
    ball = document.getElementById("tennisball");
    ball.style.position = "absolute";
    ball.style.left = "0px";
    ball.style.top = "220px"
    
    racket = document.getElementById("player");
    racket.style.position = "absolute";
    racket.style.top = "0px";
    racket.style.left = "750px";
    
    playerScoreHtml = document.getElementById("playerScore");
    computerScoreHtml = document.getElementById("computerScore");
}

function moveBall() {

	var ballPosition = parseInt(ball.style.left);
	var ballTopPosition = parseInt(ball.style.top);
	
	var moveDistance = 5;
	
	if(ballTopPosition < 0 ||
		ballTopPosition > 450) {
		ballDivertAmount *= -1;
		ballDivertSeq = 5;
	}

	if (ballPosition > ballEndPosition ||
		ballPosition < ballStartPosition) {
		
		moveLeftDecision *= -1;
		
		if(ballPosition > ballEndPosition) {
			computerScore = computerScore + 1;
			computerScoreHtml.innerHTML = computerScore;
			ballDivertAmount = 0;
		}
		//8 END
	}

	moveDistance = moveDistance * moveLeftDecision;
	ballPosition = ballPosition + moveDistance;
	ball.style.left = ballPosition + "px";
	
	if(ballDivertSeq == 5) {
		ballTopPosition = ballTopPosition + ballDivertAmount;
		ball.style.top = ballTopPosition + "px";
		ballDivertSeq=0;
	} else {
		ballDivertSeq = ballDivertSeq +1;
	}
	
	animator = setTimeout(moveBall,2);
}

function clickPlay() {

		document.getElementById("titleScreen");
		
		setTimeout("document.getElementById('titleScreen').style.display = \"none\"", 500);
        setTimeout("document.getElementById('playScreen').style.display = \"block\"", 700);
        setTimeout("init()", 700);
		
        ballStartPosition = parseInt(ball.style.left);
		ballEndPosition = ballStartPosition + 1000;
		moveBall();
}

//2 NEW
document.onkeydown = handleKey;
//END 2


//3 NEW BELOW ALL FUNCTION 
// DO IT FIRST WITHOUT MOVERACKET START WITH ALERT
function handleKey(e) {

	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;

	//move up
	if (keyCode == 38) { //up arrow
		moveRacketDown(-20);	   
	} else if(keyCode == 40) { // down arrow
		moveRacketDown(20);
	} else if(keyCode == 32) { // space bar
		hitBall();
	} else if(keyCode == 37) { // left arrow
		moveRacketLeft(-20);
	} else if(keyCode == 39) { //right arrow
		moveRacketLeft(20);
	} else if(keyCode == 16) { //shift key
 		ballDivertAmount++;
	} else if(keyCode ==13) { //enter key
		ballDivertAmount--;
	}
}
	
//END 3

//5 Hit the Ball 
//Do this in parts explain why we getting the location
function hitBall() {

	var ballTop = parseInt(ball.style.top);
	var ballLeft = parseInt(ball.style.left);
	var racketLeft = parseInt(racket.style.left);
	var racketTop = parseInt(racket.style.top)  + 50;
	
	var allowLeftHit = racketLeft - 50;
	var allowRightHit = racketLeft + 50;
	
	if((ballTop >= racketTop && ballTop <= racketTop+50) 
		&& (ballLeft >= allowLeftHit && ballLeft <= allowRightHit)) {
		moveLeftDecision *= -1;
		
		//NEW 6 PUT THIS IN AFTER ADD SCORING AND RACKET MOVING
		playerScore = playerScore + 10;
		playerScoreHtml.innerHTML = playerScore;
		racket.style.top = "0px";
		//END 6
	}
}
//END 5

//NEW 4 Moving Racket function
function moveRacketDown(distance) {
	var racketPosition = parseInt(racket.style.top);
	var newPosition = racketPosition + distance;
	racket.style.top = newPosition + "px";
}
//END 4

//NEW 4 Moving Racket function
function moveRacketLeft(distance) {
	var racketPosition = parseInt(racket.style.left);
	var newPosition = racketPosition + distance;
	
	if(newPosition>400)
		racket.style.left = newPosition + "px";
}
//END 4

function resetGame() {
	playerScore=0;
	computerScore=0;
	playerScoreHtml.innerHTML=0;
	computerScoreHtml.innerHTML=0;	
	
	ball.style.left = "0px";
	ball.style.top = "220px"
    racket.style.top = "0px";
    racket.style.left = "750px";
    
    ballDivertAmount = 0;
    ballDivertSeq=0;
}
