window.onload = function() {

document.getElementById("divideTranscript").addEventListener("click", splitit);
function splitit (){

var words=document.getElementById('transcriptText').innerText;

//var words2 = words.replace(/^[\r\n ]+$/, "");

var words2 = words.replace(/\s{1,}/g," ");
arOfWords=words2.split(" ");
console.log (arOfWords);
document.getElementById('transcriptText').innerHTML='';

for (var x=0; x<arOfWords.length; x++) {   
    var span = document.createElement('span');
    document.getElementById("transcriptText").appendChild(span);
    var words = document.createTextNode(' ' + arOfWords[x]);  
    span.appendChild(words);
}

var spanwords=document.getElementsByTagName("span")
for (var y=0; y<spanwords.length; y++) {
    spanwords[y].setAttribute("id", "span"+y);
    spanwords[y].addEventListener('mouseover', hoverit);
    spanwords[y].addEventListener('mouseout', clearit);
}

function hoverit (){
    this.style.backgroundColor="red";
}
function clearit (){
    this.style.backgroundColor="white";
}
}
    
}