const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require('fs').promises;

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    readData();
    mainWindow.loadFile(path.join(__dirname, "./app/pages/index.html"));
}

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
    //Checks if the user is using macOS
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});


//File System
function readData() {
    fs.readFile(path.join(__dirname, "./data/data.json"), "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}