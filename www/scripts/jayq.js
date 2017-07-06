
$(document).ready(function () {
    start = 0;          //Value at top of scroll bar
    $(document).scroll(function () {        //Upon scroll event
        
        if($(window).scrollTop().valueOf()==start)  //Remember the .valueOf(), otherwise it will only return an object
        {
            $(".navbar-default").css('background-color', '#f8f8f8');        //Change the colour of the navbar-default class


        }
        else {
            
            
            $(".navbar-default").css('background-color', 'transparent');    //Change colour
            
        }
        



    });
});
window.localStorage.setItem("Check", "0");