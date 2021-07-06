require( 'waypoints/lib/noframework.waypoints.js' )
const el = document.querySelector( '.counter' )
new Waypoint( {
    element: el,
    handler: function() { 
        counterUp( el ) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
// for sticky navigation
$(document).ready(function () {
    //dESIGNING STICKY MENU//
    $(".js--services-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
       
        } else {
            $("nav").removeClass("sticky");
           
        }
    });



//    smooyh scroll for ie/edge/safari




});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}