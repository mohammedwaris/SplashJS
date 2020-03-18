class Log {
	static error(msg) {
		console.error(msg);
	}
	
	static warning(msg) {
		console.log(msg);
	}
}

module.exports = Log;