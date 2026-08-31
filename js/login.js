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
    let time=getCurrentTime();
    //output to console
    console.log("Login time: "+time+"\n"+
        "Username: "+username+"\n"+
        "Password: "+password);
}

listenLogin();