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