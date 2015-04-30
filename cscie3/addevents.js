//now push random ids into array
//check click one by one
//if the id clicked is not == to the id at that
//place in the array, immed stop

squareClicks=document.getElementsByTagName("td");
for (var y=1; y<=squareClicks.length; y++){
  document.getElementById("a"+y).addEventListener("click", score);  
}

function score(){
    alert("score");
}


button.addEventListener("click", play);

/////////////////////////////////////


function play(){
var newcount=0;
var counter=0;
var counter9=Math.floor(Math.random() * (7 - 3)) + 3;

var runnit=setInterval(function() {
var lit=Math.floor((Math.random() * 9) + 1); 
    //maybe pass rnd and decrement it here
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

}


////http://jsfiddle.net/nancymic2/rs2tvc56/125/
