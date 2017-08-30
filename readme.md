# Accompanying repository for the Electron guide

![Sound Machine](https://rawgithub.com/bojzi/sound-machine/master/sketch/sound-machine.png)


## [IPC](https://github.com/electron/electron/blob/master/docs/api/ipc-renderer.md)Renderer

Subscribe the main process (main.js) to the “close-main-window” channel and send a message on that channel from the renderer process (index.js)
when someone clicks the close button.
