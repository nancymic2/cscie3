var date = new Date();
var hours = ( date.getHours() );
var mins = ( date.getMinutes() );
var secs = ( date.getSeconds() );

alert( hours );
var time=0;
var date2 = new Date();
var hours2 = ( date.getHours() );
var mins2 = ( date.getMinutes() );
var secs2 = ( date.getSeconds() );

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
  