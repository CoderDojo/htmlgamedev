window.onload=setup	

//keeper variables
var keeper;
var keeperWidth=150;

var goalWidth;
var leftMovePixels=1;

//new
var jumpSequence=1;

//new
var keeperTopPosition = 0;
var keeperBottomPosition = 100;

function setup() {
	//get the variables required from the HTML
	keeper = $("#keeper");
  	goalWidth=400;
  	
  	commenceGame();  	
}

function commenceGame() {
  	
  	//new
  	setupHtmlPositions();
  	
  	startKeeper();
  	
}

//new
function setupHtmlPositions() {
	//new
	keeper.css('top', 0 + 'px');
}


function startKeeper() {

  	keeper.width(keeperWidth+'px');
  	keeper.css('left', '2px');
  	keeper.show();
  	
  	keeperMove();
}


function keeperMove() {
	
	var currentPosition = parseInt(keeper.css('left'));
	
	if(currentPosition >= (goalWidth-keeperWidth) || currentPosition <= 1) 
		leftMovePixels *= -1;
	
	//new
	if(jumpSequence == 20) {
		keeperJump();
		jumpSequence = 0;
	} else {
		jumpSequence = jumpSequence  + 1;
	}
	
	//new
	console.log(jumpSequence);
	
	var newPosition = currentPosition + leftMovePixels;
	keeper.css('left', newPosition + 'px');
	setTimeout(keeperMove,2);
}

//new
function keeperJump() {
	
	var topPosition = parseInt(keeper.css('top'));
	if(topPosition == 0 ) {
		keeper.css('top', keeperBottomPosition + 'px');
	} else {
		keeper.css('top', keeperTopPosition + 'px');
	}
}