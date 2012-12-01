Rudi Vaders - HTML Game Development Week 2
=========================

Welcome to CoderDojo @ IBM

## Programming learning objectives
* Add sound to the game
* Learn more about functions
* If logic 
* Sending a paramater to a function

## Game aims
* Make the dog bark
* Position the bone for firing
* Check if you have hit the ball
* Handle the game over

## Time to make some noise

````javascript
function bark() {
	var sound = $('<embed autoplay="true" height="0" width="0" />');
	sound.attr('src', 'dog-bark1.mp3');
	$('body').append(sound);
}
````

## Position the bone for launch

````javascript
function positionBone() {
	var rudiLeft = rudi.css('left');
	var rudiTop = rudi.css('top');
	bone.css('left', rudiLeft);
  	bone.css('top', rudiTop);
}
````

##Move the bone

````javascript
function moveBone() {
	var currentBoneTopPosition = parseInt(bone.css('top'));
		
	if(isBonePassTopOfScreen(currentBoneTopPosition)) {
		boneFinished();
	} else if(isBallHit(reggaeBall)|| isBallHit(allienBall)) {
		updateScore(hitPoints);
		boneFinished();
	} else {
		currentBoneTopPosition = currentBoneTopPosition - 5;
		bone.css('top', currentBoneTopPosition+'px');
		setTimeout(moveBone,1);
	}
}
````
## Is the ball hit

````javascript
function isBallHit(ball) {
	
	if(ball.is(':visible')) {
		var ballLeft = getBallLeftPosition(ball);
		var ballTop = getBallTopPosition(ball);
		var ballRight = ballLeft + getBallWidth(ball);
 		var ballBottom = ballTop + getBallWidth(ball);

 		var boneTop = parseInt(bone.css('top'));
 		var boneLeft = parseInt(bone.css('left'));
	
   		if(boneLeft >= ballLeft && boneLeft <= ballRight &&
 			boneTop >= ballTop && boneTop <= ballBottom) {
	
 			ball.hide();
 			return true;	
 		}
 	}
	return false;
}
````

## Handle game over

````javascript
function boneFinished() {
	boneInAction = false;
	bone.hide();
	
	if(isGameOver() ) {
		showWelcome();
		var currentHighScore = parseInt(highestScore.html());
 		if(currentHighScore < score) {
			handleHighestScore();
		}
	}	
}
````
