var audiol = new Audio('http://nancymichell.us/E3/lose.mp3');
var audiow = new Audio('http://nancymichell.us/E3/win.mp3');
squareClicks=document.getElementsByTagName("td");
button.addEventListener("click", play);
var clicker=0;
var sequence=[];
var arrayFromLocal = [];
    function Scoring(complexity, wins, losses){
    this.complexity=complexity;
    this.wins=wins;
    this.losses=losses;
//tries already captured by number of entries in local storage    
}

function play(){
    arrayFromLocal = []; //always empty array first, fill from store, 
                           //then add from play
    //get local storage
    var history = localStorage.getItem("histStore");
    if (history){
        // parse the String we got back from localStorage into an 
            //Array of JSON Objects
        var valuesParsed = JSON.parse(history);

        // loop through valuesParsed Array of objs, create new hist Objects, 
        //and push them to the arrayFromLocal Array

        var len = valuesParsed.length;
        var addit=0;
        var winnit=0;
        var loseit=0;
        for (var i = 0; i < len; i++) {
            // get data from each JSON Object
            var compl = valuesParsed[i].complexity;
         
            addit=addit+compl;
            var win = valuesParsed[i].wins;
            winnit=winnit+win;
            var loss = valuesParsed[i].losses;
            loseit=loseit+loss;
            // create new Objects
            var Scores = new Scoring(compl, win, loss);
            arrayFromLocal.push(Scores); // now we have reinitialized the array 
                 ///with exising vals. later add to array and send to storage

             //////////////////////////////////////
        }
       document.getElementById("compl").innerText='your total complexity='+ addit;
        document.getElementById("win").innerText='your total wins='+ winnit;
        document.getElementById("loss").innerText='your total losses='+loseit;
    }

    document.getElementById('winlose').style.visibility="hidden";
    for (var y=1; y<=squareClicks.length; y++){
        document.getElementById("a"+y).addEventListener("click", score);  
    }

    clicker=0;
    var newcount=0;
    var counter=0;
    var counter9=Math.floor(Math.random() * (8 - 4)) + 4;
    sequence=[]; //sequence=[]; //empty here
    var runnit=setInterval(function() {
        var glowed=document.getElementsByTagName("td");    
        var lit=Math.floor((Math.random() * 9) + 1); 
         //counter9 will also be complexity
        //make complexity=counter9
        sequence.push(glowed[lit-1].id);
        counter++;

        blink (lit, counter);  //.delay(3000);;
    }, 700);

    function blink(i, counter){
        stop(i, counter);  
        return $("#" + "a" + i).delay(500).fadeOut(200).fadeIn(200);
    }

    function stop(i, counter){
        if (counter>counter9){
            clearInterval(runnit);
        }
    }

} //end play function

function score(){

        
    var winlose=document.getElementById('winlose');
    if (this.id !==(sequence[clicker])){ 
            audiol.play();
            // add a loss
           
            var losses=1;
            var wins=0;
            var complexity=sequence.length; //
            var newScoring = new Scoring(complexity, wins, losses);
            arrayFromLocal.push(newScoring);
            var  newScoring2 = JSON.stringify(arrayFromLocal);
            window.localStorage.setItem("histStore", newScoring2);  //test local 
            winlose.innerHTML="<img src='http://nancymichell.us/E3/lose.gif'>";
            winlose.style.visibility="visible";
        
            for (var r=1; r<10; r++){
                document.getElementById("a"+r).removeEventListener("click", score);  
            }
     }

    clicker++;
    if (clicker>=sequence.length){
        audiow.play();
        //add a win
         
         var wins=1; //untyped javascript hahaha
         var losses=0;
         var complexity=sequence.length; //
         var newScoring = new Scoring(complexity, wins, losses);
         arrayFromLocal.push(newScoring);
         var  newScoring2 = JSON.stringify(arrayFromLocal);
         window.localStorage.setItem("histStore", newScoring2);  //test local stor 
         winlose.innerHTML="<img src='http://nancymichell.us/E3/win.gif'>";
         winlose.style.visibility="visible";
         for (var r=1; r<10; r++){
            document.getElementById("a"+r).removeEventListener("click", score);  
         }
    }

}  




//http://jsfiddle.net/nancymic2/zsLyedam/41/
//http://jsfiddle.net/nancymic2/zsLyedam/45/ sound
//http://jsfiddle.net/nancymic2/zsLyedam/52/ opacity
//http://jsfiddle.net/nancymic2/zsLyedam/56/ sound
//http://jsfiddle.net/nancymic2/zsLyedam/73/ hover
//http://jsfiddle.net/nancymic2/zsLyedam/77/ remove event listener
//http://jsfiddle.net/nancymic2/zsLyedam/80/ format - commented
//http://jsfiddle.net/nancymic2/zsLyedam/94/  win lose images
//http://jsfiddle.net/nancymic2/b7xzcpbg/15/  sending to local storage but not updating array
//http://jsfiddle.net/nancymic2/b7xzcpbg/18/  local storage good
//http://jsfiddle.net/nancymic2/b7xzcpbg/57/ scoring!
//http://jsfiddle.net/nancymic2/b7xzcpbg/63/ broken
//http://jsfiddle.net/nancymic2/b7xzcpbg/ reverted to 57 //http://jsfiddle.net/nancymic2/b7xzcpbg/57/
// uncommitted version with alert http://jsfiddle.net/nancymic2/b7xzcpbg/68/

/* <input type="button" id="button" value="play"></input>

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
    
  </div><br>
             <div id="compl"></div>
             <div id="win"></div>
             <div id="loss"></div>
             <div id="winlose"></div>
  */

  /*
#button {
    margin: 40px;
}

td:hover {
    opacity: 0.6;
}

#winlose {
visibility: hidden;
z-index: 10;  
position: absolute;
    top: 30px;
    left: 220px;
}


  */

// jquery 1.9.1