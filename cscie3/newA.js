console.clear();
//window.localStorage.clear();
// Initialize Custmer Object

function Customer(nam, addr, eml){
    this.name= nam;
    this.address=addr;
    this.email=eml;
    
}
var arrayFromLocal = [];
window.onload=function() {
    
    // get data from localStroage and put it in a String
    var custData = localStorage.getItem("newcust");
    
    // check to see if we pulled anything back from localStorage
    if (custData) {

        // parse the String we got back from localStorage into an Array of JSON Objects
        var valuesParsed = JSON.parse(custData);

        // loop through valuesParsed Array, create new Customer Objects, and push them to the arrayFromLocal Array

        var len = valuesParsed.length;
        for (var i = 0; i < len; i++) {
            // get data from each JSON Object
            var customerName = valuesParsed[i].name;
            var customerAddress = valuesParsed[i].address;
            var customerEmail = valuesParsed[i].email;
            document.getElementById('test').innerHTML+= customerName + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + customerAddress + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   " + customerEmail +  '<br><hr>';
            
            // create new Customer Object
            var newCustomer = new Customer(customerName, customerAddress, customerEmail);
            arrayFromLocal.push(newCustomer);
        }

    }
};
    
///bind button
var arrOfCustObjs = [];
document.getElementById("store").onclick = function(){
  

//get vals from form
    var na=document.getElementById("name").value;
    var ad=document.getElementById("address").value;
    var em=document.getElementById("email").value;

//instantiate new cust
var cust=new Customer(na, ad, em);
arrayFromLocal.push(cust);

//now array shoud be name address email
// Write new cust to localStorage is working
    
var  cust1 = JSON.stringify(arrayFromLocal);
window.localStorage.setItem("newcust", cust1);
document.getElementById('test').innerHTML+= cust.name + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + cust.address + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   " + cust.email +  '<br><hr>';

};

   
