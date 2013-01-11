003 Bring Rooney into the Game
===================================

Ok we have a flying goalie, possibly the coolest goalie I you have 
ever seen.  Unlike most Irish goal keepers this guys can fly and 
actually save points.
 

Aim
---------
* 


Game aim
-----------
* Build the penalty sport
* Add the ball
* Display rooney on the screen
* Make rooney run
* Kick the ball

Ok so lets get started.

Build the penalty sport
-------------
How can you penalty shoot game without a spot, well its time to add this to 
our game

To get started let think how we are going to add the penalty spot? Think
we will start with some HTML for the penalty spot

````html
<div id="penaltySpot">
			</div>
````

We have a div what css do we need to display?

````css
div#penaltySpot {
	position: absolute;
	-moz-border-radius: 25px;
	border-radius: 25px;
	background-color: white;
	height: 50px;
	width: 50px;
	top: 530px;
	border: 2px solid black;
	z-index: -100px;
	left: 150px;
}
````

Display the ball
------------

Whats a penalty spot without the ball, its time to a ball to our game finally,
Lets add some HTML for the ball can you give an idea what html 
tags we are going to use?

* div
* img

````html
<div id="ball" >
				<img src="coder.png"/>
			</div>
````

Time to add some style to our ball, lets position it correctly on the
screen.

````css
div#ball {
	position: absolute;
	width: 30px;
	z-index: 100px;
	left: 160px;
	top: 540px;
}
````

Is there anything wrong with our image? 

````css
img {
	width: 100%;
}
````

Lets get rooney into our game
------------
Its time to get our key man into the game and why not get an english
player, gives to goal keeper a chance.  Rooney is one of Machester Unites
greater player of all time so an ideal image.

What HTML should we add for this image

````html
<div id="rooney">
	<img src="roo2.png"/>
</div>			
````

Now we have a massive rooney, whats next? We need to style it

````css
div#rooney {
	position: absolute;
	top: 450px;
	width: 70px;
	left: 300px;
}
````






