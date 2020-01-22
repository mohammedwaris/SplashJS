var app = splash.getApplication();
var primaryStage = app.createStage("myDiv", 600, 400);
primaryStage.addEventListener(EventName.STAGE_READY, stageReady);
primaryStage.addEventListener(EventName.CLICK, stageClicked);
primaryStage.setColor(Color.TOMATO);

primaryStage.setX(20);


console.log("Heelo");


function selected(event) {
	
}

function cancelled(event) {
	console.log("cancelled");
}

function stageReady(event) {
	
}

function stageClicked(event) {
	
}