var tennisGame = {
	
	player1: {
		name: "Player 1",
		score: 0,
		racket: {
			id: "#racketLeft",
			top: 0,
		}
	},
	
	player2: {
		name: "Player 2",
		score: 0
	},
	
	start: function() {
		console.log("Start button was pressed.");
		console.log("Asking players for their names.");
		this.getPlayerNames();
		console.log("Change names on scoreboard.");
		this.changeScoreboard();
		console.log("SUCCESS!");
	},
	
	getPlayerNames: function() {
		console.log("Get Player 1's name.");
		player1Name = prompt('Player 1: What is your name?', "Player 1");
		console.log("Get Player 2's name.");
		player2Name = prompt('Player 2: What is your name?', "Player 2");
		console.log("Change player object parameters.")
		this.player1	.name = player1Name;
		this.player2.name = player2Name;
	},
	
	changeScoreboard: function() {
		console.log("Changing Player 1's name and score.");
		$("#player1Name").html(this.player1.name);
		$("#player1Score").html(this.player1.score);
		console.log("Changing Player 2's name and score.");
		$("#player2Name").html(this.player2.name);
		$("#player2Score").html(this.player2.score);
	},
	
}
