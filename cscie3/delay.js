
var counter=0;
var runnit=setInterval(function() {
   var lit=Math.floor((Math.random() * 9) + 1); 
counter++;
   blink (lit, counter);  //.delay(3000);;
}, 1600);


function blink(i, counter){

stop(counter);  

return $("#" + "a" + i).delay(1000).fadeOut(1000).fadeIn(1000);
}

function stop(counter){
    if (counter>4){
      clearInterval(runnit);
        
    }
}
