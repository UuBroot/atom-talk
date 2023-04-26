const { ipcRenderer } = require('electron');
const { couldStartTrivia } = require('typescript');

let currData;

let roomSelection = document.getElementById("main-roomSelection");
let text_chanals = document.getElementById("main-text-chanals");
let text_chanal = document.getElementById("main-text-chanal");

/*
//Testing
for(let i = 0;i<100;i++){
    roomSelection.innerHTML += `
        <div id="server-icon" onclick=""></div>
    `
}
for(let i = 0;i<100;i++){
    text_chanals.innerHTML += `
        <div id="main-text-chanals-chanal" onclick="">
            <p>Chanal Name</p>
        </div>
    `
}
for(let i = 0;i<100;i++){
    text_chanal.innerHTML += `
        <div class="message">
            <img src="https://www.desicomments.com/wallpapers/wp-content/uploads/2014/12/Great-Mountains.jpg" alt="userpic" class="text-userPic">
            <div>
            <p>Name</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    `;
}
*/

ipcRenderer.send('readFile');

ipcRenderer.on('readFileOutput', (event, arg) => {
    currData = arg;
    changeContent(JSON.parse(arg));
});

/**********************
 * Change The Content *
 **********************/
//The main changer
function changeContent(data) {
    console.log(data);
    printTextChanals(data.textChanals);
}
function printTextChanals(textChanals){
    console.log(textChanals)
    for(let i = 0;i<textChanals.length;i++){
        text_chanals.innerHTML += `
            <div id="main-text-chanals-chanal" onclick="">
                <p>${textChanals[i].name}</p>
            </div>
        `
    }
}
function printServers(servers){
console.log(servers)
}