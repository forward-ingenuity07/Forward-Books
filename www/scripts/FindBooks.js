var url = "http://192.168.88.240/tuksbooks/json.php";
var url1 = "https://learnwebcode.github.io/json-example/animals-1.json";
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", url1);
ourRequest.onload = function () {

    var ourData = JSON.parse(ourRequest.responseText);
    document.getElementById("par").innerHTML = ourData[0].name
    //console.log(ourData[0].name);
};
ourRequest.send();

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
