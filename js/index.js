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

//展示当前时间
function showTime(){
    let time=document.getElementById("time");
    time.textContent = getCurrentTime();
}

//循环函数 每个一秒调用一次展示当前时间的函数
function IntervalShowTime(){
    let time=document.getElementById("time");
    setInterval(showTime,1000);
}

welcomeWindow();
IntervalShowTime();