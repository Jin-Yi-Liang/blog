function submitFeedback() {
    let result=confirm("Are you sure you want to submit this feedback message?");
    if(result===true){
        let content=$("#content");
        let sex=$("#sex");
        let file=$("#file");
        let time=getCurrentTime();
        console.log("submit time: "+time+"\n"+
            "content: "+content[0].value+"\n"+
            "sex: "+sex[0].value+"\n"+
            "file: "+file[0].value);
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
