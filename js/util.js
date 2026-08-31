function goToNextPage(){
    return history.forward();
}

function goToPrevPage(){
    return history.back()
}

function getUserHostInfo(){
    console.log("Protocol: "+location.protocol);
    console.log("Host: "+location.host);
    console.log("Href: "+location.href);
}

function getCurrentTime(){
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let day=now.getDate();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();
    return fillZeroWithLen(year, 4) + "-" + fillZeroWithLen(month, 2) + "-" + fillZeroWithLen(day, 2) + " " +
        fillZeroWithLen(hour, 2) + ":" + fillZeroWithLen(minute, 2) + ":" + fillZeroWithLen(second, 2);
}

function fillZeroWithLen(num,len){
    let time=num+"";
    while(time.length<len){
        time="0"+time;
    }
    return time;
}