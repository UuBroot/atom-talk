/***************************
 *  imports and requires    *
 **************************/
const { app, BrowserWindow } = require('electron')

/**************
 *  Variables   *
 **************/

/******************
 *  Electron Stuff  *
 ******************/

async function startClient(){
    //await client.startClient({initialSyncLimit: 10});
    //client.once('sync', function(state, prevState, res) {
        console.log("myass")
        //if(state === 'PREPARED') {
            const win = new BrowserWindow({
                width: 800,
                height: 600,
                show: false,
                autoHideMenuBar: true
              })
            win.loadFile('./app/index.html');
            win.on("resized", () => {
                console.log("AAAAAAAAAAA")
            })
            win.on("ready-to-show", win.show); 
       // } else {
       //     console.log(state);
       //     process.exit(1);
        //}


    //});

}



//Onstarte
app.whenReady().then(() => {
    startClient();
})
//Onclose
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})