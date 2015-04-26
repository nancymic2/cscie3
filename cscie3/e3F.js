// noprotect
var tds= document.getElementsByTagName("td");
var turns= []; //id of td cliked goes in each click
var cardValue=[];
var counter=1;//not used
var caughtVal="999999";
var prevVal="5555555555555";
//data-vals starts as 444 as a sentinel val
var cardVals=['','\u2666', '\u2660','\u2663','\u2665','\u2248','\u03a3','\u21d4','\u2205', '\u2666', '\u2660','\u2663','\u2665','\u2248','\u03a3','\u21d4','\u2205'];
//createCard is the random number between 0 and 15 to pull card val out of array and then pop it off

for (var i=15; i>-1; i--) {
  //alert('hello');
    tds[i].setAttribute("id", i+1); //frst the 15th td is set to id 16
    tds[i].addEventListener("click", countCard);
    //alert(tds[i].id);
    if (tds[i].getAttribute('data-vals')=='444'){
      //attach a random val
      //pop it off the array
      createCard=Math.floor((Math.random() * i) + 1); //go down and get 1 smaller 
      //alert(createCard);

      tds[i].setAttribute('data-vals', cardVals[createCard]);
      cardVals.splice(createCard, 1); //at position rnd remove item
        //alert(i);
      //alert(tds[i].getAttribute('data-vals'));
      //alert(cardVals.length);
      //decrement counter
    }

  }
////////////////////////////////////////////////

//alert(tds[0].getAttribute('data-vals'));
function countCard(){ //first fn on click
 // if (turns.length<2){
      //turns.push(this.id);

    
        if (turns.length===0){
          turns.push(this.id);
          alert("pushed");
               var repl1= document.getElementById(turns[0]).getAttribute("data-vals");
                document.getElementById(turns[0]).innerText=repl1;
          //turns now has 1 item
        }
        else if (turns.length===1){
          turns.push(this.id);
          
        
          if (document.getElementById(turns[0]).getAttribute('data-vals') == document.getElementById(turns[1]).getAttribute('data-vals')) 
          {
                var repl3= document.getElementById(turns[0]).getAttribute("data-vals");
                document.getElementById(turns[0]).innerText=repl3;
                var repl2= document.getElementById(turns[1]).getAttribute("data-vals");
                document.getElementById(turns[1]).innerText=repl2;
                alert("score!!");
                document.getElementById(turns[0]).removeEventListener("click", countCard);
                document.getElementById(turns[1]).removeEventListener("click", countCard);
     
                turns=[];
          }
      }
      else {
        
                var repl7= document.getElementById(turns[0]).getAttribute("data-vals");
                document.getElementById(turns[0]).innerText=repl7;
                var repl8= document.getElementById(turns[1]).getAttribute("data-vals");
                document.getElementById(turns[1]).innerText=repl8;
                alert(turns[1]);
                setTimeout(flip, 1000);
    
      }

}

function flip() {

                document.getElementById(turns[0]).innerText="H";
                document.getElementById(turns[1]).innerText="H";
                turns=[];
}



