var tds= document.getElementsByTagName("td");
for (var i=0; i<tds.length; i++) {
    tds[i].setAttribute("id", i+1);
    tds[i].addEventListener("click", countCard);
  
  //create array of clicked items ids
   
}
//var turns= new Array();
var turns= [];

  function countCard(){
    turns.push(this.id);
    var which=this.id;
    showCard(this, which);//goes and returns to alert
   // alert(turns[turns.length-1]); //id in the array
    
  }


var counter=-1;
var caught="";
function showCard(myid, which) {
  counter ++;
 
  //alert(this.id); //the id at the time of caller
  //alert (counter);
  //alert(which);
  prev=caught;
  //prevID=
  caught=document.getElementById(myid.id).innerText;
     //alert(prev);
     // alert (caught);
  if (prev==caught){
    alert("score!");
          //alert(counter);
          //alert(which);
            //x=turns[counter];
            //alert(myid.id);
 
            //newer=(turns[(which.id)-1]);
              //alert(newer);
    document.getElementById(turns[counter-1]).innerText="turn"+counter;
    document.getElementById(turns[counter]).innerText="turn"+ (counter+1);
        //alert(turns[counter]);
        //alert(turns[counter-1]);
  }
  else {
    
    
  }
}




//css

/*
table td {
    border: 1px solid red;
}
td {
    height: 30px;
    width 30px;
    cursor: pointer;
}


*/


//html

/*

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
<table>
    <tr>
        <td>222</td> <td>888</td> <td>666</td> <td>555</td> 
    </tr>
    <tr>
                <td>333</td> <td>666</td> <td>7777</td> <td>999</td> 
            </tr>
    <tr>
        <td>555</td> <td>888</td> <td>333</td> <td>444</td> 
            </tr>
    <tr>
         <td>444</td> <td>222</td> <td>7777</td> <td>999</td> 
            </tr>
</table>
</body>
</html>
http://jsbin.com/fodabu/2/edit

*/