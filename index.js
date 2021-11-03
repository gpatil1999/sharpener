function display() { 
    document.addEventListener("click", function(event) {
        event.preventDefault();
    });
    localStorage.setItem('username', document.getElementById("username").value);
    localStorage.setItem('usermail', document.getElementById("usermail").value);
    localStorage.setItem('userphone', document.getElementById("userphone").value);
}