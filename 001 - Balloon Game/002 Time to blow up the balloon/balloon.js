
var balloon;
var maxBlows;
var currentBlow = 0;
var count;
var boom;

function loadGame() {
	balloon = document.getElementById("balloon");
	balloon.style.width = "50px";	
	count = document.getElementById("count");	
	
	boom = document.getElementById("boom");
	boom.style.display="none";
	
	maxBlows = Math.floor(Math.random()*11);
	alert(maxBlows);
}

function blow() {
	
	currentBlow = currentBlow + 1;

	if (currentBlow <= maxBlows) {  	
		var blowAmount = 50;
		var balloonWidth = parseInt(balloon.style.width);
		var newBalloonWidth = blowAmount + balloonWidth;
		balloon.style.width = newBalloonWidth + "px";
		
		count.innerHTML = currentBlow;
	} else {
		balloon.style.display = 'none';
		boom.style.display="block";
	}
} 

function tieBalloon() {
	if(currentBlow == maxBlows) {
		alert('You win');
	} else {
		alert('Sorry too early');
	}
}



	