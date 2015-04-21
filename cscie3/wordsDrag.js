var words=["cat", "dog", "ate", "ran", "ugly", "politician", "blue", "hat", "funny", "quickly", "old", "lazy", "nuts", "crazy", "the", "the", "the", "his", "her", "she", "fast", "stupid", "hamburger", "pull", "happily", "tree", "chop", "jump", "slipped", "a", "a", "an", "under", "bus", "chocolate", "slobber", "ravenously", "consumed", "driver", "sloppy", "disheveled", "homely", "maiden", "angrily", "drove"];

for (var x=0; x<words.length; x++) {
var sp = document.createElement('span');
document.getElementById("blackboard").appendChild(sp);

var word = document.createTextNode(' ' + words[x]);  
sp.appendChild(word);
}

var drgwords=document.getElementsByTagName("span")
for (var y=0; y<drgwords.length; y++) {
drgwords[y].setAttribute("class", "drg");
}

$( ".drg" ).draggable(); 

/*
.drg {
    font-size: 18px;
    font-weight: bold;
    cursor: move;
}

<div id="blackboard"></div>

http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
*/