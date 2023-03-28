/***************************
 *  imports and requires    *
 **************************/
const { app, BrowserWindow } = require('electron')
const { join } = require("path");
/**************
 *  Variables   *
 **************/

/******************
 *  Electron Stuff  *
 ******************/
//Onstarte
app.whenReady().then(() => {
    main();
})
//Onclose
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
/**********
 *  Main    *
 **********/
function main() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        autoHideMenuBar: true
      })
    win.loadFile('./app/index.html');
    win.on("ready-to-show", win.show); 
    win.on("resized", console.log(win.getSize))
}


