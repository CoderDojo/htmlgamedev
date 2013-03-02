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
* Returning value from function
* Passing parameters into function

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

Check whether the keeper has saved it.
------

We now have to take our html position understanding to a new super hero level, this is because we need to find out if the goal 
keeper has saved the ball, lets do a quick review
* Goal keeper has 4 positions (top, bottom, left, right)
* Ball has we say two positions (left, right)
* If any of the ball is inside the goal keeper image then its a save
* Otherwise a goal

Sound easy and fun, great so lets get stuck in.


### Keeper

We just mentioned that the keeper has 4 positions we need to be concerned with, be we also need to think about the keepers width, as if
we have the left position and add the width we know the right position.  This is important as we define the keeper position actually only
using left and top to change the CSS, however we don't know the right or bottom, that is where width value is going to help us.

You can now understand the important of the keepers width to help us understand whether the keeper has saved the ball or not.  Thankfully 
we already have a variable for the keepers width, can you find it?  Yes you are right its called __keepersWidth__ and the value is 150.

### Save or goal

As just mentioned we need to calculate the ball position against the keeper image to do that we need to update the __save__ function to handle this.
To get started lets create a __save__ function in our __penaltyshootout.js__, this function needs to:
* Get the left position of goal keeper
* Get the right position of goal keeper
* Get the left position of the ball
* Get the right position of the ball
* Check if a goal was scored

So lets create the __save__ function

````javascript
function save() {

}
````

We now need to get the left position from the keeper, using the left property of the keeper. Can anyone tell me 
how we get the keeper (variable left position?)

* Yes you first create the variable
* Retrieve the keeper.css left value
* Use __parseInt__ so its a number

````javascript
function save() {
	var keeperLeft = parseInt(keeper.css('left'));
}
````

Now that we have the left position how do you think we are going to get the right position for the keeper?  Yes we can take the 
left position and add the width of the image.   Lets create a new variable keeperRight to store this value againsts.

````javascript
var keeperRight = keeperLeft+keeperWidth;
`````

The __save__ function should now look like this.

```javascript
function save() {
	var keeperLeft = parseInt(keeper.css('left'));
	var keeperRight = keeperLeft+keeperWidth;
}
````

Lets see what these values are so we will add an alert to the save function, outputting the left and right positions

````javascript
 alert(keeperLeft + ' - ' + keeperRight);
````

The __save__ function should now look like this.

```javascript
function save() {
	var keeperLeft = parseInt(keeper.css('left'));
	var keeperRight = keeperLeft+keeperWidth;
	
	alert(keeperLeft + ' - ' + keeperRight);
}
````

Refresh your browser shoot and tell me if you see anything? No? Why not?

__Maybe because the function has not been called__

Ok lets think where do we think we could call the save function, how about on the __moveBall__ function when the ball stops?  Here
when the ball stops we will check if its been saved? 


````javascript

function moveBall() {

	var currentBallTop = parseInt(ball.css('top'));
	var newBallTop = currentBallTop - 10;
	
	ball.css('top', newBallTop + 'px');
	
	if(newBallTop > topStopPoint) {
		setTimeout(moveBall, 20);
	} else {
		save();
	}
	
}

````

