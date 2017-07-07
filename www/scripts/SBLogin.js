function signClick() {

    window.localStorage.setItem("Check", "0");
    window.location.href = "signUp.html";
}



"use Strict";

var Login = document.getElementById("login");
var sign = document.getElementById("sign");
if (window.localStorage.getItem("Check") == null) {
    window.localStorage.setItem("Check", "0");

}
Login.onclick = function () {
    
    var ema = document.getElementById("ema");
    var pas = document.getElementById("pas");
    if (ema.value == "" && pas.value!="")
        {
    window.localStorage.setItem("Check","1");
    }
    else if(ema.value != "" && pas.value=="")
    {
        window.localStorage.setItem("Check", "2");

    }
    else if (ema.value == "" && pas.value == "") {
        window.localStorage.setItem("Check", "3");

    }
    else {
        window.localStorage.setItem("Check", "0");
    }
}
if (window.localStorage.getItem("Check") == "1")
{
    var isEmpty = document.getElementById("Par_empty");
    
    isEmpty.innerHTML = "Email cannot be empty";

}
else if (window.localStorage.getItem("Check") == "2") {
    var isEmpty = document.getElementById("Par_empty");

    isEmpty.innerHTML = "Password cannot be empty";


}
else if (window.localStorage.getItem("Check") == "3") {
    var isEmpty = document.getElementById("Par_empty");

    isEmpty.innerHTML = "Password and Email cannot be empty";

}
else {
    isEmpty.innerHTML = "";

}


