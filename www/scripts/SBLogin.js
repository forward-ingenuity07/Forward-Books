$(document).ready(function () {

    window.localStorage.setItem("succeeding", "0");
    if (window.localStorage.getItem("logged_in") != "1") {

        $("#login").click(function () {

            var email = $("#ema").val();
            var password = $("#pas").val();
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   //Regexp to check if email is valid
           
            if ($.trim(email).length > 0 & $.trim(password).length > 0 & email.match(re) !== null) {
                var url1 = "http://forwardingenuity.com/json_users.php"; //Get url of php file containing json

                var ourRequest = new XMLHttpRequest(); //create XMLHttpRequest object to request for the JSON data
                ourRequest.open("GET", url1);   //Opening...    
                 //container div
                ourRequest.onload = function () {
                   


                    //request has loaded
                    //window.localStorage.setItem("Holding", ourRequest.responseText);
                    var ourData = JSON.parse(ourRequest.responseText);      //change the received response text to an actuall array of objects
                    var books = 0;        //any books under the faculty?
                    console.log(ourData);

                    //var ourData2 = JSON.parse(window.localStorage.getItem("Holding"));
                    var info_length = (ourData.length);
                    
                    for (var i = 0; i < info_length; i++) {
                        if (ourData[i].email == email && ourData[i].password == password)    //find books under faculty
                        {
                            window.localStorage.setItem("emai", ourData[i].email);
                            window.localStorage.setItem("Alreadr_member", "1");
                            window.location.replace("userPage.html");

                        }
                        //books++;
                        else
                        {
                                
                        }

                    }
                    if (books == 0) {
                        //alert("No books available");
                        //No books in the div
                        $("#Par_empty").text("Email/Password combination is not valid");

                    }

                    /*var par = document.createElement('p');
                    par.id = "paragraph" + i;*-
                    par.innerHTML = '<strong>' + ourData2[1].title + '</strong>' + '<br />' + 'R400' + '&nbsp &nbsp &nbsp' + '0739995999';
                    outDiv.appendChild(par);
                  */

                }
                ourRequest.send();
                            //Go to succeeded page
            }
            else if (email.match(re) === null & $.trim(email).length > 0) {
                $("#Par_empty").text("Email is not valid");

            }
            else if ($.trim(email).length == 0 | $.trim(password).length == 0) {
                $("#Par_empty").text("Email and Password cannot be empty");

            }

           

            return false;

        });

    }
    else {
        window.location.replace("index.html");


    }


});

function signClick(){
    window.location.href = "signUp.html";

}

/*

$(document).ready(function () {
    $("#insert").click(function () {        //click event

        var email = $("#ema").val();        //Input with id=ema stored in email variable 
        var password = $("#pas").val();
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   //Regexp to check if email is valid
        var dataString = "email=" + email + "&password=" + password + "&insert=";   //concatination of inputs(insert is an input too, remember in php file we use isser(_POST['insert']))
        var confirm_password = $("#pas_conf").val();

        if ($.trim(email).length > 0 & $.trim(password).length > 0 & email.match(re) !== null & password == confirm_password) {           //If strings aren't empty
        
            $.ajax({
                type: "POST",                                                   //Method stated
                url: "http://forwardingenuity.com/insert_user.php",             //url of insert
                data: dataString,                                               //string
                crossDomain: true,
                cache: false,
                beforeSend: function () { $("#insert").val('Connecting...'); },
                success: function (data) {
                    if (data == "success") {                //Go to page of user
                        alert("inserted");
                        $("#insert").val('submit');
                    }
                    else if (data == "error") {             //executed if user is banned or not signed up(Check how to see if email address is valid)
                        alert("error");
                    }
                }
            });
            window.location.href = "signUp.html";
        }
        /*else if (email.match(re) === null & $.trim(email).length > 0)
        {
            $("#Par_empty").text("Email is not valid");

        }
        else if ($.trim(email).length == 0 & $.trim(password).length == 0)
        {
            $("#Par_empty").text("Email and Password cannot be empty");

        }
        else if (password != confirm_password)
        {
            $("#Par_empty").text("Password and confirmed password do not match");

        }*/
/*      return false;
  });
});*/

