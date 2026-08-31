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
    console.log("user is login...");
}

listenLogin();