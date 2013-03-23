
var balloon;
var increaseBy = 50;
var currentBlow = 0;
var maxBlows = 10;

function loadGame() {
	balloon = document.getElementById("balloon");
	balloon.style.width = "150px"
}

function blow() {
	currentBlow = currentBlow + 1;
	if(currentBlow < maxBlows) {
		var width = parseInt(balloon.style.width);
		width = width + increaseBy; 
		balloon.style.width = width;
	} else {
		balloon.style.display = 'none';
	}
}
