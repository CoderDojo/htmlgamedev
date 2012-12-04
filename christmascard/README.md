CoderDojo Merry Christmas
==========================

Ho, Ho, Ho, Merry Christmas to you all.  Lets take the excitement and fun
around Christmas and develop your very own customised CoderDojo Christmas Card.

## Programming learning objectives
* Variables
* Functions
* Functions with parameters
* Arrays
* 2D arrays
* if and else logic
* Recursive
* Add html from JavaScript
* for loops

## Game aims
* Build the web page
	* Background
	* Ground
	* Add lights
	* Merry Christmas message
* Build the tree
* Add the sleigh and fly across the screen
* Drop the present
* Let it snow

Well alot to do so lets get started.

## Build the web page

How do we start every webpage? Lets see how much you know can you add

Start by creating the necessary files in a folder called Christmas on 
your Desktop, its just easy to find it there

* index.html
* style.css
* christmas.js

Ok jump into into your html code on index.html and write the followign tags
* html tags
* head tag
* body tag
* link the css (style.css)
* link the javascript (christmas.js)

````html
<html>
	<head>
		<title>CoderDojo DCU Merry Christmas </title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script type="text/javascript" src="christmas.js"></script>
	</head>
	
	<body>
	</body>
	
</html>
````

### Time to add jquery

Want to use the coolest web framework out there? Well we do its alot of
fun and makes our game development easier.  Here you will need to add 
jquery.js just like you added christmas.js

````html

	<script type="text/javascript" src="jquery.js"></script>
````

You will need to add jquery.js to your christmas folder from https://raw.github.com/CoderDojo/htmlgamedev/master/christmascard/jquery.js

Now add it inside your head tags like below

````html
<html>
	<head>
		<title>CoderDojo DCU Merry Christmas </title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script type="text/javascript" src="christmas.js"></script>
		<script type="text/javascript" src="jquery.js"></script>
	</head>
	
	<body>
	</body>
	
</html>
````