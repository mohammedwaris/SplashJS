class ConsoleWindow {
	
	constructor(myWin) {
		this.win = myWin;
		
		//console.log("ConsoleWindow object is created");
	}

	sayHello() {
		//console.log("Hello from " + this.win);
	}

	error(msg) {
		this.win.window.document.write("<p style='color:red;'>" + msg + "</p>");
	}

	log(msg) {
		this.win.window.document.write("<p style='color:black;'>" + msg + "</p>");
	}

}

module.exports = {ConsoleWindow};