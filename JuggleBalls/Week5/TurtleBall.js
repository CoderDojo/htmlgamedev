var ball;
$(document).ready(function() {
	ball = new BallObject($("#ballDiv"));
	
	$("#btnUp").click(function() {
		ball.moveVertical(-10); 
	});
	$("#btnDown").click(function() { 
		ball.moveVertical(10);
	});
	
	$("#btnLeft").click(function() {
		ball.moveHorizontal(-10);
	});
	
	$("#btnRight").click(function() {
		ball.moveHorizontal(10);
	});
	
	$("#btnGrow").click(function() {
		ball.grow(10);
	});
	$("#btnShrink").click(function() {
		ball.shrink(10);
	});
});