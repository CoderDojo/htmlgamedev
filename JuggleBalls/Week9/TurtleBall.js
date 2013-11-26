var ball;
$(document).ready(function() {
	ball = new BallObject($("#ballDiv"));
	var locDiv = $("#ballLocation");
	
	var box = new Box($("#ballBox"));
	box.addBall(ball);
	box.moveBall();
	
	$("#btnUp").click(function() {
		ball.moveVertical(-10); 
		locDiv.html(ball.getXpos()+","+ball.getYpos());
	});
	$("#btnDown").click(function() { 
		ball.moveVertical(10);
		locDiv.html(ball.getXpos()+","+ball.getYpos());
	});
	
	$("#btnLeft").click(function() {
		ball.moveHorizontal(-10);
		locDiv.html(ball.getXpos()+","+ball.getYpos());
	});
	
	$("#btnRight").click(function() {
		ball.moveHorizontal(10);
		locDiv.html(ball.getXpos()+","+ball.getYpos());
	});
	
	$("#btnGrow").click(function() {
		ball.grow(10);
	});
	$("#btnShrink").click(function() {
		ball.shrink(10);
	});
	
	
});