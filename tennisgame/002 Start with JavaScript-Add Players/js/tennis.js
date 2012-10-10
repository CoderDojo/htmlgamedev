/*
    Tennis game

	Version: 0.0.1
 */

 var game;

function init() {
    game = {
    	player: {
    		name: "Player",
    		score: 0
    	},
	
    	computer: {
    		name: "Computer",
    		score: 0,
            speed: 2
        },
        ball: {
            id: "#ball"
        },
        pause : false
    };
}

function intro() {
	var playButton = document.getElementById('playButton');
	playButton.onclick = function() {
		document.getElementById('titleScreen').style.display = "none";
		document.getElementById('playScreen').style.display = "block";
		init();
	}

	var pauseButton = document.getElementById('pauseButton');
	pauseButton.onclick = function() {
		if (!game.pause) {
			game.pause = true;
			this.innerHTML = "Continue";
			document.getElementById('pauseText').style.display = "block";
		}
		else {
			game.pause = false;
			this.innerHTML = "Pause";
			document.getElementById('pauseText').style.display = "none";
		}
	}
}

intro();
