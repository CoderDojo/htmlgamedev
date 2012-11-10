window.onload=setup	

//keeper variables
var keeper;
var keeperWidth=150;

var goalWidth;
var leftMovePixels=1;

function setup() {

	//get the variables required from the HTML
	keeper = $("#keeper");
  	goalWidth=400;
  	commenceGame();  	
}

function commenceGame() {
  	startKeeper();
}

function startKeeper() {

  	keeper.width(keeperWidth+'px');
  	keeper.css('left', '2px');
    keeper.css('bottom', '0px');
  	keeper.show();
  	
  	keeperMove();
}


function keeperMove() {
	
	var currentPosition = parseInt(keeper.css('left'));
	
	if(currentPosition >= (goalWidth-keeperWidth) || currentPosition <= 1) 
		leftMovePixels *= -1;
	
	var newPosition = currentPosition + leftMovePixels;
	keeper.css('left', newPosition + 'px');
	setTimeout(keeperMove,2);
}

