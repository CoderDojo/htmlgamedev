function animatedObject( imageName, width, height ) {
	this.imgName = imageName;
	this.hOffset = 4;
	this.vOffset = 4;
	
	this.left = 0;
	this.top = 0;
	
	this.imageObject = document.createElement("img");
	this.imageObject.src = imageName;
	this.imageObject.width = width;
	this.imageObject.height = height;
	this.imageObject.style.position = "absolute";
	
	this.setPosition = function(xPos, yPos) {
		this.left = xPos;
		this.top = yPos;
		if ( this.imageObject.parentElement != null ) {
			this.imageObject.style.left = this.imageObject.parentElement.offsetLeft + xPos + "px";
			this.imageObject.style.top = this.imageObject.parentElement.offsetTop + yPos + "px";
		}
	}
	
	this.get
	
	this.shouldChangeHDir = function() {
		var changeDir = false;
		if ( this.left + this.hOffset + this.imageObject.clientWidth > this.imageObject.parentElement.clientWidth ) 
			changeDir = true;
		else if ( this.left + this.hOffset < 0 )
			changeDir = true;
		return changeDir;
	}

	this.shouldChangeVDir = function() {
		var changeDir = false;
		if ( this.top + this.vOffset + this.imageObject.clientHeight > this.imageObject.parentElement.clientHeight ) 
			changeDir = true;
		else if ( this.top + this.hOffset < 0 )
			changeDir = true;
		return changeDir;
	}
	
	this.animate = function() {
		if ( this.shouldChangeHDir() ) this.hOffset = -this.hOffset;
		if ( this.shouldChangeVDir() ) this.vOffset = -this.vOffset;
		
		this.setPosition( this.left + this.hOffset, this.top + this.vOffset );
	}
}