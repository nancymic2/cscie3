var alpha=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']; //capture z
document.getElementById("game").onclick = function(){
 
    for (var i=0; i<900;){
        document.getElementsByTagName("td")[i].setAttribute("id", ("d"+i));

        var frequentizer = Math.floor((Math.random() * 26) + 1); //get a number

        var rand=Math.floor((Math.random() * 26) + 1);  //get rand to get rand char

        //if you get too many weird letters, rerandomize

        var lett = alpha[rand-1];  //make sure to get a from [0]

        if ((lett == 'j' || lett=='k' || lett=='q' || lett=='x' ||  lett=='z') && frequentizer<23) {
        //frequency is too high. don't assign
        //keep the <td> the same. try again   
        i=i;
        }
        else if ((lett == 'b' || lett=='v' || lett=='y') && frequentizer<21) {
        //frequency is too high. don't assign
        //keep the <td> the same. try again   
        i=i;
        }
        
       else if ((lett == 'c' || lett=='f' || lett=='g' || lett=='m' ||  lett=='u' ||  lett=='w') && frequentizer<18) {
        //frequency is too high. don't assign
        //keep the <td> the same. try again   
        i=i;
       }
        
        else {   ///no infrequent letter so assign and advance
        document.getElementById('d' +i).innerHTML=alpha[rand-1];  
        i++;
        }
     }
}


/*
.button:hover{
    background-color: red;
}

.button {

    color:#ffffff;
    margin-bottom: 15px;
    margin-top: 60px;
    font-size:15px;
    height: 40px;
    padding-left: 10px;
    padding-top: 10px;
    background-color:blue;
    width: 125px;
}
td {
    padding: 5px;
    //width: 30px;
    //height: 30px;
}
}
*/

/*

<div id="game" class="button">Create Game</div>
<table border="1">
 <tr>
<td>...
  </td>
<td>...
  </td>
<td>...

*/

/* http://jsfiddle.net/nancymic2/asa9tz2q/41/ */
