window.onload=setup	

//handle the key events
document.onkeypress=function(e){
	var e=window.event || e;
	if(e.charCode==32) {
 		rooneyStart();
	}
}

//game variables
var shootInProgress = false;

//keeper variables
var keeper;
var keeperWidth=120;
var keeperDived;

//ball variables
var ball;
var leftMovePixels=2;
var ballMove = 1;
var penaltySpot;

var timeOut = 10;

//goal variables
var goal;
var goalWidth;

//result panels variables
var result;
var leftKeeper;
var rightKeeper;
var position;
var goalWidthDiv;

//rooney variables
var rooney;
var rooneyKick;
var rooneyCelebrating;


//var scores
var keeperScore = 0;
var playerScore = 0;
var keeperScoreHtml;
var playerScoreHtml;

function setup() {

	//get the variables required from the HTML
	keeper = document.getElementById("keeper");
  	ball = document.getElementById("ball");
  	result = document.getElementById("result");
  	leftKeeper = document.getElementById("keeperLeft");
  	rightKeeper = document.getElementById("keeperRight");
  	position = document.getElementById("position");
  	goal = document.getElementById("goal");
  	penaltySpot = document.getElementById("penaltySpot");
  	rooney = document.getElementById("rooney");
	rooneyKick = document.getElementById("rooneyKick");
	rooneyCelebrating = document.getElementById("rooneyCelebrate");
	goalWidthDiv = document.getElementById("goalWidth");
	playerScoreHtml = document.getElementById("playerScore");
	keeperScoreHtml = document.getElementById("computerScore");
  	goalWidth=400;
  	
  	commence();
  	
}


function commence() {
	startGame();
  	startKeeper();
}

function startKeeper() {

  	keeper.style.width=keeperWidth+'px';
  	keeper.style.left = '2px'; // set its initial position to 0px
  	keeper.style.bottom = '0px';
  	keeper.style.display = 'block';
  	
  	keeperMove();
}

function startGame() {
  	keeperDived=false;
  	
  	//15 is the half the width of the ball
  	ball.style.left = ((goalWidth-40)/2) +'px'; //ball position
  	ball.style.top = '550px';
  	
  	penaltySpot.style.left = ((goalWidth-60)/2) +'px';
  	penaltySpot.style.position = "relative";
  	
  	var ballPosn = parseInt(ball.style.left);
  	rooney.style.left = (ballPosn+200)+'px'; //ball position
  	rooney.style.display = 'block';
  	
  	rooneyKick.style.display = 'none';
  	
  	rooneyCelebrating.style.position = "absolute";
  	rooneyCelebrating.style.display = 'none';
  	rooneyCelebrating.style.right = '0px';
  	
  	goal.style.width=goalWidth + 'px';
}

function rooneyStart() {
	if(!shootInProgress) {
		shootInProgress=true;
		rooney.style.display = 'block';
		startGame();
		rooneyRun();
	}

}

function commenceCelebration() {
	rooneyKick.style.display = 'none';
	rooneyCelebrating.style.display = 'block';	
	startKeeper();
	rooneyCelebrate();
}

function rooneyCelebrate() {
	var currentCelebratingPosition = parseInt(rooneyCelebrating.style.right);
	rooneyCelebrating.style.right = (currentCelebratingPosition+5) + 'px';
	
	var windowWidth=parseInt(window.innerWidth);
	
	if(windowWidth>currentCelebratingPosition) 
		animator = setTimeout(rooneyCelebrate,timeOut);
	else
		commence();
}

function rooneyRun() {
	
	var ballPosition = parseInt(ball.style.left);
	var rooneyPosition = parseInt(rooney.style.left);
	
	if(ballPosition < (rooneyPosition-50)) {
		rooney.style.left = (rooneyPosition-5)+'px';
		animator = setTimeout(rooneyRun,50);
	} else {
		rooneyKickBall();
	}
	
}

function rooneyKickBall() {

	rooney.style.display = 'none';
	rooneyKick.style.left=(parseInt(rooney.style.left)-20) + 'px';
	rooneyKick.style.display = 'block';
	
	moveBall();
}

function keeperMove() {
	var currentPosition = parseInt(keeper.style.left);
	if(currentPosition >= (goalWidth-keeperWidth) || currentPosition <= 1) 
		leftMovePixels *= -1;
		
	keeper.style.left = parseInt(currentPosition) + leftMovePixels + 'px';
	
	if(!keeperDived)
		animator = setTimeout(keeperMove,timeOut);
}

function moveBall() {	
	var currentTop = parseInt(ball.style.top);
	ball.style.top = parseInt(currentTop) - ballMove + 'px';
	if(currentTop > 100)
		animator = setTimeout(moveBall,2);
	else {
		keeperSave();
	}
}

function keeperSave() {	
		
		keeperDived = true;
		
		var keeperLeft = parseInt(keeper.style.left);
		var keeperRight = parseInt(keeperLeft)+keeperWidth;
		
		//get the left side of the ball position
		var ballLeft = parseInt(ball.style.left);
		//need to add the margin for the goal size
		ballLeft-=50;
		var ballRight = parseInt(ballLeft)+30;
		
		leftKeeper.innerHTML=keeperLeft;
		rightKeeper.innerHTML=keeperRight;
		position.innerHTML=ballLeft + ' - ' + ballRight;	
		
		goalWidthDiv.innerHTML=goalWidth;
		
		if(isGoal(ballLeft, ballRight, keeperLeft, keeperRight)) {
			result.innerHTML='Saved';
			keeperScore++;
			commence();
			
		} else {
			timeOut--;
			
			//never let the goal go below 300px
			if(goalWidth>=300) {
				goalWidth -= 10;
				goal.style.width = goalWidth + 'px';
			}
			startKeeper();
			result.innerHTML='Goal';
			playerScore++;
			commenceCelebration();
		}
		shootInProgress = false;
		updateScore();
		animator = setTimeout(gameStart,1000);
}

function isGoal(ballLeft, ballRight, keeperLeft, keeperRight) {
	return (ballLeft >= keeperLeft 
			&& ballLeft <= keeperRight) ||
			(ballRight >= keeperLeft 
			&& ballRight <= keeperRight)
}

function updateScore() {
	playerScoreHtml.innerHTML = playerScore;
	keeperScoreHtml.innerHTML = keeperScore;
}
