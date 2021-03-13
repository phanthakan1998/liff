let map;
var locations = [
  ["โรงพยาบาลศรีนครินทร์", 16.4680574, 102.8300541],
  ["โรงพยาบาลศูนย์ขอนแก่น", 16.4291172, 102.8491256],
  ["โรงพยาบาลราชพฤกษ์", 16.4488145, 102.8302752],
];

var position = { lat: 16.4741193, lng: 102.8139075 };
const image =
  "https://www.flaticon.com/svg/vstatic/svg/1141/1141121.svg?token=exp=1615609037~hmac=e4112a99bb2d5e52fd7ccfc5f96699f9";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position:position,
    map:map
  })
  
  var infoWindow = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px;">sasdsaddfsdf</div>'
  });

  google.maps.event.addListener(marker, 'click', function(){
    infoWindow.open(map, marker)
  });