// const axios = require('axios');
document.addEventListener('DOMContentLoaded',getLocalData());

function getLocalData(){
    var retrievedObject = localStorage.getItem('myObj');
    console.log(JSON.parse(retrievedObject));

    var retrievedObject = JSON.parse(retrievedObject);
    console.log(retrievedObject);

    var itemList = document.getElementById('items');
    
    retrievedObject.forEach(element => {
    
        console.log(element);
    var li1 = document.createElement('li');
    li1.appendChild(document.createTextNode(element.name));
    itemList.appendChild(li1);

    var li2 = document.createElement('li');
    li2.appendChild(document.createTextNode(element.email));
    itemList.appendChild(li2);

    var li3 = document.createElement('li');
    li3.appendChild(document.createTextNode(element.phone));
    itemList.appendChild(li3);
    });

}

function display() { 
    console.log('in display');
    document.addEventListener("click", function(event) {
        event.preventDefault();
    });

    let newObj = {
        name : document.getElementById("username").value,
        email : document.getElementById("usermail").value,
        phone : document.getElementById("userphone").value
    }

   axios.post("https://crudcrud.com/api/c1a2e3b224e648f9b8eb327960ebb9b0/appointmentData", newObj)
   .then((resp)=>{
       console.log(resp);
   })
   .catch((err) => {
       console.log(err);
   })
    
}
