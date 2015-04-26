// noprotect
var tds= document.getElementsByTagName("td");
var turns= []; //id of td cliked goes in each click
var cardValue=[];
var counter=1;//not used
var caughtVal="999999";
var prevVal="5555555555555";
var cardVals=['','\u2666', '\u2660','\u2663','\u2665','\u2248','\u03a3','\u21d4','\u2205', '\u2666', '\u2660','\u2663','\u2665','\u2248','\u03a3','\u21d4','\u2205'];
//createCard is the random number between 0 and 15 to pull card val out of array and then pop it off

for (var i=15; i>-1; i--) {
  //alert('hello');
    tds[i].setAttribute("id", i+1); //frst the 15th td is set to id 16
    tds[i].addEventListener("click", countCard);
    alert(tds[i].id);
    if (tds[i].getAttribute('data-vals')=='444'){
       //attach a random val
       //pop it off the array
       createCard=Math.floor((Math.random() * i) + 1); //go down and get 1 smaller 
       //alert(createCard);

       tds[i].setAttribute('data-vals', cardVals[createCard]);
       cardVals.splice(createCard, 1); //at position rnd remove item
       alert(i);
       alert(tds[i].getAttribute('data-vals'));
       //decrement counter
     }

  }

//alert(tds[0].getAttribute('data-vals'));
function countCard(){ //first fn on click
}














/*

<table cellspacing ="12">
    <tr>
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
    </tr>
    <tr>
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
    </tr>
    <tr>
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
    </tr>
    <tr>
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
         <td data-vals="444">&nbsp;&nbsp;&#9829;&nbsp;</td> 
     </tr>
</table>
*/