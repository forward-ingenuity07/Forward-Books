// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.


function clickFunc() {
    window.localStorage.setItem("Check", "0");
    if (window.localStorage.getItem("logged_in") != "1")
        {
        window.location.href = 'SellBooksLogin.html';
    }
    else {
        window.location.href = "userPage.html";

    }
}

function test() {
    if (window.localStorage.getItem("already_answered") != "1")
        {
    swal({
        title: "Feature coming soon",
        text: "Is this a feature you would be interested in?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6af41a",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false
    },
function (isConfirm) {
    if (isConfirm) {
        swal("Thank you", "Your feedback is appreciated :)", "success");
    } else {
        swal("Thank you", "Your feedback is appreciated :)", "success");
    }
    window.localStorage.setItem("already_answered", "1");
});
    }


    else {

        swal("Feature coming soon","","success");

    }
}

function become_tutor() {
    if (window.localStorage.getItem("already_answered_2") != "1") {
        swal({
            title: "Feature coming soon",
            text: "Is this a feature you would be interested in?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6af41a",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
        },
    function (isConfirm) {
        if (isConfirm) {
            swal("Thank you", "Your feedback is appreciated :)", "success");
        } else {
            swal("Thank you", "Your feedback is appreciated :)", "success");
        }
        window.localStorage.setItem("already_answered_2", "1");
    });
    }


    else {

        swal("Feature coming soon", "", "success");

    }

}

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        window.localStorage.setItem("erring", "2");
        var butFindBooks = document.getElementById("FindBooks");
        butFindBooks.addEventListener("click", function () {
            window.location.href = 'FindBooks.html';
        });
        var butSellBooks = document.getElementById("SellBooks");
        

        
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
       /* document.getElementById("FindBooks").onclick = function () {
        comment
            location.href = 'FindBooks.html';
        }*/
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();