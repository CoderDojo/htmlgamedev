window.onload=setup	

//keeper variables
var keeper;
var keeperWidth=150;

var goalWidth;
var leftMovePixels=1;

var moveAmount = 5;

function setup() {

	//get the variables required from the HTML
	keeper = $("#keeper");
  	goalWidth=400;
  	
  	commenceGame();
}

function commenceGame() {
	setupHtmlPositions();
	startKeeper();
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
	
	if(currentPosition >= goalWidth
		|| currentPosition < 0) {
		moveAmount = moveAmount * -1;
	}
	
	var newPosition = currentPosition + moveAmount;
	keeper.css('left',newPosition+'px');
	setTimeout(moveKeeper, 2);
}





