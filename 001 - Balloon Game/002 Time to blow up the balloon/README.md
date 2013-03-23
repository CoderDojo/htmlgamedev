002 Balloon Game - HTML Course @ CoderDojo DCU
===================================

I hope everyone enjoyed this week, this is the start of our adventure
to HTML games.

Aim
---------
This week is all about blowing up and exploding the balloon.  This will mean we need to focus on the
following programming concepts

* functions
* calling functions from HTML
* variables 

Lets setup the game
----------
Ok you have just setup your first function from the HTML code and its now time to use that function.  We
mentioned earlier that the HTML code needs to be completed loaded before calling the loadGame() function.  The
main reason for this is that all the elements in the HTML need to be available for the javascript to access.

Lets think about this, we said earlier that JavaScipt is the cool language that makes thinks move and hide on the 
screen, in this scenario would you agree JavaScript needs to access the HTML tags to make them move?  Remember the 
position and display of these HTML tag is usually handled in the CSS.  By making the JavaScript access HTML tags we 
can change the properties of these tags, thus making them move easily.   

Our first function is __loadGame()__, what do you think this function will be used for? Yes you are right
its going to load our game.  What needs to be loaded?  Its time to discuss variables

##### Variables

Variables represent something or value we need to use in our JavaScript code, the easiest variables you should think about are
something on the screen we need to change?  Is there a variable that we are trying to blow up here?  Yes you are right
the balloon.  The balloon is a variable, once a variable we can make that variable (balloon) increase in size with
every blow?

So its time to create your first variable and its really easy to do
* start with the word __var__
* then put the variable name (the name should tell us what the variable is) eg __balloon__
* lets end our line with semicolan __;__

Its now time to add a variable to the very top of your JavaScript file
````javascript
var balloon;
````

We always add variables to the very top of the page when you open your JavaScript file you can quickly and easily 
see all your variables in the one place.  If you do this in every JavaScript file you create, it will make your 
life easier as you will know where you have created your variables

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

__NOTE__
If we create variables at the top of file outside functions means these variables can be used anywhere in the javascript.


You file should now look like this.

````javascript

var balloon;

function loadGame() {
		
}

````

Now that we have added the balloon variable to our javascript, its now time get that variable from HTML code.  To 
do this you can use ````document.getElementById(tagId) ````

The __document__ variable is provided by JavaScript to you automatically, this means the web page, so every time you use the document
variable you are trying to get some information including tags from our webpage.

The __getElementById()__ is a function available on the document object that gets the HTML for a given id, can you go back to 
the HTML code and tell me what is the id of the div we are using for the balloon?

Ok are you back? Yes you are right its id is __"balloon"__

````html
<div id="balloon">
			<img src="coder.png"/>
		</div>
````

Now inside the __loadGame()__ function we are going to get the balloon from the HTML code and assign it to the balloon 
variable.  The code we all will now look like this

````javascript
balloon = document.getElementById("balloon");
````

With __balloon__ equaling the id from the div tag.  Our __loadGame()__ function should now look like

````javascript

function loadGame() {
	balloon = document.getElementById("balloon");
}
````

Set the start balloon size
--------
As we are going to be change the size of the balloon we need to set an start size that we can increase.  Can you
 remember we set the width in the CSS which is our style.  Well javascript allows us to change the CSS to and this
 can be done by use the __variable name__ then __dot__ then __style__ then the css property in this case __width__.  This
 can then be set to a value say "150px".  Anyone remember what __px__ is?

Our new code is going to look like this and we need to add it to the __loadGame__ function

````javascript
balloon.style.width = "150px";
````
The __loadGame__ function should now look like this

````javascipt

function loadGame() {
		balloon = document.getElementById("balloon");
		balloon.style.width = "150px"
}
````

Time to blow the balloon
----------

Great we have created a variable called __balloon__ which is the __div__ balloon from our HTML code.  Its now time
to blow this balloon up.  

Are you all ok to blow up the balloon would you agree clicking on the balloon image blows it up?  Great agreed then lets 
start coding this.  Are you all agreed that we are going to use the variable balloon to increase its size to make
the balloon bigger?  

To make it bigger we are going to need to create another function, so its a great time to recap our function knowledge.  
What is a function? Yes you are right, its a action that should only do __ONE THING__.  So lets get started what should
we call our function to blow up the balloon.  You said blow? yes you right, its a great name as it represents what
this function is doing.  So lets create this function, what is the first thing we need to do?

* start with word __function__
* then add the function name __blow__
* now put round bracked here as no parameters __blow()__
* add brackets around our function __{ }__

Your new function in __balloon.js__ should look like this

````javascript
function blow() {

}
````

Our full balloon.js should now look like

````javascipt

var balloon;

function loadGame() {
		balloon = document.getElementById("balloon");
		balloon.style.width = "150px"
}

function blow() {

}

````

Now we can go to the HTML code and add the blow function to our balloon image.  On the
__img__ tag we have an __onclick__ property we can set to one of your JavaScript functions.   


So lets go back to __index.html__ and at our __img__ tag add the __onclick__ property setting
it equal to __blow()__

Your image tag for the balloon should now look like this.
````html
<div id="balloon">
			<img src="coder.png" onclick="blow()" />
		</div>
```` 

How about we test the blow function by make it talk to us?  Can you remember how we get JavaScript to talk, we seen
this last week? Yes you are right you can use the __alert__ function.  Move back to the __balloon.js__ and lets add
an __alert__ to the blow function


````javascript
function blow() {
	alert('Blowing up the balloon!');
}

````
Now refresh you browser and check out your good work? Did the new message appear? No why? 

__YOU NEED TO CLICK ON THE IMAGE. ARE WE NOW BLOWING THE BALLOON? GREAT__

Get the balloon size
----------

We are now calling the __blow__ function on click of the balloon, but its not yet changing the size, we now need to achieve
this by adding some code to the __blow()__ function

To get started remove the alert message from the __blow()__ function, so it should now look like this again.  

````javascript
function blow() {

}

````

To increase the balloon size would you agree we need to get the current balloon size? Yes we need this so we can add 50 to its 
size every time you click on the balloon.  To do this we are going to use need to use the balloon __balloon.style.width__ property. To
call this you need to use the __variable name__ then a __dot__ then __balloon.style.width__ so it should look like this ```` balloon.offsetWidth ````

Lets get the blow function to talk to us and tell what the current width is.  

````javascript
	alert(balloon.style.width);
````

You blow function should now look like 

````javascript
function blow() {
	alert(balloon.style.width);
}

````

Its time to refresh your browser and click on the image, what size did everyone get?  Did __150px__ appear
on everyones screen? Is there anything wrong with this value if we want to add 50? Yes of course their is huge problem,
the value has got __px__ at the end of it, this is not a number.  To make it a number we need to put a JavaScript bonus 
function around it called __parseInt()__ this function will strip the __px__ and give us __150__ instead.  You would all 
agree that its now easier to add __50__ to __150__.

Now update your code adding the __parseInt__ function around the __balloon.style.width__ value

````javascript
function blow() {
	alert(parseInt(balloon.style.width));
}

````

Refresh you browser click on the balloon and see is __150__ being returned without px.   Great its now time
to create our second variable for the balloon width.   We will now remove the __alert__ in __blow__ function
and replace it with a variable called with.  Do you remember how to create a variable?
* start with the word __var__ and a space
* then add the __varaiable name__ (width in this scenario)

To create a width variable equal to the balloon current width the code would look like this.

````javascript
	//get the current size
	var width = parseInt(balloon.style.width);
````

Our __blow__ function should now look like this

````javascript
function blow() {
	var width = parseInt(balloon.style.width);
}

````

__NOTE__
As the __width__ variable is created inside this function, it can only be access inside this blow function 
and not outside it.

Make the balloon bigger
--------

To get started with this, what number do we want to increase the balloon size? Pick a number? I am going with 50.  But
let me think the number 50 actually means something, is the increaseBy amount for every blow.  I think this an ideal
candidate for a new global variable in __balloon.js__.  So lets go up the top of our page and add this new variable.  Remember how
to create a new variable?
* start with the word __var__ and a space
* then add the __varaiable name__ (width in this increaseBy)
* add equals __=__ and set it to __50__
* finish with semicolan __;__

````javascript
var increaseBy = 50;
````

Your __balloon.js__ should now look like this.

````javascript
var balloon;
var increaseBy;

function loadGame() {
		balloon = document.getElementById("balloon");
		
		balloon.style.width = "150px"
}

function blow() {
	var width = parseInt(balloon.style.width);
}
````

Now that we have a new variable to increase the balloon size, its time to get stuck in an increase the balloon size
so go back to the __blow__ function.  

Lets start with bit of maths and set the __width__ equal to __width__ plus __increaseBy__, so we are saying
````javascript
 width = width + increaseBy; 
 ````
Your blow function should now look like this

````javascript
function blow() {
	var width = parseInt(balloon.style.width);
	width = width + increaseBy; 
}
```` 
 
Great we have increased the width, now refresh your browsers and click on the balloon, is it increasing? No

The reason its now increasing is that we have not updated the __balloon__ with the new __width__ value.  So lets
do that in the __blow__ function.  This time we need to put the __px__ back into the width value, this can be done by adding 
```` + 'px' ````

To set the balloon width use

````javascript
balloon.style.width = width + 'px';
````

Now add this to the blow function

````javascript
function blow() {
	var width = parseInt(balloon.style.width);
	width = width + increaseBy; 
	balloon.style.width = width + 'px';
}
```` 

Stop the balloon growing 
--------
Great are balloon is now huge but who feels its too big? Its time 
to put a stop to this.  You are about to learn a really
exciting element in coding known as logic, this allows us
run code under a defined condition.

So can you think of a condition we need? How about one 
where we set the max number of blows you can blow the 
balloon.

To do this what do you need, how about a variable 
* for the number to tell us how many times we have blown the balloon
__AND__
* for the max number of times the ball can be blown

We will create these variables on the top of __balloon.js__

````javascript 
var currentBlow = 0;
var maxBlows = 10;
````

__balloon.js__ should now look like this with our two need variables

````javascript

var balloon;
var increaseBy = 50;
var currentBlow = 0;
var maxBlows = 10;

function loadGame() {
	balloon = document.getElementById("balloon");
	balloon.style.width = "150px"
}

function blow() {
	var width = parseInt(balloon.style.width);
	width = width + increaseBy; 
	balloon.style.width = width;
}

````

Great lets update the __blow__ function by stopping it when
we get to 10 blows

##### if statements
if statements in code allow use to execute only a small set of code
under certain conditions we define after the if statement.

In our example here we want the to say __"if the current
blow is less than 10 then blow"__ This can 
be done with the following if statement

````javascript
if(currentBlow < maxBlows) {
````

if statements start with if then round backets with conditions inside 
them the code we want to run when this condition is met is inside
the brackets { }

So lets add this to the blow function.  We want to add
this condition around all of the code, as once we have blown
10 times.  We __don't__ need to get the width, increase the size or 
set a new width.

__NOTE__
Can you remember what we put at the end of each line? Yes you are right __;__

````javascript
	
function blow() {
	if(currentBlow < maxBlows) {
		var width = parseInt(balloon.style.width);
		width = width + increaseBy; 
		balloon.style.width = width;
	}
}

````

Now refresh your browser and does the balloon stop at 10? __No__ why?
Does the currentBlow ever get bigger than 0? We need to add one every time. So
lets jump into some maths,

````javascript
currentBlow = currentBlow + 1;
````

Add this above our __if__ condition like so

````javascript
	
function blow() {
	currentBlow = currentBlow + 1;
	if(currentBlow < maxBlows) {
		var width = parseInt(balloon.style.width);
		width = width + increaseBy; 
		balloon.style.width = width;
	}
}

````

Refresh your browser and watch the magic, is everyones balloon now stopping at 10 blows? Did everyone count
to 10 ok, some times it easy to lose count.	

##### else statements
__if__ statements run if condition is met, but if it is not then we can
call an __else__ statement.  This means only the code inside the __if__ or the __else__
will run at each blow.  The __else__ must come immediately after the __if__ statements closing bracket __}__

How about when we reach 10 blows the balloon disappears?

In simple __else__ statement we only use __else__ followed by bracket __{__ like this

````javascript
else {

}
````

Your blow function should now look like this.

````javascript	
function blow() {
	currentBlow = currentBlow + 1;
	if(currentBlow < maxBlows) {
		var width = parseInt(balloon.style.width);
		width = width + increaseBy; 
		balloon.style.width = width;
	} else {
		
	}
}
````

Refresh your browser blow and see if it the balloon disappears.

Lets add this to the blow function and see what happens, nothing? why? Ye we have not told the balloon to 
disappear, so lets first print a message on the screen using ```` alert ````

````javascript
else {
	alert('Hey I am in the else statement and you have blown the balloon' + currentBlow);
}
````

#### Make the balloon disappear

You have a great __else__ statement and you now want to hide the balloon for 
when it blows.  To do this we are going to change the style
with the java script using ```` display```` property.  So to set
the display we

* start with __variable__ name ```` balloon ````
* then add __dot__ and ````style```` to change the style of the element
* add __dot__ ad property we want to change ````display ```
* set the value __equal__ to ````none````

````javascript
balloon.style.display = 'none';
````

Now add this to your ```` else ```` statement and refresh your browser.


````javascript	
function blow() {
	currentBlow = currentBlow + 1;
	if(currentBlow < maxBlows) {
		var width = parseInt(balloon.style.width);
		width = width + increaseBy; 
		balloon.style.width = width;
	} else {
		balloon.style.display = 'none';
	}
}
````


## Add a counter for blows

Lets put a cool counter on our webpage.  So open __index.html__

So we want to add a new section what html tag do we start with. Create a new __div__ and give it
and __id__ of __blowCounter__ 

````html
<div id="blowCounter">
	<span id="count">0</span>
</div>
````

Add this inside the __body__ tag below the __balloon__ __div__

````html
<body onload="loadGame()">
		<h1>CoderDojo Balloon Game - Blow it Up </h1>
		
		<div id="balloon" >
			<img src="coder.png" onclick="blow()"/>
		</div>
		
		<div id="blowCounter">
			<span id="count">0</span>
		</div>
	
	</body>
````

Refresh and take a look is there something wrong with our counter?
Does it look cool enough for CoderDojo?

How about we style this, what file should we open? Ye __style.css__ So lets
think how we start? We want to style the __div__

* Start with __tag name__
* Then put a __hash__
* Now the __id__
* Then put brackets around it __{ }__

````css
div#blowCounter {
		
}
````

#### Move it to the right hand side


````css
div#blowCounter {
	right: 10px;
}
````


#### Move it to the right hand side


````css
div#blowCounter {
	right: 10px;
}
````

Now refresh, has it moved right? How do we set absolute positions?



#### Make the font bigger

Set the __font-size__ to 60 pixels

````css
div#blowCounter {
	right: 10px;
	font-size: 60px;
}
````


Questions
-------

Great session today with you now creating variables and function with ease, we learnt today how to blow up the balloon.  

* What is a function?
* What is a variable?
* Why do we wait until the HTML code has loaded before calling the JavaScript functions?
* How do you call a JavaScript function from your HTML when the page loads?
* How do you call a JavaScript function when you click an image?
* How do you get the width in JavaScript of an HTML variable?
* What does parseInt function do?
* How did we get the width of the balloon in JavaScript?
* How did we increase the width of the balloon?


