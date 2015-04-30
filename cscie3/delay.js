
var counter=0;
var runnit=setInterval(function() {
   var lit=Math.floor((Math.random() * 9) + 1); 
counter++;
   blink (lit, counter);  //.delay(3000);;
}, 1200);


function blink(i, counter){

stop(counter);  

return $("#" + "a" + i).delay(500).fadeOut(200).fadeIn(200);
}

function stop(counter){
    if (counter>6){
      clearInterval(runnit);
        
    }
}
