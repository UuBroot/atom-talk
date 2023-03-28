/***************************
 *  imports and requires    *
 **************************/
const { app, BrowserWindow } = require('electron')

/******************
 *  Electron Stuff  *
 ******************/
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.loadFile('./app/index.html')
}
//Onstarte
app.whenReady().then(() => {
    createWindow()
})
//Onclose
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})