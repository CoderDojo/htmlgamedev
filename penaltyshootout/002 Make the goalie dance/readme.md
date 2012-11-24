002 Make the goalie dance (Move)
===================================

Ever wanted to understand how the computer player works, well we will start
this adventure this week.  We are going to introduce one of the coolest 
languages this week that will lay the foundations to the fun we have 
planned for the weeks ahead.  This week will also introduce a twist on 
the game that was sent in a suggestion during the week.

Aim
---------

* Add a border and z index to sky
* Introduce JavaScript
* Introduce JQuery
* How to link JavaScript to your webpage
* Make the game more Irish
* Create the goal box
* Show an action on load of page
* Time to make the goalie dance



Game aim
-----------
* Add border and index to sky
* Add link to JavaScript and JQuery
* Add start function and setup on load
* Make the keeper move

Ok so lets get started.

Lets finish the sky
-------------
Look at your page and let us know if you think there should be a something
between the grass and the sky, they are on top of each other.  One great
designer always said putting small borders around images can add emphasis
and make you site look alot slicker.  So lets add a really small border
between the sky and grass.  Anyone got an idea how to do this?

How about we add the border to the sky div?

````css

div#sky {
	border-bottom: 1px solid white;	
	
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 200px;
	background: skyblue;
	
}
````

One think we are going to have to think about is which image needs to be on top,
lets think about this, if we dont consider the importance of image position
we will never sit there wondering where our goalie has disappeared too?
Why is this img tag not working, well is more than likey the sky is on top
of the goalie if you can imagine that?

Ok would you agree screens are all 2D? However in games we actually have a 
third dimension, we need the sky and grass to be at the back and goalie and 
ball to be on top of them?

So how do you handle the 3 dimensional index in CSS, its with the property
called __z-index__ 
* If z-index value is minus then it object goes backwards into the screen
* If z-index is positive it goes on top

__Question Time__
* Give us an z-index value for the sky?
* Give us an z-index value for the goalie?


Introduction to JavaScript
-------------
JavaScript is the programming language of the Internet.  Like with HTML and CSS
the Browser (Firefox, Chrome or the Evil One) understands JavaScript
code and can perform actions when it sees it on your website. 

Lets be honest here, JavaScript is the cool language of the Internet
as it enables us to create fun games.  

This week are we are introducing two new concepts that live at the core
of every language.  These principles are
* Functions
* Variables
So keep an eye out for these and we will see more from them over our next
few weeks.


Introduction to JQuery
-------------

"jQuery is a cross-browser JavaScript library designed to simplify 
the client-side scripting of HTML".  JQuery is JavaScript, its a 
programming framework that will make development easier and quicker
so we will use it.

Dont worry about us using a framework, it fits nicely into
our games course as it has alot of cool features to support game development.
You might be surprised, but all languages you will learn have frameworks
associated with them to make you job easier.  Usually these frameworks
are written by the cool guys in the OpenSource communinty.  Great work guys!

Create a new JavaScript file
----
Now you will need to create a new file for your JavaScript code.  JavaScript
files are stored in **.js** files.  So lets get started create a new blank file in your
current folder called penaltyshootout.js

How to link JavaScript to your webpage
-------------

Like we have seen with CSS, we need link the JavaScript to our webpage.
Can you remember why we should do this?
* So we can share our JavaScrit code with other webpages
* Its all about reuse, reuse, reuse.  It makes development quicker

To link the javascript to the page you use the ```` <script> ```` tag with the
following properties
* type set to "text/javascript"
* src to the name of your file, make sure the filename case is the same
and in the same folder for now.

Here is the example of our who pages linked
````html
<head>
	<script type="text/javascript" src="penaltyshootout.js"></script>
	<script type="text/javascript" src="jquery.js"></script>
</head>
````

Variable
-----
A variable is something required by your program, but its only ever 
one thing. Its an object (eg Ball) you need to use and change in your program.
In javascript you create a variable using the **var** keyword
followed by the name of your variable like so

````javascript
var keeper;
````

#### NOTE
You variable name should explain what the variable is, so when you look
at your code you know straight away what it is.

Create your first function
----
Functions are acivities that do one only.  Think of a game every time you press a key
it causes an activity which is handled by the function.

A function has the following rules
* starts with the word function
* then the function name (you can put what ever name you want, no spaces through)
* now put the open and close brackets ()
* add the open backet for your function {
* close your function with }

````javascript
function setup() {

}
````

So lets add our first JavaScript function, how about we say something
when the webpage loads like "My Webpage is Ready"

````javascript
function setup() {
	alert("My WebPage Is Ready");
}
````

Now refresh your page and see if it your message appears?  
Hopefully it does not appear as we have not called it.  You can remove
the alert call now as we wont need it in the real game.

````javascript
function setup() {

}
````

Link this function to your page load
-------------
Lets call this function.  When the webpage is load and the goal is built the goalie is ready
we want to load the page so we can use the goalie.  If we did
not wait for the page to load our goalie image may not be available
yet as the browser has not got to that line of code.  So would cause
an error.

To tell the browser to call a function when the page is finished loading
we put the **window.onload=<OURFUNCTIONNAME>;** on top of our JavaScript
file.

````javascript
window.onload=setup;

function setup() {
	alert("My WebPage Is Ready");
}
````
Here we can see you are calling the setup function you just created and 
now what happens on the refresh. Your message should now appear.

We will come back to the JavaScipt later, we are going to build more of
our football pitch first and add our surprise.

Celebration Time
--------
Ok you have just created and called your first function, this is a major
step in your programming adventure, **big round of applause**, **YAHOO**, **YAHOO**.
**GO ON** Remember the function rules and life is going to be easy from here.


Make the game more Irish
-------------------

How about we make this game a little more Irish, lets turn it into a 
gaelic penalty shoot out?  

To get started we are going to add a new div around the goal so we 
can have tall posts. Can you create a new div just outside the div with
id goal, this new div will have an id of **goalPosts**

Here you can see our new goalPosts div inside the shootArea and outside
the goal div, this will enable us to add higher posts now

````html
<!-- Shoot area -->
		<div id="shootArea">	
			<div id="goalPosts">
				<div id="goal">
					<div id="keeper">
						<img src="Keeper.png"/>
					</div>
				</div>
			</div>
		</div>
````

Lets style this new posts 
* Set the width
* Position from top
* Their height
* Left and right border which will be the posts

````css

div#goalPosts {
	left: 50px;
	width: 350px;
	top: 20px;
	height: 225px;
	border-left: 6px solid white;
	border-right: 6px solid white;
}

````

Now take a look at your webpage you should have two nice big posts there
now, but unfortunately the goal does not look right, so we need to
change the goal we built last week.

We need to change our current goal style can you
* Remove left and right borders
* Change position to relative
* Change top to 75px
* Change height to 120px
* Change width to 100%

````css
div#goal {
	position: absolute;
	left: 50px;
	width: 350px;
	top: 50px;
	height: 150px;
	border-top: 6px solid white;
	border-left: 6px solid white;
	border-right: 6px solid white;
}
````

The goal style should now look like this

````css
div#goal {
	position: relative;
	top: 75px;
	height: 120px;
	border-top: 6px solid white;
	width: 100%;
}
````

Build the pitch
------------------

Its time to get the line marker out and draw the lines on the pitch,
for this part of the game development you are now the grounds keeper
@ CoderDojo Arena.

### Draw the end touch line

To get started create a new div below your shootArea div, give this div
an id pitch

````html
		<div id="pitch">
			
		</div>

````

Ok lets style the pitch div, can you let us know how you would add
the touch line to your CSS?

Ok we are going to need to 
* Set the width to 100% (full screen width)
* Set the position to relative
* Draw the touch line using the top border

````css
div#pitch {
	position: relative;
	width: 100%;
	border-top: 3px solid white;
}
````

### Draw the goal box

We all see the small box just outside the goal and honestly dont know
if anyone know why its there? Do you know, good question to ask
as I dont have a clue.

So anyone got any idea how we going to add this box? Lets use a div with
id keepersBox, this box is inside your pitch div so shown below

````html
	
	<div id="pitch">
			<div id="keepersBox">
			</div>
		</div>
				
````

Any idea how we are going to style this box?    
* Add the left, right and bottom borders

Now refresh your browser and see how it looks
* Add the top 
* Height of the box
* And it width (Remember this box is wider than goal)

````css

div#keepersBox {
	border-left: 6px solid white;
	border-right: 6px solid white;
	border-bottom: 6px solid white;
	
	top: 0px;
	height: 150px;
	width: 600px;
	
	margin-left: auto;
	margin-right: auto;
}
````

Create our keeper variables
--------------------

To get started we are going to need variables in our game, **Can
anyone guess what variables we need?** To get started we are going
to define
* Keeper variable

We need these to get the goalie moving, can everyone think why yet? 
Key rules of adding variables
* Start your variable with **var** then your variable name
* Your variable name should represent what the variable is
* Always add them to the top of your page
* Always finish each variable with semicolon **;**

````javascript
window.onload=setup	

//keeper variables
var keeper;

function setup() {
}
````

Get the keeper image from your HTML page
--------------------

To use the goal keeper you need to get your code to take control of 
the keeper div from your HTML page.  We are going to use JavaScript
with JQuery to do this.

### JQuery selectors
JQuery selector works exactly the same as CSS so when we are looking
for a HTML tag with an id we use the hash tag **#** and the id of the 
html tag like so for the keeper ```` #keeper ````

To call this selector in JQuery you need to use the dollar symbol
 **$** so to access the keeper in JQuery will look like ```` $("#keeper") ````

### To assign this to the variable keeper
To make the var keeper equal the div on our webpage we need to

````javascript
keeper = $("#keeper");
````

The first time we define a variable use the **var** word but **never**
put that in front of the keeper variable again.  Add this to the code 
inside the setup function

````javascript
function setup() {
	//get the variables required from the HTML
	keeper = $("#keeper");	
}
````

#### Lets make the goalie dance let

To make the goalie move left there we have a javascript function called
css which gives us access to the CSS for that HTML object in our
case the keeper div.  Once we have the keeper div we want to set 
the left position to move 100px.  

To call a function we 
* Add a dot after our variable name = **keeper.**
* Add the function name css = **keeper.css**
* Now add the brackets and semi colon = **keeper.css();**
* Add the parameters to move left - **keeper.css('left','100px');**

The output should look like this

````javascript
keeper.css('left', '100px');
````

You can now add this to the setup method below where you added the
keeper variable 

````javascript
function setup() {
	//get the variables required from the HTML
	keeper = $("#keeper");	
	
	keeper.css('left', '100px');
}
````


Refresh your page and see what happened, congratulations the keeper
danced.


#### Lets commence the game

Ok to start the game we need to complete a couple of actions? How about we
say these actions are
* Setup the positions (eg Goalie)
* Start the keeper moving

As these are two actions we are going to functions for these, so lets create 
our first function called commenceGame.  The aim of this function is
to get our game into the correct mindset/state to start.  This function will
look like so.

````javascript
function commenceGame() {

}
````

Inside this function we will put our setup positions and start keeper 
moving functions.  Refresh your screen and see what you think of your great
work so far.

#### Setup the positions (eg Goalie)

Who things the goalie is in the wrong position? How about we start him in a 
flying position. To get started create the setupHtmlPositions function.  

````javascript
function setupHtmlPositions() {
	
}
````

Now inside that function set the left and top position for the goal keeper. 
To do this use our keeper variable, thanks to JQUERY there is a function
available to style the keeper.  I hope every remembers how we style HTML?
With CSS of course so helpfully the function provided by jquery to style 
on our keeper is called css.  Inside this function we add two parameters
the css property and value. So to set the left position to 0px, the paramater
is 'left' and '0px', just like the CSS ```` left: 0px ````


````javascript
function setupHtmlPositions() {
	keeper.css('top','0px');
	keeper.css('left','0px');
}
````

Now update the commerceGame function to call the setup positions

````javascript
function commenceGame() {
	setupHtmlPositions();
}

//setupHtmlPositions
function setupHtmlPositions() {
	keeper.css('top','0px');
	keeper.css('left','0px');
}

function startKeeper() {
	//keeperWidth + 'px' = 150px
	keeper.css('width',keeperWidth+'px');
	keeper.show();
	moveKeeper();
}

function moveKeeper() {
	var currentPosition = parseInt(keeper.css('left'));
	var newPosition = currentPosition + 5;
	keeper.css('left',newPosition+'px');
	setTimeout(moveKeeper, 2);
}
````



Conclusion
------------

Questions
* What was the z-index used for?
* Why did we put a small white line at the bottom of the sky?
* What is JavaScript?
* What is JQuery?
* What is a variable?
* How do you write a variable?
* What is a function?
* How do you write a function?
* Why did we wait for the page to load before calling a function?
* What was the code which waited for the page to load before calling the function?
* How did we make the goal posts higher?
* Where did we define the keeper variable and how did we do it?
* How did we get the keeper from the HTML page? What was the code?
* How did we get the keeper to move left?