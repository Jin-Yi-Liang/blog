function listenLogin(){
    document.getElementById("username").onkeydown=function(e){
        if(e.code==="Enter"){
            login();
        }
    }
    document.getElementById("password").onkeydown=function(e){
        if(e.code==="Enter"){
            login();
        }
    }
}

function login(){
    //get username and password
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    //get current time
    let time=util.getCurrentTime();
    //output to console
    console.log("Last login time: "+time);
    console.log("Username: "+username);
    console.log("Password: "+password);
}

listenLogin();