
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
    document.addEventListener("click", function(event) {
        event.preventDefault();
    });

    var values = JSON.parse(localStorage.getItem('myObj'));
    if (values === null) {
      values = [];
    }

    let newObj = {
        name : document.getElementById("username").value,
        email : document.getElementById("usermail").value,
        phone : document.getElementById("userphone").value
    }

    values.push(newObj);

    localStorage.setItem("myObj", JSON.stringify(values));
    console.log(localStorage.getItem("myObj"));
}
