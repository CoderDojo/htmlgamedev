001 Build the webpage 
===================================

Ever wonder why England never win a penatly shoot out? Its because they
never attended CoderDojo to understand the logic behind a great penality.  

Aim
---------

* What is HTML / CSS
* What is tags
* How to start a HTML page
* Link the css file
* Introduce CSS (tags, class and id styling)
* Putting image into CSS

Game aim
-----------
* Background
* Sky
* Goal posts
* Goal box
* Penalty spot

Ok so lets get started.

What is HTML
-------------
Its the language of the Internet, Hyper Text Markup Language is used by every page you 
see online from facebook to google. This is possible as browsers like Firefox and Chrome 
intrepret this language and displays your content.  You primary use HTML to add
your text, images and layout.

What is CSS
------------
Want you website to look cool then, CSS is the language for you.  Cascading
Style Sheet language styles your pages to make them look amazing.  Its all about
the color and positioning.

What is tags
-----------
Ok who knows what a tag is? Tags are individual parts of the HTML language.
Think what do you see on your webpage? 
* Title
* Images
* Videos

They are all tags, so lets get started a tag, a tag has a name i.e. 
the image tag, is img.  Every element starts with 

How to open tag
'<' tagname '>' 
Close tag with the /
'</' tagname '>'

Sample tag below
````html
<img src="logo.png"></img>
````

Tag rule
--------
We dont like having rules, but we do have one rule in HTML.
__For every tag you open you must close__

How to start a HTML page
-------
To start every page you create you will need the following tags
* html
* head
* body

````html
<html>
	<head> 
	
	</head>
	
	<body>
	
	</body>
</html>
````

Link the css file
----------
The CSS file is where we will put our styling, so create a new file
called style.css and save it in the same folder as your webpage.

Once you have created your file you are now ready to save the file

````html
<head>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
````
Introduce CSS 
----

Lets get started on CSS, lets understand how the CSS maps from your html
code to the style.  There is 3 key ways you can style elements

__Style by tag name__
Style by tag name, ok lets see how we style every h1 tag

````html
<h1> </h1>
````
To style this tag h1 you can use simply use the tag name and add brackets

````css

h1 {
	font-weight: bold;
}

````

__Style by id__

Style by tag name, ok lets see how we style every h1 tag with an id mainTitle

````html
<h1 id="mainTitle"> </h1>
````

To style this tag h1 you can use simply use the tag name followed by a hash "#" and the id value so its

````css

h1#mainTitle {
	font-weight: bold;
}

````


__Style by class__

Style by tag name, ok lets see how we style every h1 tag with an class title

````html
<h1 class="title"> </h1>
````
To style this tag h1 you can use simply use the tag name followed by
dot and the class value so its

````css
h1.title {
	font-weight: bold;
}

````

The main difference between class and id is that, id
should only ever be used ONCE on your page.  While class
is there for styles you want to use more than once.


Lets plant some grass
-----------
Anyone got any ideas how we are going to plant the grass on the screen?

Well we are going to get the background setting for the webpage to handle
this.  To set the background we need to style the body tagc

````css
body {
	background: url(ground.gif);
	margin: 0px;
	color: green;
	padding: 0px;
}
````

Add the sky
-----------
Lets add the sky to our page?  Anyone got any idea how we are going 
to do this?

Well the answer is by a div

````html
<div id="sky">
</div>
````
Hey look here we are following our most important rule, for every tag
we open we close.

````css
div#sky {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 200px;
	background: skyblue;
	border-bottom: 1px solid white;	
	z-index: -100px;
}
````

Build the goal posts
-----------
Lets build the goal posts.

````html
<!-- Shoot area -->
<div id="shootArea">
			<div id="goal">
			</div>
</div>
````

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

div#shootArea {
	position: relative;
	margin-left: auto;
	margin-right: auto;
	width: 350px;
}
````