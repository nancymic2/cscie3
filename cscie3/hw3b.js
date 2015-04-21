/* hw3b.js */
window.onload = function() {


/////  1  ///////
/////section character count for bio /////

bio.addEventListener("keyup", countdown, false);
var count=0; //start counting in key up
var wordcount=0; //init
//even if you hold down letter key, div will erase more than 140 chars

    function countdown (e){
      var words1=document.getElementById("bio").value; //get input
      var wordcount=words1.length; //handling paste of long text
      //alert (wordcount);

      if (count===140 || wordcount>140) {  //if the keyup count or the pasted in count exceeds 140
         document.getElementById("charsLeft").innerText='0';   //tell user no more chars
         alert("Really. You cannot type more than 140 chars!!! Not even with pasting!!");
         var charlength = words1.substring(0, 140); //grab first 140 chars of pasted in text

         document.getElementById("bio").value = charlength;  //put only the 140 chars in the div
         document.getElementById("bio").maxLength = "140";  //now limit the size to 140
         bio.removeEventListener("keyup", countdown, false);  //remove ent listener so the typing tops
         return;
       }
       else {
        count++;
        document.getElementById("charsLeft").innerText=140-wordcount;  //print remaining chrs count
       }
    }


/////  2  ///////
/////section password matching and min chars /////


pwd2.addEventListener("change", pwcount, false);  //onchange of pword field
    function pwcount (e){
      pword1=document.getElementById("pwd1").value;  //get pw1 value
      pword2=document.getElementById("pwd2").value;   //get pw2 val
      if (pword1!=pword2){   //see if not equal (i did not use !== because this is text field)
          alert("pword must match"); //not match, give alert
          hw4Form.action=" ";  //stop submission
      }
      else if (pword1.length<8){  //if they match make sure they are >7
          alert("pword must be at least 8 chars long");
          hw4Form.action=" "; //stop submission
      } 
      else {
         hw4Form.action="http://morpheus.dce.harvard.edu/cgi-bin/echo.cgi";  //submit to url that prints POST
      }
    }


/////  3  ///////
/////section show hide form element /////

document.getElementById("twit").addEventListener("click", chbox); //add listener to checkbox

    function chbox (e){
      var showtwit=document.getElementById("twit"); 
    	if (showtwit.checked==false){ //if uncheck, hide
    		document.getElementById("twitter").style.visibility="hidden";
    	}
    	else if (showtwit.checked == true){  //if checked show
    		document.getElementById("twitter").style.visibility="visible";
    	}
    }

/////  4  ///////
/////section to add selects /////



var colors=[['---',], ['red heels', 'blue ballet', 'black flats', 'brown loafers'], ['Prada clutch', 'Cole Haan satchel', 'Coach shoulder', 'Furla evening'], ['wool', 'cashmere', 'trench'], ['Italian kid', 'driving', 'mittens']];
var sel = document.getElementById("firstSelect"); //array holding select option vals
document.getElementById("firstSelect").addEventListener("change", chgSel);  //add listener onchange
var counter=1;  //init counter


    function chgSel() {
          
        var sel1 = document.createElement("select");  //create a select element
        sel1.setAttribute("id", "secondSelect" + counter); //give it an incrementing id
                     
        var sel2 = document.getElementById("secondSelect" + (counter-1));  //get previous sibling
                    
        var parentDiv = sel2.parentNode;  ///get parent
        parentDiv.replaceChild(sel1, sel2); //replace child node. otherwise select vals keep being added
           
        var opts = sel.options[sel.selectedIndex].value;  //get selected val from first select 
         
        var lenght1=colors[opts].length;  //oops. not fixing the spelling. get val from array using index from first select
        for (var i = 0; i < lenght1; i++) {
       
            var opt = document.createElement('option'); //create new option block
            var txtNode = document.createTextNode(colors[opts][i]); //get element of element of color array
         
            opt.appendChild(txtNode); //append the text node with the val from array above
            sel1.appendChild(opt); //append the option

        } 
    counter++;  //increment to increment new id's

    }  ///replace thing above secondSelect


}

