//function play(){

for (var i=0; i<4; i++){

   setInterval(function(){ 

       var lit=Math.floor((Math.random() * 9)+1); 
       var tile=document.getElementById('a' + lit);
       tile.style.opacity=1;
       //setTimeout(off, 800); 
        setInterval(function(){ 
            tile.style.opacity=0.1;
        }, 2200);
  
    }, 2200);

}
//}


/*

function off() {
this.style.opacity=0.1;
  return;
}


    setInterval(function(){ 
    this.style.opacity=0.3;
  }, 500);
*/



/*
for (var run=0; run<5;  run++){
 setTimeout(flash, 2300); 

}

function flash() {
  //alert("flash");
 var lit=Math.floor((Math.random() * 8) + 1); 
 var tile=document.getElementById('a' + lit);
 tile.style.opacity=1;

 setTimeout(off, 2300); 

 return;
}
*/


/*


.faded {
  
 // opacity: 0.3;
  
  
}

#a0{
    opacity: 0.1;
  }
#a1 {
    opacity: 0.1;
  }
#a2 {
    opacity: 0.1;
  }
#a3 {
    opacity: 0.1;
  }
#a4 {
    opacity: 0.1;
  }
#a5 {
    opacity: 0.1;
  }
#a6 {
    opacity: 0.1;
  }
#a7 {
    opacity: 0.1;
  }
#a8 {
    opacity: 0.1;
  }





<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div id="board">

    <table class="faded" cellspacing ="12">
    <tr>
      <td id="a1"><div id='a0'><img src="http://nancymichell.us/E3/img/brown.png"></div></td>
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
</body>
</html>
*/