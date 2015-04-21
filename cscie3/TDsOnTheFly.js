var table = document.createElement("table");   
document.body.appendChild(table); 
var row = document.createElement("tr");
table.appendChild(row); 

    for (var i=0; i<21; i++){
        var cell = document.createElement("td"); 
        row.appendChild(cell); 
    }

    for (var j=0; j<21; j++){
        document.getElementsByTagName("td")[j].setAttribute("td", j);
        var txt = document.createTextNode("This is cell " + j); 
        document.getElementsByTagName("td")[j].appendChild(txt); 
    }

/*
td {
    border: 1px solid black;
     padding: 8px;
    background-color: yellow;
}
*/