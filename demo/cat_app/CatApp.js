class CatApp extends splashjs.display.Sprite {

	constructor() {
		super();
		this.circle1 = new splashjs.display.Circle(50);
		this.circle1.setX(0);
		this.circle1.setFillColor(splashjs.utils.Color.RED);
		this.circle1.setName("circle1");

		
	
		this.addChild(this.circle1);
		console.error("Error");
		this.addEventListener(splashjs.events.MouseEvent.CLICK, (event) => { this.clicked(event); });
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});
	}
	
	addedToStage(event) {
		
	}
	
	clicked(event) {
		
	}
	
	
}





