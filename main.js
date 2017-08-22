'use strict';

//var app = require('app');
//var BrowserWindow = require('browser-window');

//const {app} = require('electron');
//const {BrowserWindow} = require('electron');

const {app, BrowserWindow} = require("electron");

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
