
    "use strict";
    var url = "http://192.168.88.240:80/tuksbooks/json.php";
    var url1 = "http://gobooks.000webhostapp.com/json.php";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", url1);
    var type = 0;
    ourRequest.onload = function () {
        type = 1;
        var ourData = JSON.parse(ourRequest.responseText);
        document.getElementById("par").innerHTML = ourData[0].title;
    };
    ourRequest.send();
    if (type != 1) {
        document.getElementById("par").innerHTML = "Connecting...";

    }
    /*
$(document).ready(function(){

$.getJSON(url,function(result){
//console.log(result);
$.each(result,function(i,field){
var id=field.id;
var title=field.Title;
var faculty=field.Faculty;
$("p").text(id + " " + title + " " + faculty);

});

});



});*/

