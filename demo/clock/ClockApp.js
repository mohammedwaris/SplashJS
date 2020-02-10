class ClockApp extends splashjs.display.Sprite {
	
	constructor() {
		super();
		this.englishNumbers = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"];
		this.numbersText = [];
		this.romanNumbers = ["III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "I", "II"];
		this.currentNumber = "english";
		this.secondHand;
		this.minuteHand;
		this.hourHand;
		this.timer;
		
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE,(event) => {
			this.addedToStage(event);
		});
	}

	addedToStage(event) {	
		this.init();
		this.getStage().setColor(splashjs.utils.Color.RED);
		this.setRegXY(this.getWidth()/2, this.getHeight()/2);
		this.setXY(this.getStage().getWidth()/2, this.getStage().getHeight()/2);
	}
		
	init() {
			var bigCircle, smallCircle, length = 150, deg = 0, centerX = 190, centerY = 190;
			var dot, handLength = 175, x, y, i, numText, per, base;
		
			bigCircle = new splashjs.display.Circle(190);
			bigCircle.setFillColor(splashjs.utils.Color.BLACK);
			bigCircle.setXY(0, 0);
			
			smallCircle = new splashjs.display.Circle(170);
			smallCircle.setFillColor(splashjs.utils.Color.WHITE);
			smallCircle.setXY(20, 20);
	
			this.addChild(bigCircle);
			this.addChild(smallCircle);
		
			for(i=0;i<12;i++) {
				
				numText = new splashjs.text.StaticText(this.englishNumbers[i]);
				numText.setFontWeight(splashjs.text.FontWeight.BOLD);
				numText.setFontSize(24);
				numText.setColor(splashjs.utils.Color.BLACK);
				per = Math.sin(deg*(Math.PI/180))*length;
				base = Math.cos(deg*(Math.PI/180))*length;
				x = centerX + base;
				y = centerY + per;

				this.addChild(numText);
				numText.setRegXY(numText.getWidth()/2, numText.getHeight()/2);
			
				numText.setXY(x, y);
				deg += 30;
			
				this.numbersText[i] = numText;
			}
	
	
			this.secondHand = new splashjs.display.Line(handLength);
			this.secondHand.setStrokeColor(splashjs.utils.Color.RED);
			this.secondHand.setStrokeWidth(1);
			this.minuteHand = new splashjs.display.Line(handLength);
			this.minuteHand.setStrokeWidth(4);
			this.hourHand = new splashjs.display.Line(handLength-50);
			this.hourHand.setStrokeWidth(6);
		
			dot = new splashjs.display.Circle(10);
			dot.setStrokeWidth(0);
			dot.setFillColor(splashjs.utils.Color.RED);
	
			this.addChild(this.hourHand);
			this.addChild(this.minuteHand);
			this.addChild(this.secondHand);
			this.addChild(dot);
	
			dot.setRegXY(dot.getWidth()/2, dot.getHeight()/2);
			dot.setXY(centerX, centerY);
	
			this.minuteHand.setRegX(this.minuteHand.getWidth()*0.15);
			this.minuteHand.setRegY(this.minuteHand.getHeight()/2);
			this.minuteHand.setXY(centerX, centerY);
			
			this.hourHand.setRegX(this.minuteHand.getRegX());
			this.hourHand.setRegY(this.hourHand.getHeight()/2);
			this.hourHand.setXY(centerX, centerY);
		
			this.secondHand.setRegX(this.minuteHand.getRegX());
			this.secondHand.setXY(centerX, centerY);
		
			this.timer = new splashjs.utils.Timer(10);
			this.timer.addEventListener(splashjs.events.TimerEvent.TIMER, () => {
				this.start();
			});
			this.timer.start();
		
	}
		
	start() {
			var date, hour, min, sec, milliSec, secHandAngle, minHandAngle, hourHandAngle;
			date = new Date();
			milliSec = date.getMilliseconds();
			sec = date.getSeconds();
			sec = sec + (milliSec/1000);
			min = date.getMinutes();
			min = min + (sec/60);
			hour = date.getHours();
		
			if(hour >= 12) hour -= 12;
			hour = hour + (min/60);
			hourHandAngle = (hour*30)-90;
			this.hourHand.setRotation(hourHandAngle);		
			minHandAngle = (min*6) - 90;
			this.minuteHand.setRotation(minHandAngle);
			secHandAngle = (sec*6) - 90;
			this.secondHand.setRotation(secHandAngle);
		
	}
		
	toggleNumbers() {
		
			if(this.currentNumber == "english") {
				for(var i=0;i<this.numbersText.length;i++) {
					this.numbersText[i].setText(this.romanNumbers[i]);
				}
				this.currentNumber = "roman";
			}else{
				for(var i=0;i<this.numbersText.length;i++) {
					this.numbersText[i].setText(this.englishNumbers[i]);
				}
				this.currentNumber = "english";
			}
	
	}
		
	
	
	
	
}


