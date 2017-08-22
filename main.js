'use strict';

const {app, BrowserWindow} = require("electron");

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: false,
        height: 700,
        width: 370
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
