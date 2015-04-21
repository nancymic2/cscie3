/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * problem: word count
  *
  ********************************************************************/
  myWordsToCount.onkeyup = function(){
  
  var count=0; //init
  var words1=document.getElementById("myWordsToCount").value; //get input
  var words2=words1.trim(); //trim leading & ending space
  var words=words2.replace(/\s+/g,' '); //regex to replace multi sp with 1 sp 

  var wordArray = words.split(" "); //split into array elements at space

  count=wordArray.length; //get number of elem in array
  document.getElementById("wordcount").innerHTML=count; //print # of words
            
}
             
              