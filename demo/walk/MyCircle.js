import splashjs from "./bundle";


export default class MyCircle extends splashjs.display.Circle {
	
		constructor(radius) {
			super(radius);
			
			this.setFillColor(splashjs.utils.Color.YELLOW);
			this.setStrokeColor(splashjs.utils.Color.RED);
			
		}
		
		toString() {
			return "[object MyCircle]";
		}
}
