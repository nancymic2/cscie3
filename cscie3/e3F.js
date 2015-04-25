var tds= document.getElementsByTagName("td");
for (var i=0; i<tds.length; i++) {
    tds[i].setAttribute("id", i+1);
    tds[i].addEventListener("click", countCard);
  
  //create array of clicked items ids
  //data-vals represent card value
  //innterText will be face of card
  //will have to compare data-vals vs face 
  //will have to set dyn the data-vls
   
}

tds[1].setAttribute("data-vals", "232323");
var test=tds[1].getAttribute("data-vals"); //put card
//value into custm attrib
//then get
//then test
alert(test);

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
    var repl= document.getElementById(turns[counter-1]).getAttribute("data-vals");
    alert(repl);
    document.getElementById(turns[counter-1]).innerText=repl;
    
    var repl2= document.getElementById(turns[counter]).getAttribute("data-vals");
    //document.getElementById(turns[counter-1]).innerText="turn"+counter;
    //document.getElementById(turns[counter]).innerText="turn"+ (counter+1);
    
    document.getElementById(turns[counter]).innerText=repl2;
    
        //alert(turns[counter]);
        //alert(turns[counter-1]);
  }
  else {
    
    
  }
}
   






/*
var counter=0;
function flipcheck() {
    counter ++;
    if (parseInt(counter/2)===counter/2) {
        flipit(this); //the id at the time of caller
    }
}
    

function flipit(theTd){
 
  alert (theTd.id);  //0based index
  alert ( parseInt(theTd.id)-1); //prev sq
  var prev=( parseInt(theTd.id)-1);
  
  //minus 1 will need to be rand numb
  
  document.getElementById(theTd.id).innerText="bye";
  document.getElementById(prev).innerText="hello";
    
}
*/


//css

/*
table td {
    border: 1px solid red;
}
td {
    height: 30px;
    width 30px;
    cursor: pointer;
  font-size: 20px;
  font-weight: bold;
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
        <td data-vals="99999">222</td> 
        <td data-vals="45333">888</td> 
        <td data-vals="44333">666</td> 
        <td data-vals="231214">555</td> 
    </tr>
    <tr>
        <td data-vals="94993">333</td> 
        <td data-vals="22222222">666</td> 
        <td data-vals="75646">7777</td> 
        <td data-vals="5587439">999</td> 
    </tr>
    <tr>
        <td data-vals="457403">555</td> 
        <td data-vals="9884848484">888</td> 
        <td data-vals="33948">333</td> 
        <td data-vals="565656">444</td> 
    </tr>
    <tr>
         <td data-vals="33222">444</td> 
         <td data-vals="64646">222</td> 
         <td data-vals="282828">7777</td> 
         <td data-vals="32334">999</td> 
     </tr>
</table>
</body>
</html>
http://jsbin.com/fodabu/2/edit

*/

////////////////////// later //////////////////////

/*
var counter=0;
function flipcheck() {
    counter ++;
    if (parseInt(counter/2)===counter/2) {
        flipit(this); //the id at the time of caller
    }
}
    

function flipit(theTd){
 
  alert (theTd.id);  //0based index
  alert ( parseInt(theTd.id)-1); //prev sq
  var prev=( parseInt(theTd.id)-1);
  
  //minus 1 will need to be rand numb
  
  document.getElementById(theTd.id).innerText="bye";
  document.getElementById(prev).innerText="hello";
    
}
*/