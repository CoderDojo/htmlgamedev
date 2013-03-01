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
* Create your first function
* Link your function to the image
* Create a variable
* Resize the image

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

Finish styling your balloon
-------

First thing we need to style is our balloon div and set it a __width__ of 150, can anyone tell me how to style
this __div__ tag with an __id__ of __balloon__

Yes you are right the __#__ is used to style an specific id

````css
div#balloon {
	width: 150px;
}
````

This has now set the width of the div to 150 dots (px) wide, this is very important for when we decide to blow 
up the balloon. 

Next we are going to style the img tag, and we want every image __width__ to be set to __100%__.  Can anyone tell
me how we are going to style the image tag.  

Yes you are right
* tag name 
* followed by __{}__
* set the width to 100%

````css
img {
	width: 100%;
}

````

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

Link your function to the image
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

Congratulation you have just called your first function from html

Conclusion
---------------
A great start to game development today, I just have a few questions for you to review what you have learnt
* What is JavaScript?
* What was the first tag you put on your html page?
* How do you close a html tag?
* What is the difference between the head and body tag?
* How did we link CSS style.css into our game?
* How did we change the background color?
* How did we link the javascript into our game?
* What did we have to add to the javascript to make it talk to us?
* How did we call a function from the html page?
