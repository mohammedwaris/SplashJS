var stage = new splashjs.display.Stage("myDiv", 550, 400);

var image = new splashjs.display.Image("dog.jpg");
//image.setWidth(30);
//image.setRegXY(15, 15);
image.setXY(100, 100);
stage.addChild(image);

var circle = splashjs.display.Shape.createCircle(20);
circle.setRegXY(20, 20);
circle.setXY(200, 200);
circle.setFillColor(splashjs.utils.Color.RED);
stage.addChild(circle);

var circle2 = splashjs.display.Shape.createCircle(20);
circle2.setRegXY(20, 20);
circle2.setXY(300, 100);
circle2.setFillColor(splashjs.utils.Color.YELLOW);
stage.addChild(circle2);

image.addEventListener(splashjs.events.MouseEvent.CLICK, (event) => {
	tr.play(); 
});

var tr = new splashjs.animation.CircularTransition();
tr.setTargetObject(circle);
tr.setEasing(splashjs.animation.easing.Linear.EASE_OUT);
tr.setFromValue(180);
tr.setToValue(360);
tr.setLoopCount(0);
//tr.setDelay(1000);
tr.setAutoReverse(true);
tr.setDuration(2000);
tr.setRadius(100);






