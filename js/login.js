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
    //username and password
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    //date
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let day=now.getDate();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();
    let time=fillZeroWithLen(year,4)+"-"+fillZeroWithLen(month,2)+"-"+fillZeroWithLen(day,2)+" "+
        fillZeroWithLen(hour,2)+":"+fillZeroWithLen(minute,2)+":"+fillZeroWithLen(second,2);
    console.log("Last login time: "+time);
    console.log("Username: "+username);
    console.log("Password: "+password);
}

function fillZeroWithLen(num,len){
    let time=num+"";
    while(time.length<len){
        time="0"+time;
    }
    return time;
}

listenLogin();