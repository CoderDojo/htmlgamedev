010 Intro to Animation - HTML Course @ CoderDojo DCU
===================================

I hope everyone enjoyed this week, this is the start of our adventure
to HTML games.

Aim
---------

This week its all about animation, this will provide us with the basics
we need to build really cool HTML Games.  To start with animation we 
need to expand our minds to a new language called JavaScript.

All webpages you use are built using one of three languages and you have already
learnt two of them HTML and CSS. 
* HTML is the language for displaying content on the Internet.
* CSS is the language we used to style our HTML

JavaScript
-----
JavaScript is a language that will allow us to add movement and excitment
to our webpage.

This week the aims are:
* To animate an image, that will grow on click

To do this we will need to
* Create a new page with image on it
* Create a new JavaScript file
* Create a variable
* Create your first function on page load
* Link your function to the image
* Resize the image
* Add the counter
* A boom to the balloon
* Add random variable
* Add tie button	

This week are we are introducing two new concepts that live at the core
of every language.  These principles are
* Functions
* Variables
So keep an eye out for these and we will see more from them over our next
few weeks.

Create a new page with image on it
----
To get started its your turn
* Create a new folder
* Add an new webpage called index.html
* Add a stylesheet and background to the webpage
* Add a image to your webpage - say the coderdojo logo
* Make sure your div has an id of balloon

Ok maybe its time to see if you are right
````html
<html>
	<head>
		<title>CoderDojo DCU - Balloon Game</title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
	</head>
	
	<body>
		<h1>CoderDojo Balloon Game - Blow it Up </h1>
		
		<div id="balloon">
			<img src="coder.png"/>
		</div>
	
	</body>
</html>
````

Create a new JavaScript file
----
Now you will need to create a new file for your JavaScript code.  JavaScript
files are stored in .js files.  So lets get started create a new blank file in your
current folder called balloon.js

Add the Javascript to your HTML file
-----

Its now time to add your javascript file to the HTML, just like we seen in with CSS
we need to add a relationship between the HTML and Javascript files.  This is done
using the ````<script>```` tag.  

__NOTE__
Inside the script tag you use the src property to set your Javascript file. Its very important
the file name is exactly the same (remember same case) and finished with __.js__

The script tag should look like this including the type of "text/javascript"
````html
	<script type="text/javascript" src="balloon.js"></script>
````

You add this tag inside you ````<head>```` tag and your HTML should now look like this.

````html
<html>
	<head>
		<title>CoderDojo DCU - Balloon Game</title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script type="text/javascript" src="balloon.js"></script>
	</head>
	
	<body>
		<h1>CoderDojo Balloon Game - Blow it Up </h1>
		
		<div id="balloon">
			<img src="coder.png"/>
		</div>
	</body>
</html>
````

Time to get the JavaScript talking to you
----
A great way to start every language is to get that language talking to you.  This idea is known as "Hello World" and 
lets introduce you to your first hello world with JavaScript.  So lets open balloon.js and add the following code


````javascript
alert('Hello CoderDojoDCU');
````
Change the message from Hello CoderDojoDCU to your own name, make sure its inside the single quotes __'__ though and then
refresh your browser, congratulations you have written your first line of JavaScript.  This is the start
of your amazing programming adventure.

##### alert
alert(text) is a function provided by JavaScript, this puts a message on to your screen.  
* text is a string that must have a __"__ or single __'__ quote around it at both ends.
* each line must finish with a semi colan __;__

Ok delete the alert and its time we jump into some serious coding

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
function loadGame() {

}
````

Link a function to the start of the game
-----
Now that you have created your first function you now need to add the method 
to the html using the function name.  We want to set a standard image size
when the balloon starts.  Did you know you can call javascript from your HTML code.  
Well its time to start.

One place you can call JavaScript is when the html page is fully displayed in your browser.
To do this you need to add __onload__ and your fuction name

````html
<body onload="loadGame()">
````

So lets go to balloon.js and add our new function

````javascript
function loadGame() {
	
}

````

Great we have a new function its time we started to put some code inside it.

Variables
---------

A variable represents a value you use in your game, something that
will move, change or hold a value such as a number.  So can anyone
come up with something in our game that will change?  Yes of course the
balloon
* Balloon

Would you all agree we need to change the balloon size during our game? 
Well then to do this it must be a variable.

#### Create a variable

To create a variable you
* Start with the word ```` var`````
* Then you put a space and the variable name ```` var balloon ````
* Finish with a semicolon ```` var balloon; ````

At the top of __balloon.js__ add the variable for the balloon 

````javascript
var balloon;
````

````javascript
function loadGame() {
	balloon = document.getElementById("balloon");
	balloon.style.width = "50px";	
	count = document.getElementById("count");	
}

````


Style the blow counter
--------

Currently when we click on the balloon we see our blow counter move 
when the balloon moves too, this really does not look great so today 
we are going to get started with moving styling the balloon counter.

Let's review our blow counter html

````html
<div id="blowCounter">
			<h3 id="count">0</h3>
		</div>
````

To get started how do we link this __div__ to our css? Yes
* tag name __div__
* hash used to match id __#__
* And then the id value __blowCounter__

So open style.css and add the following style

````css
div#blowCounter {

}
````

Great we have just added our style for the __blowCounter__.

#### Position the counter so it does not move

Lets move the box up to the top right hand side of the screen.  To
do this we need to add 
* position
* right
* top

````css
div#blowCounter {
	position: absolute;
	right: 20px;
	top: 20px;
}
````

Add these values refresh your page and lets see what happens? When
you blow the balloon does the zero value move?

#### Change the font style

Now we have positioned the blow counter correctly its time to make it 
look good.  Lets start by adding some color.  Can you remember how to add
color to css?  Real hit in my misspelling in the question.

````css
color: orange;
```` 

How about centering the text too?

````css
text-align: center;
````

So lets add this to our current css for __blowCounter__

````css
div#blowCounter {
	position: absolute;
	right: 20px;
	top: 20px;
	color: orange;
}
````

Refresh you browser and check this out.  Now how about a new 
font-size, pick a number? I like 40, you choose your own number.  We
use __font-size__ to set this value. 

````css
font-size: 40px;
````

Refresh you browser and what do you think.

#### Style the blowCounter area

I think we could do better, how about making the area around the 
blowCounter number cool too.  So lets
* Add background
* Add border
* Set height and width

````css
div#blowCounter {
	position: absolute;
	right: 20px;
	top: 20px;
	font-size: 40px;	
	background: white;
	border: solid thin yellow;
	color: orange;
 	height: 100px;
 	width: 200px;
 	text-align: center;
}

h3 {
	margin-top: 0px;
	margin-bottom: 0px;
}
````

Course material for 20th April
-----
* Start with styling blowCounter as above refresh at every point
* Add the blowAttempts __span__ and the __br__
* Increment the count value on screen
````javscript
	count.innerHTML = currentBlow;
````
* Now add the __BOOM__ image to html (why is it still there?)
* Bring the __BOOM__ image into the javascript code with variable
* No change? hide the boom image in the loadGame function
* Now blow balloon up and it disappears? but no boom
* Add the boom display to else condition in the __blow__ function
* Great now we have boom
* But fun does not stop there lets add some __random__ inside the loadGame function
````javascript
boom.style.display="block";
````
* Add the tie button in html and css
* Add the code for the tie button


