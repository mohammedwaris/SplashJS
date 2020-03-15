const { app, BrowserWindow } = require('deskgap');

app.once('ready', () => {
    const win = new BrowserWindow();
    win.loadURL('https://html5test.com');
});