function query() {
    let array = [{
        name: "Michael",
        sex: "male",
        age: 19
    }, {
        name: "Jersey",
        sex: "female",
        age: 18
    }, {
        name: "Alexa",
        sex: "male",
        age: 24
    }];

    let table_body = document.getElementById("table-body");
    let table=table_body.parentElement;
    table_body.remove();
    table_body=document.createElement("tbody");
    table_body.setAttribute("id","table-body");

    for (let i = 0; i < array.length; ++i) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = array[i].name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = array[i].sex;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = array[i].age;
        tr.appendChild(td);

        table_body.appendChild(tr);
    }
    table.appendChild(table_body);
}

function queryByJQuery(){
    let array = [{
        name: "Michael",
        sex: "male",
        age: 19
    }, {
        name: "Jersey",
        sex: "female",
        age: 18
    }, {
        name: "Alexa",
        sex: "male",
        age: 24
    }];

    let html="";
    for(let i=0;i<array.length;++i){
        html+="<tr>";
        html+="<td>"+array[i].name+"</td>"
        html+="<td>"+array[i].sex+"</td>"
        html+="<td>"+array[i].age+"</td>"
        html+="<td><input type='button' class='update' value='update'></td>"
        html+="<td><input type='button' class='delete' value='delete'></td>"
        html+="</tr>";
    }
    $("#table-body").html(html);
}

function registerQueryListening(){
    $("#query").on("click",queryByJQuery);

    $("#table-body").on("click", ".update",function(){
        let new_val=prompt("Enter new value: ");
        if(new_val!==null){
            console.log("new value"+new_val);
        }
    })

    $('#table-body').on("click",".delete",function(){
        let result=confirm("Are you sure you want to delete?");
        if(result===true){
            console.log("Deleting");
        }
    })
}

registerQueryListening();