//now push random ids into array
//check click one by one
//if the id clicked is not == to the id at that
//place in the array, immed stop
var audio = new Audio('http://nancymichell.us/E3/lose.mp3');
var audiow = new Audio('http://nancymichell.us/E3/win.mp3');


squareClicks=document.getElementsByTagName("td");

for (var y=1; y<=squareClicks.length; y++){
document.getElementById("a"+y).addEventListener("click", score);  
}

button.addEventListener("click", play);

/////////////////////////////////////
var clicker=0;
var sequence=[];
function play(){
var bright=document.getElementsByTagName("td");    
    for (var q=0; q<bright.length; q++){
        bright[q].style.opacity="1"; 
    }
    clicker=0;
var newcount=0;
var counter=0;
var counter9=Math.floor(Math.random() * (5 - 2)) + 2;
sequence=[]; //sequence=[]; //empty here
var runnit=setInterval(function() {
var glowed=document.getElementsByTagName("td");    
var lit=Math.floor((Math.random() * 9) + 1); 
    //maybe pass rnd and decrement it here
sequence.push(glowed[lit-1].id);
             // alert(glowed[lit-1].id);
counter++;
    //alert(counter);
blink (lit, counter);  //.delay(3000);;
}, 700);

function blink(i, counter){
stop(i, counter);  
return $("#" + "a" + i).delay(500).fadeOut(200).fadeIn(200);
}

function stop(i, counter){
     ///increment counter here in loop?
     //newcount++;   
     // alert(counter);
    if (counter>counter9){
      clearInterval(runnit);
    }
   
}

} //end play function

function score(){
this.style.opacity="0.5";
    //alert(sequence[clicker]);
    //alert(clicker);
        //alert(this.id);
    //for (var z=0; z<sequence.length; z++){
        if (this.id !==(sequence[clicker])){ 
           // alert("lost");
            audio.play();
        }
   // }
    //alert(this.id);
    //need another counter
    clicker++;
    if (clicker>=sequence.length){
        audiow.play();
    }
    
//this.style.opacity="1";
}  



//http://jsfiddle.net/nancymic2/zsLyedam/41/
//http://jsfiddle.net/nancymic2/zsLyedam/45/ sound
//http://jsfiddle.net/nancymic2/zsLyedam/52/ opacity
//http://jsfiddle.net/nancymic2/zsLyedam/56/ sound


/*

<input type="button" id="button" value="play"></input>

<div id="board">
    <table id="fade" class="faded" cellspacing ="0">
    <tr>
      <td id="a1"><img src="http://nancymichell.us/E3/img/brown.png"></td>
         <td id="a2"><img src="http://nancymichell.us/E3/img/red.png"></td> 
         <td id="a3"><img src="http://nancymichell.us/E3/img/green.png"></td> 

    </tr>
    <tr>
         <td id="a4"><img src="http://nancymichell.us/E3/img/yellow.png"></td> 
         <td id="a5"><img src="http://nancymichell.us/E3/img/dkblue.png"></td> 
         <td id="a6"><img src="http://nancymichell.us/E3/img/blue.png"></td> 

    </tr>
    <tr>
         <td id="a7"><img src="http://nancymichell.us/E3/img/org.png"></td> 
         <td id="a8"><img src="http://nancymichell.us/E3/img/black.png"></td> 
         <td id="a9"><img src="http://nancymichell.us/E3/img/purple.png"></td> 

    </tr>
    
  </div>

  */

  /*
#button {
    margin: 40px;
}

  */

// jquery 1.9.1