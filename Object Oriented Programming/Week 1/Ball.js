function Ball( documentElement, x, y, diameter ) {
	
	// the element in the HTML document that displays the ball
	var documentElement = documentElement;
	// make sure the element is positioned absolutely
	documentElement.style.position = "absolute";

	// position in pixels, default to (0, 0)
	var x = x || 0; 	// '||' means 'OR', here we're saying use x, y provided
	var y = y || 0; 	// at initialization OR 0, if x, y were not provided

	// diameter (width, height) in pixels, default to 50px
	var diameter = diameter || 50;

	// initialize the documentElement's position and size
	documentElement.style.left = x + "px";
	documentElement.style.top = y + "px";
	documentElement.style.width = diameter + "px";
	documentElement.style.height = diameter + "px";
	
	// public class members
	// XXX: commas after all definitions, except the last one are required; too confusing? prone to error?
	return {
		moveHorizontal: function( pixels ) {
			pixels = pixels || 10;

			// update the ball's horizontal position
			x = x + pixels;
			
			// move the ball horizontally by setting the 'left' CSS style 
			// attribute to the value of 'x' as pixels (e.g. 10px)
			documentElement.style.left = x + "px";
		}, 

		moveVertical: function( pixels ) {
			pixels = pixels || 10;

			// update the ball's vertical position
			y = y + pixels;

			// move the ball vertically by setting the 'top' CSS style 
			// attribute to the value of 'y' as pixels (e.g. 10px)
			documentElement.style.top = y + "px";

		},

		grow: function( pixels ) {
			pixels = pixels || 10;

			// update the diameter
			diameter = diameter + pixels;

			// grow the ball by altering the width and height CSS style
			// attribute of the ball's document element as pixels (e.g. set to 10px)
			documentElement.style.width = diameter + "px";
			documentElement.style.height = diameter + "px";

		},

		shrink: function( pixels ) {
			// shrinking is just growing in the opposite direction!
			this.grow( -pixels );
		}
	};
		
}