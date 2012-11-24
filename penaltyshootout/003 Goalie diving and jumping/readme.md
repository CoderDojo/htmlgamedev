003 Goalie diving and jumping
===================================

Ok we left last session on recursion where our browser now had an infinite
loop and the goal keeper was left flying across the screen with no end in 
sight, in some fun cases we managed to hack the browser as some browsers 
crashed.  Not everyone can handle the super hero goal keeper we are developing.

Aim
---------
* Start looking at logic with if statements
* Continue our focus on functions
* Introduction to Arrays
* Add more variables


Game aim
-----------
* Restrict the goal keeper to move only inside the goal posts
* Make the goal keeper jump up and down
* Paint the penalty spot
* Lets kick the ball

Ok so lets get started.

Lets stop the keeper flying across the screen
-------------
Anyone remember which function is doing is moving the keeper? Its the move 
keeper one.  So lets review the function to see why it never stops?

````javascript
function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	var newPosition = currentPosition + 5;
	keeper.css('left',newPosition+'px');
	setTimeout(moveKeeper, 2);
}
````

The reason here never stops is because we keep adding 5 dots/px to 
his current position.  Can anyone thing how we would make him move 
the other way? Yes subtraction

````javascript
function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	var newPosition = currentPosition - 5;
	keeper.css('left',newPosition+'px');
	setTimeout(moveKeeper, 2);
}
````
Ok different problem now he is moving backwards to infinity a negative
infinity so to speak.  So we need a way to represent the direction? Ok 
lets create a variable called **moveAmount**, now add this variable
to the top of your page, we are setting to move 5 dots every time.

````javascript
//keeper variables
var keeper;
var keeperWidth=150;

var goalWidth;
var leftMovePixels=1;

var moveAmount = 5;
````

Now that we are armed with our new variable lets use it.  When the 
keepers gets to the end of the goal we will make him move backwards
using subtraction instead of addition.

##### if statements
if statements in code allow use to execute only a small set of code
under certain conditions we define after the if statement.

In our example here we want the to say __"if the goal keeper position
is greater than the goal then move back across the goal"__ This can 
be done with the following if statement

````javascript
if(currentPosition > goalWidth) {
````

if statements start with if then round backets with conditions inside 
them the code we want to run when this condition is met is inside
the brackets { }

So it looks like this in the function

````javascript
function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	
	if(currentPosition > goalWidth) {
		moveAmount = moveAmount * -1;
	}
	
	var newPosition = currentPosition + moveAmount;
	keeper.css('left',newPosition+'px');
	setTimeout(moveKeeper, 2);
}
````
Inside our if statement we are reversing the moveAmounts to a negative 
number so the goal keeper moves back across the goal.

Refresh your browser and let us know what you think of that?  Anyone
spot a problem? He keeper turned around all right but ran off the other 
way.

##### Multiple conditions in an if statement
We can have multiple conditions in an if statement and these are 
seperated with __OR__ meaning only one condition needs to be true or 
__AND__ for all conditions need to be true.

##### OR represented by
||

##### AND represented by
&&

In our scenario here we want the goal keep to change direction if his
position is greater than OR less than the width of the goals? Yes
So we are going to use the OR logic with || in the code

````javascript
function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	
	if(currentPosition >= goalWidth
		|| currentPosition < 0)  {
		moveAmount = moveAmount * -1;
	}
	
	var newPosition = currentPosition + moveAmount;
	keeper.css('left',newPosition+'px');
	setTimeout(moveKeeper, 2);
}
````



Conclusion
------------

Questions
* What is an if condition?
* Explain how you write an if condition in code?
* What is AND used for in if conditions?
* What is OR used for in if conditions?
* What number represents the first number in an array?
