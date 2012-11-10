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
* Create the goal box
* Move the goals and add turn them into ? posts
* Show an action on load of page
* Time to make the goalie dance
* Introduce if logic
* Introduce recursion


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

To link the javascript to the page you use the ````html <script> ```` tag with the
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


Conclusion
------------
Hope you guys enjoyed the start of our games course.
