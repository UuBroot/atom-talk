
let currentChangeLog;
//Todo: Setting variables for test reasons will later be implemented 
let currentUserIP;
let currentUserName = "Astro";
let currentUserID = "1234";
let changedTheLog = false;
//Default template
let newIp = {
        "IP-Adress": "",
        "UserID": "",
        "Username": ""
}

//this function is called on login to change it´s own log if it´s own ip has changed
 function overriteToNextChangelog() {
        //getting user ip
        fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((json) => currentUserIP = json.ip )
        //getting user json
        fetch('./userdata.json')
                .then((response) => response.json())
                .then((json) => currentChangeLog = json);

        setTimeout(function(){
                for (let i = 0; i < currentChangeLog.Userdata.length; i++) {
                if (currentChangeLog.Userdata[i].UserID == currentUserID) {
                        console.log("found user");
                        if (currentChangeLog.Userdata[i].IPAdress == currentUserIP) {
                                console.log("has the same IP");
                        }
                        else {
                                currentChangeLog.Userdata[i].IPAdress = currentUserIP;
                                changedTheLog = true;
                                console.log("IP Adress was changed");
                                dateTime = Date.now();
                                currentChangeLog.change_time = dateTime;

                                //Todo: Write to actuall JSON (currentChangeLog)
                        }
                }
                else {
                        console.log("user not found");
                        //Todo: Redirect to account creator/reactivator
                }
        }
        if (changedTheLog == true) {
                //Todo: send to other users
                console.log("sent json");
        }},1000)
         
}

//test JSON
fetch('./userdata2.json')
        .then((response) => response.json())
        .then((json) => testInputJSON = json);
let testInputJSON;
async function comparingJSON(inputJSON) {
        fetch('./userdata.json')
                .then((response) => response.json())
                .then((json) => currentChangeLog = json);


        //!THE LENGHT IS THE SAME
        if (inputJSON.Userdata.length == currentChangeLog.Userdata.length) {
                for (let i = 0; i < inputJSON.length.length; i++) {
                        if (inputJSON.Userdata[i].IPAdress == currentChangeLog.Userdata[i].IPAdress) {
                                console.log("IP is the same");
                        }
                        else {
                                if (inputJSON.change_time > currentChangeLog.change_time) {
                                        //!InputJSON is newer
                                        for (let i = 0; i < currentChangeLog.length; i++) {
                                                currentChangeLog = inputJSON;
                                                //Todo: actually overrite the userdata.json with currentChangeLog
                                                overriteToNextChangelog();
                                        }
                                }
                                else{
                                        //!currentJSON is newer
                                }

                        }
                }
        }
        if (inputJSON.Userdata.length > currentChangeLog.Userdata.length) {
                
        }




}