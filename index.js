// const axios = require('axios');
document.addEventListener('DOMContentLoaded',getLocalData());

function displayUsers(retrievedObject){
    var itemList = document.getElementById('items');

    console.log(retrievedObject);
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

function getLocalData(){
    axios.get("https://crudcrud.com/api/c1a2e3b224e648f9b8eb327960ebb9b0/appointmentData")
    .then((resp)=>{ displayUsers(resp.data) })
    .catch((err)=> { console.log(err) });
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
