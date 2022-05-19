// Google Maps customization

window.onload = function() {
    var myOptions = {
        center: new google.maps.LatLng(40.736370094611054, -84.16087869852069),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
}