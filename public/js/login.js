const ipcMain = require('electron').ipcMain

function submit() {
    ipcMain.on('submit-new-user-data', function (event, arg) {
        win.webContents.send(document.getElementById("name").value);
    });
}