
var balloon;
var increaseBy = 50;
var currentBlow;

function loadGame() {
	balloon = document.getElementById("balloon");
	balloon.style.width = "150px"
}

function blow() {
	var width = parseInt(balloon.style.width);
	width = width + increaseBy; 
	balloon.style.width = width;
}
