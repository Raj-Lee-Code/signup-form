var confirm = document.getElementById("confirm")
function verify() {
    var x= document.getElementById("password");
    var y= document.getElementById("confirm");
    if(x.value==y.value) return;
    else 
        alert("password not same");
        field.setCustomValidity("Invalid field.");
    }