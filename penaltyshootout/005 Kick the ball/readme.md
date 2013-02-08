005 Kick the ball
===================================

Now that we have introduced rooney the greatest striker in the world into
our gaelic game.  We also allowed an english player blast penalties over
the box which they like doing under pressure.  Rooney is also taking 
the right run up and he is a left footer player and we even see him
make the kick motion.  Well its now time to see the ball move
 
Aim
---------
* Another look at functions
* Understanding where you need to put functions


Game aim
-----------
* Make the ball move

Ok so lets get started.

Make the ball move
------------

When rooney kicks the ball needs to move right! so its time to immediately
make the ball move so we will create a function called moveBall.  Lest
create the function

````javascript
function moveBall() {
	
}
````

Now that this function has been created, where do we need to call it from?
Think about where does the ball need to move? Where did rooney kick the ball
and the ball? Remember the function that changed the image? Was it called

We need to add it after the rooneyKickBall function which was
triggered in the rooneyRun function

````javascript
function rooneyRun() {
	var ballPosition = 200;
	
	var rooneyPosition = parseInt(rooney.css('left'));
	if(ballPosition < (rooneyPosition)) {
		rooney.css('left',(rooneyPosition-5)+'px');
		setTimeout(rooneyRun,50);
	} else {
		rooneyKickBall();
		moveBall();
	}
}
````

Now that the function is called, time to start writing some code.  Lets
get started with making the ball move.  To gets started we need
 to get the ball top value, how do we get top value for the ball?
 
* First we get the variable name ball
* So its ball.
* Need to get the top value ball.css('top')
* This returns a pixel value with px
* We need a number to use

The following code creates a variable with the current top value

````javascript
function moveBall() {	
	var currentTop = parseInt(ball.css('top'));
}
````

Now we have the top position on the screen, why do we need to understand
where the ball is in relation to the top of the screen? Its because
we need the ball to change its top position

So lets change the currentTop value by subtracting 10 dots (px) to the
current top value, will we need a new variable for this?

````javascript
function moveBall() {	
	var currentTop = parseInt(ball.css('top'));
	var newTopValue = currentTop - 10;

}
````

Now how do we set the new ball position using JQuery? You start with
the variable ball the call the css function.  You are then looking 
to set the top property and the value.

````javascript
	ball.css('top',newTopValue+'px');
````

This needs to be added to the moveBall function

````javascript
function moveBall() {	
	var currentTop = parseInt(ball.css('top'));
	var newTopValue = currentTop - 10;
	ball.css('top',newTopValue+'px');
}
````

Its now time to add recursion to our game, as we want the ball to move
to the goal or point positions.  Recursion is where you continually
call the same function.

We need to use the setTimeout function
provided by JQuery to handle this, it takes in the name of the function
you want to call recursively, and the time delay between each call in
milliseconds.

````javascript
	setTimeout(moveBall,20);
````

The setTimeout function needs to be added to the moveBall function

````javascript
function moveBall() {	
	var currentTop = parseInt(ball.css('top'));
	var newTopValue = currentTop - 10;
	ball.css('top',newTopValue+'px');
}
````

Its great our ball is flying up the screen, but the ball never stops,
its goes through the goal and never comes back.  Any ideas how we are
going to stop this?  Yes you are right we need a 

We now need variables to use variables to set the top position for 
point or goal.  Lets think about this we need the position on the screen
where the ball should stop for point and goal? Remember we are dealing
with a 2D screen here.

We need three varaibles
* goalTop is the goal stop top position on screen
* pointTop is the point stop top position on screen
* topStopPoint is the current stop position, this can either be a point or goal top

We will default the topStopPoint to goal and will show you how you can
change it later.

Add these variables to the top of the screen

````javascript
var goalTop = 120;
var pointTop = 80;
var topStopPoint = goalTop;
````

Its now time to use these variables to stop the ball at either our
goal or point position, lets get started with stopping at the ball
at the goal position.

To do this wee need to add an if condition around the recursion call.

````javascript
function moveBall() {	
	var currentTop = parseInt(ball.css('top'));
	var newTopValue = currentTop - 10;
	ball.css('top',newTopValue+'px');
	if(currentTop > topStopPoint) {
		setTimeout(moveBall,20);
	}
}
````

Now refresh you browser and the moveBall should only move to the goal
position.

What keys do you think we should use the to decide whether rooney kicks
a goal or point? How about the up/down arrows.  Currently key pressing code
is at the very top of our javascript file and looks like this

````javascript
//handle the keyboard events
document.onkeypress=function(e){
	var e=window.event || e;
	if(e.charCode==32) {
	  rooneyStart();
	}
}
````

At the moment we are only using the space key to kick the ball, but ow
we need two more keys

* Up arrow
* Down arrow

We should remember we need to get the key codes for the keys

| *Key* | *Code*
| Up arrow | 38
| Down arrow | 40
| Space key | 32
