$(document).ready(function () {
    start = 0;
    $(document).scroll(function () {
        
        if($(window).scrollTop().valueOf()==start)
        {
            $(".navbar-default").css('background-color', '#222');


        }
        else {
            
            
            $(".navbar-default").css('background-color', 'transparent');
            
        }
        



    });
});