/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *in case the directions are wrong, here is the sum of 12 even fibonacci numbers starting with and including zero
 *0+2+8+34+144+610+2584+10946+46368+196418+832040+3524578 = 4613732
 */



 /********************************************************************
  *
  * PLEASE SEE NOTE ABOVE 
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

 function twelveEvenFibonacciSum(){
//console.clear;
var sum=0; //INITIALIZE SUM AND I AND J
var j=0;
var i=1;
var array1=[0,1];  //BEGIN. INITIALIZE ARRAY WITH 0 AND 1
while (j<11){         //KEEP COUNT OF NUMB OF EVENS. only increment when necessary
array1.push(array1[i] + array1[i-1]);  //PUSH ONTO ARRAY SUM OF PREV 2 NUMBS

if (Math.floor(array1[i+1]/2)==array1[i+1]/2) {  ///SEE IF NUMB PUSHED IS EVEN
   sum=sum+(array1[i+1]);   //IF EVEN, ADD TO SUM
  //console.log(sum);  //TEST
  j++;    //INCREMENT NUMBER OF EVENS
}
    else {
       sum=sum;  //LEAVE SUM AS IS
        
    }
 i++;  //INCREMENT INDEX
}
        
//console.log(sum);
//console.log(j);
return sum;  //RETURN FINAL SUM OF EVEN FIBONACCI NUMBS
 }