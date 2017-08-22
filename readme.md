# Accompanying repository for the Electron guide

![Sound Machine](https://rawgithub.com/bojzi/sound-machine/master/sketch/sound-machine.png)

Barebones package.json:
sets up the name and version of the application,
lets Electron know which script the main process is going to run (main.js) and
sets up a useful shortcut — an npm script to run the application easily by running “npm start” in your CLI (terminal or command prompt).


The app module controls your application lifecycle (for example — reacting to the ready state of your application).
The BrowserWindow module allows window creation.
The mainWindow object is going to be your main application window and is declared as null because the window would otherwise be closed once JavaScripts garbage collection kicks in.
Once app gets the ready event, we create a new 800 pixels wide and 600 pixels high window using BrowserWindow.
That window’s renderer process is going to render our index.html file
