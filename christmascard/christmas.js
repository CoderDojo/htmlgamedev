window.onload=setup;

var rowWidth;
var sleighWidth=250;
var screenWidth;
var screenHeigth;

var sleigh;
var present;

var snow;
var snowMargin = 30;

var snowFallLenght = 0;

function setup() {
	rowWidth = 3;
	setupScreenDimensions();
	setupSnow();
	start();
}

function start() {
	$('#leaves').html('');
	snowFallLenght=0;
	rowWidth=5;
	setupSleigh();
	setupPresent();
	snowFall();
	flySleighAcrossSky();
	buildChristmasTree();
}


function setupScreenDimensions() {
	screenWidth = $(window).width();
	screenHeigth = $(window).height();
}

function setupSnow() {
	snow = new Array();
}

function setupSleigh() {
	sleigh = $('#sleigh');
	sleigh.css('left', '-150px');
	sleigh.css('width', sleighWidth+'px');
	sleigh.show();
}

function setupPresent() {
	present = $('#present');
	present.css('top','250px');
	present.css('width','10px');
	present.css('height','10px');
	present.hide();
}

function flySleighAcrossSky() {
	var currentPosition = getSleighPosition();
	
	if(currentPosition == 300) {
		present.css('left', '300px');
		present.show();
		dropPresent();
		moveSleigh();
		setTimeout(flySleighAcrossSky, 100);
	} else {
		moveSleigh();
		setTimeout(flySleighAcrossSky, 100);
	}
}

function dropPresent() {
	 var currentPresentTop = parseInt(present.css('top'));
	 currentPresentTop = currentPresentTop + 5;
	 present.css('top', currentPresentTop + 'px');
	 
	 var bottomPosition = screenHeigth - currentPresentTop;
	
	 var presentWidth = getPresentWidth();
	 
	 if(presentWidth < 60) {
		increasePresentSize();
	 }
	 
	 if(bottomPosition > 120) {
	 	setTimeout(dropPresent, 20);
	 }
}

function increasePresentSize() {

	var presentWidth = getPresentWidth();
	var presentHeight = parseInt(present.css('height'));
	
	presentWidth = presentWidth + 1;
	presentHeight = presentHeight + 1;
	
	present.css('width',presentWidth);
	present.css('height',presentHeight);
}

function getPresentWidth() {
	return parseInt(present.css('width'));
}	

function moveSleigh() {
	var currentPosition = getSleighPosition();
	
	if(currentPosition < screenWidth) {
		currentPosition = currentPosition + 5;
		sleigh.css('left', currentPosition+'px');
	} else {
		sleigh.hide();
	}
}

function hideSleigh() {
	sleigh.hide();
}

function getSleighPosition() {
	return parseInt(sleigh.css('left'));;
}


function buildChristmasTree() {	
	drawRow();
	rowWidth = rowWidth + 5;
	
	if(rowWidth < 300)
		setTimeout(buildChristmasTree, 100);
	
}

function drawRow() {
	var row = $('<div class="row"/>');
	row.css('background-color','green');
	row.css('height','5px');
	row.css('margin-left','auto');
	row.css('margin-right','auto');
	row.css('width',rowWidth + 'px');
	
	$('#leaves').append(row);
}	

function snowFall() {
	snowRowFall();
	moveSnow();
	checkIfBottomRowOutsideScreen();
	
	snowFallLenght++;
	if(snowFallLenght < 60) {
		setTimeout(snowFall, 1000);
	} else {
		endSnowFall();
	}
}	

function moveSnow() {
	for(var snowRow = 0; snowRow < snow.length; snowRow++) {
		var snowFlakes = snow[snowRow];
		for(var snowFlakePosition = 0; snowFlakePosition < snowFlakes.length; 
			snowFlakePosition++) {
			var snowflake = snowFlakes[snowFlakePosition];
			
			var currentTop = parseInt(snowflake.css('top'));
			currentTop = currentTop + 30;
			snowflake.css('top', currentTop+'px');
		}
	}
}

function checkIfBottomRowOutsideScreen() {
	
	if(snow.length) {
		var firstRow = snow[0];
		var firstFlake = firstRow[0];
		var firstFlakeTop = parseInt(firstFlake.css('top'));
		
		if(firstFlakeTop > screenHeigth) {
			snow.shift();
		}
	}
	
}

function snowRowFall() {
	var snowRow = new Array();
	var snowTop = 25;

	for(var position = 1; position < 10; 
			position++) {
			
		var snowPosition = getRandomSnowFlakePosition();
		
		var snowflake = snowFlake(snowTop + 'px', snowPosition+'px');
		snowRow.push(snowflake);
		
		$('body').append(snowflake);
	}
	snow.push(snowRow);
}

function getRandomSnowFlakePosition() {
	return Math.random() * (screenWidth - 1) + 1;
}

function snowFlake(top, left) {
	var flake = $('<div id="snow" class="snow"><img src="snow.gif"/></div>');
	flake.css('position', 'absolute');
	flake.css('top', top);
	flake.css('left', left);
	return flake;
}

function endSnowFall() {
	moveSnow();
	checkIfBottomRowOutsideScreen();
	
	if(snow.length != 0) {
		setTimeout(endSnowFall, 1000);
	} else {
		start();
	}
}