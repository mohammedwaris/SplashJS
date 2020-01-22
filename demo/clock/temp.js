class ClockApp extends Sprite {
	
	constructor() {
		super();
		this.clock = new js.Clock();
		this.button = new Button("Toggle");
		this.addEventListener(EventName.ADDED_TO_STAGE, (event) => {
			this.addedToStage();
		});
		this.button.addEventListener(EventName.CLICK, (event) => { 
			this.toggleButtonClicked(); 
		});
	}
	
	addedToStage(event) {
		var stage = this.getStage();
		stage.setColor(Color.TOMATO);
		this.addChild(this.clock);
		this.addChild(this.button);
		this.button.setXY(50, 50);
		this.clock.setSize(100, 100);
		this.clock.setX((this.getStage().getWidth() - this.clock.getWidth())/2);
		this.clock.setY((this.getStage().getHeight() - this.clock.getHeight())/2);
	}
	
	toggleButtonClicked(event) {
		this.clock.toggleNumbers();
	}
	
}