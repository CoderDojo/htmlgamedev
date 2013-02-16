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

Add these variables to the top of the screen and the values as to where
the ball should stop in relation to the top of the screen.

````javascript
var goalTop = 120;
var pointTop = 20;
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

### Kick points or goals

At the moment we are only using the space key to kick the ball, but ow
we need two more keys

* Up arrow
* Down arrow

We should remember we need to get the codes for the keyboard, 

* *Key* | *Code* 
* Up arrow | 38 
* Down arrow | 40 
* Space key | 32 

Now that we are handling 3 keys we should move to a function, how about
 a new function that handles the key action?

This function will need to take in a parameter for the event we will
call that e.

Lets think about how many keys on the keyboard each of this events tells
us different information such as the key type eg enter key, up arrow key etc.
This information is help inside the e parameter.

````javascript
function handleKey(e) {

}
````

You now need to call this function to catch a key triggering, orginally
we had __document.onkeypress__

````javascript
//handle the keyboard events
document.onkeypress=function(e){

````

##### NOTE
document.onkeypress does not work for arrow keys so we need to change
it to document.onkeydown and call our new function

````javascript
//handle the keyboard events
document.onkeydown = handleKey;
````

We should add the code back in here from the for the space key.  We

* first got the event variable
* got the code for the key from the event variable
* check if the code was space bar __(32)__
* if it was space bar they we started rooney's runup

````javascript
function handleKey(e) {
	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;
	
	if (keyCode == 32) { // space bar
		rooneyStart();	
	} 
}
````
Time to refresh your browser and make sure it all works as before.  
Hit your space key and rooney should run up and take the penalty.  

We now want to have rooney running up and want to allow him to shoot
a penalty or point so its time to bring our arrow keys into the game.

##### Up arrow

Can you remember the key code for the up arrow? Its 38 so we need to 
add the if condition to do this.  We will use this for scoring a point.

###### if else
There is scenarios when you want to check against more than two if conditions, in
this scenario you should use an __else if__ statement.  Here we can
check if the key selected is space bar, up arrow or down arrow.

Every __if else__ statment is followed by the condition you want to check.

````javascript
else if(keyCode == 38) {
````

The handle key function now looks like this

````javascript
function handleKey(e) {
	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;
	
	if (keyCode == 32) { // space bar
		rooneyStart();	
	} else if(keyCode == 38) {
	
	}
}
````

We now need to perform an action on pressing of the up arrow, this 
action will need to tell the game to kick a point, the down arrow will be 
used to kick a goal.

So lets get started with creating a new function for kick point 

````javascript 
function kickPoint() {

}
````

Inside this function we need to set a variable to tell the ball where
to stop on the screen? Can you remember we used that variable in the
moveBall function.  It was called __topStopPoint__.  

We need to stop the ball at the __pointTop__ position so we will set the
__topStopPoint__ to this position.


````javascript 
function kickPoint() {
	topStopPoint = pointTop;
}
````

We now need to call this function when we hit the up arrow so lets go
back to the handleKey function and add this new function.


````javascript
function handleKey(e) {
	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;
	
	if (keyCode == 32) { // space bar
		rooneyStart();	
	} else if(keyCode == 38) {
		kickPoint();
	}
}
````

##### Down arrow

Can you remember the key code for the down arrow? Its 40 so we need to 
add the if condition to do this.  We will use this for scoring a goal.

###### if else
There is scenarios when you want to check against more than two if conditions, in
this scenario you should use an __else if__ statement.  Here we can
check if the key selected is space bar, up arrow or down arrow.

Every __if else__ statment is followed by the condition you want to check.

````javascript
else if(keyCode == 40) {
````

The handle key function now looks like this

````javascript
function handleKey(e) {
	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;
	
	if (keyCode == 32) { // space bar
		rooneyStart();	
	} else if(keyCode == 38) {
		kickPoint();
	} else if(keyCode == 40) {
	
	}
}
````

We now need to perform an action on pressing of the down arrow, this 
action will need to tell the game to kick a goal.

So lets get started with creating a new function for kick point 

````javascript 
function kickGoal() {

}
````

Inside this function we need to set a variable to tell the ball where
to stop on the screen? Can you remember we used that variable in the
moveBall function.  It was called __topStopPoint__.  

We need to stop the ball at the __goalTop__ position so we will set the
__topStopPoint__ to this position.  Just like we did with the pointTop
when we selected a point.

````javascript 
function kickGoal() {
	topStopPoint = goalTop;
}
````

We now need to call this function when we hit the up arrow so lets go
back to the handleKey function and add this new function.

````javascript
function handleKey(e) {
	var event = window.event ? window.event : e;
	var keyCode = event.keyCode;
	
	if (keyCode == 32) { // space bar
		rooneyStart();	
	} else if(keyCode == 38) {
		kickPoint();
	} else if(keyCode == 40) {
		kickGoal();
	} 
}
````

### Add some arrows 

In most games there is indications of your selected actions, we have 
just allowed rooney kick a point or a goal, but what if you cant remember
what you selected, how about we add some arrows to the screen to help us.

#### Style the arrows

Its time to style the for our arrows, we will start with the HTML, what tag do we start with
when adding an image?  Ye you are right a ```` div ```` so add it and put an id of __arrowDown__.
Inside the div we need to add the img tag, but we wont add the __src__ attribute for the image, can
you think why?


````html
<div id="arrowDiv">
			<img id="arrowImage"/>
		</div>
````

We don't add the src attribute as we will need to change the arrow image based on the user selection? If the user selects 
point we need an up arrow and a down arrow for the goal.  To enable us change the src value we added an id to the 
img tag.

It's time to style the div, lets position the arrows to the bottom right of the screen, any thoughts on how you are 
going to do that?
* width to 100px
* position to absolute
* bottom to 50px 
* right to 50px

````css
div#arrowDiv {
	width: 100px;
	position: absolute;
	right: 50px;
	bottom: 50px;
}
````

Now refresh you browser and see if there is any change.  There should be none as we haven't added the image yet.  Its time to 
jump into the javascript and get our arrows to display.  To display the arrow on screen what is the first thing we need need to 
do in penaltyshootout.js?  Yes you are right we need to start with a variable


````javascript
var arrowImage;
````

Once we have our variable, we now need to get the img from the html.  Lets move to  
setupVariables function and set our arrowImage variable to the arrowImage img tag.

We need to use JQuery selector to get the arrowImage from the page

````javascript
arrowImage = $("#arrowImage");
````

This is what the setupVariables after the arrowImage is added to the screen

````javascript
function setupVariables() {
	//get the variables required from the HTML
	ball  = $("#ball");
	penaltySpot = $("#penaltySpot");
  	rooney  = $("#rooney");
  	keeper = $("#keeper");
  	rooneyKick = $("#rooneyKick");
  	arrowImage = $("#arrowImage");
}
````

Lets add the code the change the arrow to our kickGoal and kickPoint functions.  We
need to add the image file to our __img__ tag to our functions.  

__ADDING A ATTRIBUTE TO VARIABLE__

To set an attribute on a variable
* Start with variable name __arrowImage__
* Add dot __arrowImage.__
* Use the attr function __arrowImage.attr()__
* First add the attribute you want to set src in this scenario __arrowImage.attr('src',)__
* Add the value for the attribute __arrowImage.attr('src','arrowdown.png')__
* Finish the line with semicolan __arrowImage.attr('src','arrowdown.png');__


````javascript
arrowImage.attr('src','arrowdown.png')
````

We need to add the arrowdown.png to the kickGoal function.

````javascript
function kickGoal() {
	topStopPoint = goalTop;
	arrowImage.attr('src','arrowdown.png');
}
````
We need to add the arrowup.png to the kickPoint function.

````javascript
function kickPoint() {
	topStopPoint = pointTop;
	arrowImage.attr('src','arrowup.png');
}
````

By default we are going to setup to kick a goal so we need to set this up in the game.  So we
 should add this functionality to the commenceGame function.  Lets add the __kickGoal()__ function.

````javascript
function commenceGame() {
	setupHtmlPositions();
	startKeeper();
	penaltySetup();
	kickGoal();
}
````
