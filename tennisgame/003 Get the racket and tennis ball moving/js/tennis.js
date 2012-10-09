/*
    Tennis game

	Version: 0.0.1
 */

 var game;

function init() {
    game = {
    	player: {
        name: "player",
    		id: "player",
    		score: 0,
    	},
	
    	computer: {
        name: "computer",
    		id: "computer",
    		score: 0,
        speed: 5,
      },
        ball: {
            id: "ball",
        },
        pause : false
    };
  	document.onmousemove = moveMouse;
	
  	gameTimeLast = new Date();
  	update();
}

function moveMouse(e) {
	var y;	
	if(!e) {
		e = window.event;
		y = e.event.offsetY;
	}
	else {
		y = e.pageY;
	}
  y -= 136;  
  if(y >= 0 && y <= 324)
    document.getElementById(game.player.id).style.top=y+"px";
  else if(y < 324)
    document.getElementById(game.player.id).style.top="0px";
  else if(y > 0)
    document.getElementById(game.player.id).style.top="324px";
  }

function update() {
	dateTime = new Date();

	gameTime = (dateTime - gameTimeLast);
	if(gameTime < 0)
		gameTime = 0;

	moveAmount = gameTime > 0 ? gameTime / 50 : 1;
  if (!game.pause) {
    if(document.getElementById(game.computer.id).offsetTop < document.getElementById(game.ball.id).offsetTop) {
      document.getElementById(game.computer.id).style.top = document.getElementById(game.computer.id).offsetTop + (game.computer.speed * moveAmount) + "px";
    }
  }
  
	setTimeout(update,1000/30);
	gameTimeLast = dateTime;
}

function intro() {
	var playButton = document.getElementById('playButton');
	playButton.onclick = function() {
		document.getElementById('titleScreen').className = "";
    setTimeout("document.getElementById('titleScreen').style.display = \"none\"", 500);
    setTimeout("document.getElementById('playScreen').style.display = \"block\"", 700);
	  setTimeout("init()",700)
  }

	var pauseButton = document.getElementById('pauseButton');
	pauseButton.onclick = function() {
		if (!game.pause) {
			game.pause = true;
			this.innerHTML = "Continue";
			document.getElementById('pauseText').style.display = "block";
      document.getElementById(game.ball.id).style.display = "none";
      document.getElementById(game.computer.id+"Score").style.display = "none";
      document.getElementById(game.player.id+"Score").style.display = "none";
      document.getElementById(game.computer.id).style.display = "none";
      document.getElementById(game.player.id).style.display = "none";
		}
		else {
			game.pause = false;
			this.innerHTML = "Pause";
			document.getElementById('pauseText').style.display = "none";
      document.getElementById(game.ball.id).style.display = "block";
      document.getElementById(game.computer.id+"Score").style.display = "block";
      document.getElementById(game.player.id+"Score").style.display = "block";
      document.getElementById(game.computer.id).style.display = "block";
      document.getElementById(game.player.id).style.display = "block";
		}
	}
}

intro();
