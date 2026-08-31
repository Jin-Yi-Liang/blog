function submitFeedback() {
    let result=confirm("Are you sure you want to submit this feedback message?");
    if(result===true){
        let content=document.getElementById('content');
        console.log("submit content: "+content.value);
    }
    else{
        console.log("user conceal to submit feedback message");
    }
}

function listenContent(){
    let content=document.getElementById('content');
    content.onfocus=function(){
        console.log("content is focus");
    }
    content.onblur=function(){
        if(content.value===''){
            console.log("content is empty");
        }
        else{
            console.log("content: "+content.value);
        }
    }
}

function listenSex(){
    let sex=document.getElementById("sex");
    sex.onchange=function(){
        console.log(sex.value);
    }
}

function listenFile(){
    let file=document.getElementById("file");
    file.oninput=function(){
        if(file.value!==""){
            console.log("file is uploaded: "+file.value);
        }
        else{
            console.log("file is empty");
        }
    }
}

function registerEventListener(){
    listenContent();
    listenSex();
    listenFile();
}

registerEventListener();
