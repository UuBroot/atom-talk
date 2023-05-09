const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require("fs");

/////////////
//Variables//
/////////////

//UserData
let currentUserData = {
  "change_time":"",
  "Userdata":[
      {
          "IPAdress":"",
          "UserID":"",
          "Username":""
      }
  ]
};

//Window
let win;

//////////
//Window//
//////////
app.on('ready', () => {
  (async() => {
    updateUserData()

    win = new BrowserWindow({ width: 800, height: 600 })
  
    if (checkUserData()){
      console.log("everything is already prepared")
      win.loadFile('./public/pages/index.html');
    }
    else {
      console.log("no user has been created")
      win.loadFile('./public/pages/login.html')
    }
  })()

});

//////////////////
//UserData Thing//
/////////////////
function checkUserData() {

  console.log("hting:",currentUserData)

    if(currentUserData.Userdata[0].Username == "" || currentUserData.Userdata[0].IPAdress == "" || currentUserData.Userdata[0].UserID == ""){
      return false;
    }
    else {
      return true;
    }

}

function updateUserData() {
  fs.readFile('./data/userdata.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return;
    }
    currentUserData = data;
  });
}
//////////////
//Intervalls//
//////////////
setInterval (function () {
  updateUserData()
},1000)