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