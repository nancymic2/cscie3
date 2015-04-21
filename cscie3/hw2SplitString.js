/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/


  
splitName.onclick = function()
{

    var fullname = document.getElementById("fullName").value;  //get full name from input
   
    if (fullname.indexOf(" ")<0){  //see if there is a space. if not, make whole thing the first name
       document.getElementById("firstname").innerHTML = fullname;
       
    }
    else {
              var space=fullname.indexOf(" ") //see if there is a space
               

              var firstname = fullname.substring(0, space+1); //get letters up to space
              var lastname = fullname.substring(space+1, fullname.length); //get letters after space

              document.getElementById("firstname").innerHTML = firstname; //print
              document.getElementById("lastname").innerHTML = lastname;  //print
    }

}