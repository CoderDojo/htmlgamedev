Gunship

This project demonstrates several key features that are useful when writing applications in JavaScript:
- The use of sprites to create animated images
- The use of the HTML5 Canvas element
- Object oriented methods of building the game.
- Extensive use of JSON syntax.
- Some useful mathematical constructs for managing games

The Game
========
The game we are building is a simple shooter game. We have a helicopter gunship that tries to stem the
tide of invading bugs. The Gunship has the advantage that it can shoot bullets in three directions simultaneously:
up, down, and forward. The gunship can move in all four directions.

There is a steady stream of bugs and they are added to the game faster as the game progresses.

We start off by deciding what the core objects of our game will be.

Then we start building the game with a blank HTML5 Canvas that we paint with the terrain.

Week 1
======== 
First of all we identify some of the objects that we will need to build to complete this game.
The list we came up with was:
- The Gunship (this will be the player)
- Enemies - the swarm of bugs
- Bullets
- Explosions
One other less obvious object is that something needs to co-ordinate the activities of all of 
the objects. Some games call this the Game Artificial Intelligence. In our case we'll simply call 
it the Game Engine.

We created a simple HTML page with a single div containing a HTML canvas element.
	<html>
		<head>
			<title>Helicopter Gunship</title>
			<link rel="stylesheet" type="text/css" href="css/gunship.css"/>
		</head>
		<body>
		<div id="gameDiv">
			<canvas id="gameCanvas"/>
		</div>
		</body>
	</html>

We then styled the page to position the div in the middle of the page with a size of 512px x 480px.
Hence the reference to css/gunship.css in the HTML file.

Then we created a javascript file, gunship.js, in which we included the startup code for our application
using a typical jQuery initialisation.
	$(document).ready(function() {
	});
	
We then use this to get a reference to the canvas:
	var gameCanvas = $("#gameCanvas")[0];

We use this to obtain a reference to the drawing object which will allow us to draw on this canvas.
	var drawCtx = gameCanvas.getContext("2d");
	
We then use an image object to load the image we're going to use to draw the pattern for the terrain background.
	var img = new Image();
	img.src = "images/terrain.png";

Since the images load in the background we need to wait until the image is loaded before we can use this image
in our code. To do this we use the onload event of the image to tell us when the image is finished loading.
	img.onload = function() {
		var pattern = drawCtx.createPattern(img,'repeat');
		drawCtx.fillStyle = pattern;
		drawCtx.fillRect(0,0,gameCanvas.width,gameCanvas.height);
	};

Finally we add the jQuery and gunship javascript files to the HTML file so that they will execute.
<head>
	<script src="scripts/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="scripts/Gunship.js" type="text/javascript"></script>
</head>

