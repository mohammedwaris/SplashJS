var app = splash.getApplication();
var primaryStage = app.createStage("myDiv", 600, 400);
primaryStage.addEventListener(splash.EventName.STAGE_READY, onStageReady);

function onStageReady() {
	var clock;
	primaryStage.setColor(splash.Color.TOMATO);
	clock = new splash.Sprite("clockSprite");
	primaryStage.addChild(clock);

//myClock.addEventListener(splash.EventName.ADDED_TO_STAGE, function() {
	
	
	var bigCircle = new splash.Circle(190);

		var smallCircle = new splash.Circle(170);
		smallCircle.setFillColor(splash.Color.WHITE);
		smallCircle.setX(20);
		smallCircle.setY(20);
	
		clock.addChild(bigCircle);
		clock.addChild(smallCircle);

		var numText = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"];
		//let numText = ["III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "I", "II"];
		var length = 150;
		var deg = 0;
		var centerX = 190;
		var centerY = 190;
		for(var i=0;i<12;i++) {
			var x,y;
			var txt = new splash.StaticText(numText[i]);
			txt.setColor(splash.Color.BLACK);
			var per = Math.sin(deg*(Math.PI/180))*length;
			var base = Math.cos(deg*(Math.PI/180))*length;
			x = centerX + base;
			y = centerY + per;

			
			clock.addChild(txt);
			//console.log(txt.getWidth());
			txt.setRegX(txt.getWidth()/2);
			txt.setRegY(txt.getHeight()/2);
			
		
			txt.setX(x);
			txt.setY(y);
			deg += 30;
		}
	
	
		var secondHand = new splash.Line(length);
		secondHand.setStrokeColor(splash.Color.RED);
		secondHand.setStrokeWidth(1);
		var minuteHand = new splash.Line(length);
		minuteHand.setStrokeWidth(4);
		var hourHand = new splash.Line(length-30);
		hourHand.setStrokeWidth(6);
		
		
		
	
		var dot = new splash.Circle(5);
		dot.setStrokeWidth(0);
		dot.setFillColor(splash.Color.RED);
	
	
		clock.addChild(hourHand);
		clock.addChild(minuteHand);
		clock.addChild(secondHand);
		clock.addChild(dot);
	
		dot.setRegXY(dot.getWidth()/2, dot.getHeight()/2);
		dot.setXY(centerX, centerY);
	
		minuteHand.setXY(centerX, centerY);
		minuteHand.setRegY(minuteHand.getHeight()/2);
		console.log(minuteHand.getHeight());
		
		hourHand.setRegY(hourHand.getHeight()/2);
		hourHand.setXY(centerX, centerY);
		
		
		secondHand.setXY(centerX, centerY);
		
		var date = new Date();
		var hour = date.getHours();
		var min = date.getMinutes();
		if(hour >= 12) hour -= 12;
		hour = hour + (min/60);
		
		var hourHandAngle = (Math.abs(hour-3) * 30);
		//console.log(hour + " " + hourHandAngle);
		hourHand.setRotation(hourHandAngle);
		
		
		var minHandAngle = ((min-15) * 6);
		//console.log(min + " " + minHandAngle);
		minuteHand.setRotation(minHandAngle);
		
		var sec = date.getSeconds();
		var secHandAngle = ((sec-15) * 6);
		//console.log(min + " " + minHandAngle);
		secondHand.setRotation(secHandAngle);
		
		
		var timer = new splash.Timer(1000);
		timer.addEventListener(splash.EventName.TIMER, function(event) {
			secondHand.setRotation(secondHand.getRotation() + 1);
			sec += 1;
			if(sec >= 59) {
				minuteHand.setRotation(minuteHand.getRotation() + 1);
				sec = 0;
				min += 1;
				if(min >= 59) {
					hourHand.setRotation(hourHand.getRotation() + 1);
					min = 0;
				}
			}
				
		});
		timer.start();
		/*setInterval(function() {
			
		}, 1000);*/
		
		//console.log(Date);
		
		clock.setRegXY(clock.getWidth()/2, clock.getHeight()/2);
		clock.setX(primaryStage.getWidth()/2);
		clock.setY(primaryStage.getHeight()/2);
		
		
	
}



	

	



		
		
	
		
	
		

