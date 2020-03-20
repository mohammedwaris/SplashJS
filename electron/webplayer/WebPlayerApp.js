const { app } = require('electron');
const WebPlayer = require('./WebPlayer');

var webPlayer;

app.on('ready', () => {
	webPlayer = new WebPlayer();
	webPlayer.show();
});