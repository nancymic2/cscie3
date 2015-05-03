// noprotect
var date1 = new Date();
var hours1 = ( date1.getHours() );
var mins1 = ( date1.getMinutes() );
var secs1 = ( date1.getSeconds() );
alert (secs1);

var tds= document.getElementsByTagName("td");
var turns= []; //id of td cliked goes in each click
//data-vals starts as 444 as a sentinel val
var cardVals=['','\u2666', '\u2660','\u2663','\u2665','\u2248','\u03a3','\u21d4','\u2205', '\u2666', '\u2660','\u2663','\u2665','\u2248','\u03a3','\u21d4','\u2205'];
//createCard is the random number between 0 and 15 to pull card val out of array and then pop it off
var numCards=0;
var arrayOfTds=[];

//////////////////
for (var i=15; i>-1; i--) {
        tds[i].setAttribute("id", i+1); //frst the 15th td is set to id 16
        tds[i].addEventListener("click", countCard);
    
        if (tds[i].getAttribute('data-vals')=='444'){
              //attach a random val
              //pop it off the array
              createCard=Math.floor((Math.random() * i) + 1); //go down and get 1 smaller 
              tds[i].setAttribute('data-vals', cardVals[createCard]);
              cardVals.splice(createCard, 1); //at position rnd remove item
              //decrement counter
        }

}
////////////////


function countCard(){ //first fn on click

         arrayOfTds=[];
        if (turns.length===0){
              turns.push(this.id);
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
                    alert("YOU'VE GOT A MATCH!");
                    document.getElementById(turns[0]).removeEventListener("click", countCard);
                    document.getElementById(turns[1]).removeEventListener("click", countCard);
                    
                    turns=[];
                                //////////////
                    var tdsUsed = document.getElementsByTagName("td");
                    for (var k=0; k<16; k++) {
                        arrayOfTds.push(tdsUsed[k].innerText);
                        //alert(tdsUsed[k].innerText);
                    }
                    allTds=arrayOfTds.toString();
                    if ((allTds.split('N').length)<3){
                                          
                        alert("GAME OVER");
                        totalTime=timer();  /////
                        alert (totalTime);
                        //location.reload();
                    }
                   /////////////

                    
              }
        
              else {
            
                    var repl7= document.getElementById(turns[0]).getAttribute("data-vals");
                    document.getElementById(turns[0]).innerText=repl7;
                    var repl8= document.getElementById(turns[1]).getAttribute("data-vals");
                    document.getElementById(turns[1]).innerText=repl8;
                   
                    setTimeout(flip, 1000);
        
              }
       }

}
///////////////////
function flip() {
                document.getElementById(turns[0]).style.color="purple";
                document.getElementById(turns[0]).innerText="N";
                document.getElementById(turns[1]).style.color="purple";
                document.getElementById(turns[1]).innerText="N";
                turns=[];
}

/////////////////  timer  
function timer(){

var time=0;
var date2 = new Date();
var hours2 = ( date2.getHours() );
var mins2 = ( date2.getMinutes() );
var secs2 = ( date2.getSeconds() );
  //alert(secs2);

if (hours2 <= hours1){ //hour not changed
        if (mins2 <= mins1){ //mins not changed
            time = secs2-secs1; //then only secs changed so how many secs elps?
        }
        else {  ///so mins are greater but hours is not
            time = (60-secs1)+secs2; //so get diff of mins and diff of secs
        }
}
 else if (hours2>hours1 && mins2 > mins1){  // so hours have changed if also mins changed
            if (secs2 > secs1){ //and if secs also changed
                var timeMins = ((hours2-hours1)*60)*60; //get mins and seconds diff
                var timeSecs = secs2-secs1;
                var allTime = timeMins+timeSecs;
                var partMins = math.floor(allTime/60);
                var partSecs  = allTime-(math.floor(allTime/60));
                time=partSecs;
             }
             else { ///then only mins changed
                time=(mins2-mins1)*60;
             }  
 }
             
else {    
   time =secs2-secs1;     
}
  alert("YOUR GAME TOOK THIS LONG: " + time); ///////
  return time;   
  
}
  

  
  
  


