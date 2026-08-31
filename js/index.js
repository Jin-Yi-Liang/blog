function welcomeWindow() {
    let username = prompt("What's your name, my friend?");

    if (username === "" || username == null) {
        console.log("username is empty, because user do not enter it");
    }
    else {
        alert("Welcome " + username + " comes to Jin's blog!");
        let title=document.getElementById("title");
        title.textContent = "Welcome "+username+" comes to Jin's blog!";
        console.log("username: " + username);
    }
}

function showCurrentTime(){
    let time=document.getElementById("time");
    setInterval(function(){
        time.textContent=getCurrentTime();
    },1000);
}

welcomeWindow();
showCurrentTime();