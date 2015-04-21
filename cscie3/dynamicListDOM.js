//create new div
var listdiv = document.createElement('div');
//set its ID
listdiv.setAttribute('id', 'list');
//append new div to existing div
document.getElementById("start").appendChild(listdiv);
//create new text node with text in it
var text = document.createTextNode("My List");  
//append new text node to newly created div
document.getElementById("list").appendChild(text);

//set style of title
document.getElementById("list").setAttribute("class", "bold");

//ad infinitum:
var ul = document.createElement('ul');
document.getElementById("list").appendChild(ul);
var li = document.createElement('li');
ul.appendChild(li);
var soda = document.createTextNode("Soda");  
li.appendChild(soda);

var li2 = document.createElement('li');
ul.appendChild(li2);
var chips = document.createTextNode("Chips");  
li2.appendChild(chips);

var li3 = document.createElement('li');
ul.appendChild(li3);
var main = document.createTextNode("Main Course");  
li3.appendChild(main);

var ul2 = document.createElement('ul');
li3.appendChild(ul2);
var li4 = document.createElement('li');
ul2.appendChild(li4);
var beef = document.createTextNode("Ground beef");  
li4.appendChild(beef);

var li5 = document.createElement('li');
ul2.appendChild(li5);
var butter = document.createTextNode("Butter");  
li5.appendChild(butter);

var li6 = document.createElement('li');
ul2.appendChild(li6);
var onions = document.createTextNode("Onions");  
li6.appendChild(onions);

var li7 = document.createElement('li');
ul2.appendChild(li7);
var wine = document.createTextNode("Wine");  
li7.appendChild(wine);

var li8 = document.createElement('li');
ul2.appendChild(li8);
var cream = document.createTextNode("Cream");  
li8.appendChild(cream);

var li9 = document.createElement('li');
ul2.appendChild(li9);
var mush = document.createTextNode("Mushrooms");  
li9.appendChild(mush);

var li10 = document.createElement('li');
ul.appendChild(li10);
var cups = document.createTextNode("Paper cups");  
li10.appendChild(cups);

var li11 = document.createElement('li');
ul.appendChild(li11);
var plates = document.createTextNode("Paper plates");  
li11.appendChild(plates);

var li12 = document.createElement('li');
ul.appendChild(li12);
var dessert = document.createTextNode("Dessert");  
li12.appendChild(dessert);

var ul3 = document.createElement('ul');
li12.appendChild(ul3);
var li13 = document.createElement('li');
ul3.appendChild(li13);
var flour = document.createTextNode("Flour");  
li13.appendChild(flour);

var li14 = document.createElement('li');
ul3.appendChild(li14);
var cocoa = document.createTextNode("Cocoa powder");  
li14.appendChild(cocoa);

var li15 = document.createElement('li');
ul3.appendChild(li15);
var sugar = document.createTextNode("Sugar");  
li15.appendChild(sugar);

var li16 = document.createElement('li');
ul3.appendChild(li16);
var eggs = document.createTextNode("Eggs");  
li16.appendChild(eggs);

var li17 = document.createElement('li');
ul.appendChild(li17);
var cheese = document.createTextNode("Cheese");  
li17.appendChild(cheese);

var li18 = document.createElement('li');
ul.appendChild(li18);
var crackers = document.createTextNode("Crackers");  
li18.appendChild(crackers);

myItems=document.getElementsByTagName('li');
alert("You have " + myItems.length + " items in your list");


/*
.bold {
    font-weight: bold;
    color: red;
    font-size: 20px;
}
li {
    color: black;
    font-size: 14px;
}

    <div id="start">
    </div>
*/