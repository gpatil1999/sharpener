
function getLocalData(){
    var retrievedObject = localStorage.getItem('myObj');
    console.log(JSON.parse(retrievedObject));

    var itemList = document.getElementById('items');
    
    var li1 = document.createElement('li');
    li1.appendChild(document.createTextNode(JSON.parse(retrievedObject).name));
    itemList.appendChild(li1);

    var li2 = document.createElement('li');
    li2.appendChild(document.createTextNode(JSON.parse(retrievedObject).email));
    itemList.appendChild(li2);

    var li3 = document.createElement('li');
    li3.appendChild(document.createTextNode(JSON.parse(retrievedObject).phone));
    itemList.appendChild(li3);

}

function display() { 
    document.addEventListener("click", function(event) {
        event.preventDefault();
    });

    let myObj = {
        name : document.getElementById("username").value,
        email : document.getElementById("usermail").value,
        phone : document.getElementById("userphone").value
    }

    localStorage.setItem("myObj", JSON.stringify(myObj));
}
