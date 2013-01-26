window.onload=setup

//handle the key events
document.onkeypress=function(e){
	var e=window.event || e;
	if(e.charCode==32) {
 		rooneyStart();
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
}

function commenceGame() {
	setupHtmlPositions();
	startKeeper();
	penaltySetup();
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
	}  
}
	
function rooneyKickBall() {
	rooney.css('display', 'none');
	rooneyKick.css('display', 'block');
}





