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

We are happy with the right and left positions of the keeper its time to take a look at the ball and get its left position.  The 
variable is called __ball__ can you tell me what code will give us the numeric left position.  
* ```` ball.css('left') ````
* And you will need to put ```` parseInt() ````` around it

Add this code to your __save__ function

````javascript
  var ballLeft = parseInt(ball.css('left'));
````

Also add the ballLeft to the __alert__ so we can see what value the ball is.

The __save__ function should now look like this with your new variable.

````javascript
function save() {
		
		var keeperLeft = parseInt(keeper.css('left'));
		var keeperRight = keeperLeft+keeperWidth;
		
		var ballLeft = parseInt(ball.css('left'));
	
		alert(keeperLeft + ' - ' + keeperRight + ' ' + ballLeft);
}
````

Refresh your browsers, take a shot and see if we are happy with our __ball__ and __keeper__ positions.  Lets now add the right
position for the ball, if I told you the __ball__ width is 50 can you tell me how you would calculate the left position for the
__ball__.
* Yes you are right by adding 50 to the __ballLeft__ variable, so lets go ahead and do that.

So can we see if you can create a new variable called __ballRight__ and add these values together.

````javascript
	var ballRight = ballLeft + 50;
````  

Do you think we would be better using a variable now for the ball width, yes I agree its alot cleaner as when add 50 to __ballLeft__ in 
a few weeks we may not remember what 50 was there for.  So lets create a variable for the ball width and put it at the top of penaltyshootout.js.
Remember the variables we add here up here are global and can be used in every function on the page.


````javascript
	var ballWidth = 50;
````  

Now lets replace the __ballRight__ calculation inside the __save__ function using this new ballWidth variables.


````javascript
	var ballRight = ballLeft + ballWidth;
````  

Refresh your browser and make sure its still working, take a look at the 3 value in there position alerts and let us know if you think there is 
anything wrong with the 3rd value which is __ballLeft__.  Do you actually believe the __ballLeft__ is 0 position? It does not look right
to me, does anyone know the reason for this? Does anyone remember setting the left position of the ball? Or why does the ball position
directly inside the penalty spot.  

Well the answer the value is zero is we have never set ```` ball.css('left', value) ```` in our file.  

Lets take a look at style.css styling of the ball to understand why its positioning in the center.

````css
div#ball {
	position: absolute;
	top: 500px;
	width: 50px;
	margin-left: 50%;
}
````

Which one of these properties is positioning the __ball__ in the center.   Yes you are right its the ```` margin-left: 50%; ````, its
time to remove this style property from __div#ball__ and refresh your browser.

You style.css for __div#ball__ should now look like this

````css
div#ball {
	position: absolute;
	top: 500px;
	width: 50px;
}
````

Now is the ball in the wrong place? Its time to move that and finally fix our __ballLeft__ calculation.  Lets do a review, 
can anyone figure out how we are going to set the ball left position to a number?  We should take a look at what info we have available
* Goal width is 350px from style.css ```` div#goalPosts `````


So lets set the __ball__ left position to half the goal width, do you know which function we are going to add this too?
* The function __setupHtmlPositions()__ was created for this very job so lets add it there

What is the javascript code you are going to add for this? Start with the variable __ball__ and set the value to 
__175px__ which is half to goal width

````javascript
	ball.css('left', '175px');
````

Your __setupHtmlPositions__ should now look like this.

````javascript
//setupHtmlPositions
function setupHtmlPositions() {
	keeper.css('top','0px');
	keeper.css('left','0px');
	ball.css('left','175px');
}
```` 

Lets refresh your browser and see if you are happy with the ball position.  Now kick the ball and the __alert__ should not tell us
the __ballLeft__ value is 175 and __ballRight__ is 225.  

Great we are looking good its now time to remove the alert function and we can add a function to check if the keeper has saved the ball.

Is it a goal?
--------

We are happy with our position values returned and its now time to see if we have actually saved the shoot or has a goal been scored.  So
we will get started by creating a new function for this call __isGoal__

Can you create this function

````javascript
function isGoal() {

}
````

We not have our function but we do not have the information we need to understand whether it was a goal or saved inside this function. Can 
you remember what information we need? 
* __ball__ left position
* __ball__ right position
* __keeper__ left position
* __keeper__ right position

Is there any other positions we need, yes of course there is one to help us understand point or goal
* __ball__ top position
* __keeper__ top position
* __keeper__ bottom position
But we will look at these later.

The best way to get the information we need into this function is by passing __parameters__ into our function.  To do this
we add the information in between the round brackets __()__.  So lets add these variables.

__NOTE__
You can add multiple variable to a function as long as they are separated with a comma __,__

````javascript
function isGoal(keeperLeft, keeperRight, ballLeft, ballRight) {

}
````

This is how we add these variables to this function and now we can use them in this function to help us understand whether a goal
was scored.  So lets see if anyone can tell us using these 4 variables / values explain how a goal is scored?

* if ballRight is less than keeperLeft

__OR__

* if ballLeft is greater than keeperRight 

So lets program these conditions, would you agree its time to use __if__ statement, what is the first if condition inside our __isGoal__
function

````javascript
	if((ballRight < keeperLeft))
````

The __isGoal__ function should now look like this

````javascript
function isGoal(ballLeft, ballRight, keeperLeft, keeperRight) {
	if((ballRight < keeperLeft)) {
	
	}
}
````

### OR Conditions

We have said that if the ball is outside the keepers left position __OR__ the ball is outside the keepers right position
then its a goal.

So we have to put an __OR__ in our if statement this can be done by using two pipes on your keyboard __||__.

With the two __||__ we need to update our if statement to check if the __ballLeft__ is greater than __keeperRight__

````javascript
	if((ballRight < keeperLeft) ||
	 (ballLeft > keeperRight))
````

Our __isGoal__ function should now look like this after we add the __{}__ around our if statement

````javascript
function isGoal(ballLeft, ballRight, keeperLeft, keeperRight) {
	if((ballRight < keeperLeft) ||
			(ballLeft > keeperRight)) {
	}
}
````

### Returning values from a function 

To return a value from a function we use the __return__ keyword, in this scenario it will tell us __true__ if goal was
scored otherwise __false__ if was saved.  To return true on our __if__ condition we add  ```` return true; ```` inside 
our __if__ block.

````javascript
function isGoal(ballLeft, ballRight, keeperLeft, keeperRight) {
	if((ballRight < keeperLeft) ||
			(ballLeft > keeperRight)) {
			return true;
	}
}
````

However we need to also return false if its saved by the keeper, I think we can do this with an else statement and adding
```` return false; ````.  

The __isGoal__ function should now look like this.

````javascript
function isGoal(ballLeft, ballRight, keeperLeft, keeperRight) {
	if((ballRight < keeperLeft) ||
			(ballLeft > keeperRight)) {
			return true;
	} else {
		return false;
	}
}
````



Questions
-------
Lets do a recap of keep learning objectives here
* How do you get the left position for the ball?
* What is a parameter?
* Explain if / else statements?
* How do you add an __OR__ condition inside your if statement?
* How do you return a value from a function?

