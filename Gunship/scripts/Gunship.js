$(document).ready(function() {
	var gameCanvas = $("#gameCanvas")[0];
	var drawCtx = gameCanvas.getContext("2d");
	// HTML <img src='images/terrain.png'/>
	var img = new Image();
	img.onload = function() {
		var pattern = drawCtx.createPattern(img,'repeat');
		drawCtx.fillStyle = pattern;
		drawCtx.fillRect(0,0,gameCanvas.width,gameCanvas.height);
	};
	img.src = "images/terrain.png";
	
	// More info on this drawing context here:
	// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
});