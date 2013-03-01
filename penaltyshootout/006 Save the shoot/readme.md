006 Save the shoot
===================================

We have spend the last few weeks running and kicking the ball, but its finally time to give
the computer a chance to save the shoot.  Now that Rooney is running and shooting with grace
its time to bring Stephen Cluxton into the game to show what real Gaelic players are made of.  


Aim
---------
* Functions
* If/else logic
* Variables
* Position on webpage


Game aim
-----------
* Stop the goal keeper once ball reached destination
* Check whether the keeper has saved it.

Ok so lets get started.

Stop the goal keeper once ball reached destination
------------

We now have Rooney kicking points or goals.   Remember we needed to create a variable for where
the ball must stop? This variable was called __topStopPoint__ so we know when the ball 
gets to this position the goal keeper should stop moving.

Can you remember which function moved the keeper? Yes you are right __moveKeeper()__

So lets open penaltyshootout.js and take a look at this function.  What part of this function keeps make
the goal keeper continually move?  Yes its

````javascript
	setTimeout(moveKeeper, 2);
````

The __setTimeout__ is calling the moveKeeper function every 2 milliseconds, would you agree we if this function
was not called the keeper would stop? Well he would, to stop code being run under certain circumstances what code
would we put around this line? Yes you are right an __if__ statment would work really well here.

Ok what is the __if__ statement we are looking for
__If ball top position is great than or equal to the ball stop position__.  

What do we need to make this happen inside the __moveKeeper__ function, 
* Get the ball current top position
* Use the topStopPoint
* Check if ball top position is greater than than topStopPoint

So first step is to get the current ball top position so lets create a new variable __currentBallPosition__
 for this inside __moveKeeper__

````javascript
var currentBallPosition = parseInt(ball.css('top'));
````

The __moveKeeper__ function should now look like this

````javascript
function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	
	// new after show problem
	var maxRightPosition = goalWidth - keeperWidth;
	
	if(currentPosition >= maxRightPosition
		|| currentPosition < 0) {
		moveAmount = moveAmount * -1;
	}
	
	var newPosition = currentPosition + moveAmount;
	keeper.css('left',newPosition+'px');
	
	jumpKeeper();
	
	var currentBallPosition = parseInt(ball.css('top'));
	
	setTimeout(moveKeeper, 2);
	
}
````

Great we have complete step 1 with our new variable, __Get the ball current top position__, we also
already have topStopPoint available, so we now need to build our if condition around the __setTimeout__ function. 
The if condition is if the current ball position is greater than top stop point.  

````javascript
	if(currentBallPosition  > topStopPoint)
````

The __moveKeeper__ function should now look like this

````javascript
function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	
	// new after show problem
	var maxRightPosition = goalWidth - keeperWidth;
	
	if(currentPosition >= maxRightPosition
		|| currentPosition < 0) {
		moveAmount = moveAmount * -1;
	}
	
	var newPosition = currentPosition + moveAmount;
	keeper.css('left',newPosition+'px');
	
	jumpKeeper();
	
	var currentBallPosition = parseInt(ball.css('top'));
	
	if(currentBallPosition  > topStopPoint) {
		setTimeout(moveKeeper, 2);
	}
}
````

When now shoot the goal keeper stops when the ball stops so you see if you scored or now, its a good start, but
really the computer should be the judge so its time to code whether the keeper saved or not.
