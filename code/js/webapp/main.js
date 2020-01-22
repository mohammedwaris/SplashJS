define(function(require) {
	var ClockApp = require("./ClockApp");
	var stage = new splashjs.display.Stage("myDiv", 550, 400);
	stage.addChild(new ClockApp());
	//console.log(splashjs.display.Stage);
});