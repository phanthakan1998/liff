let map;
var position = { lat: 13.84786, lng: 100.604274 };
// const image =
//     "https://www.flaticon.com/svg/vstatic/svg/1141/1141121.svg?token=exp=1615609037~hmac=e4112a99bb2d5e52fd7ccfc5f96699f9";
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 15,
  });
  infoWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("คุณอยู่ที่นี่");
        infoWindow.open(map);
        map.setCenter(pos);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          // icon: image, 
          
        });
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "Hello World!",
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
  var marker, i, info;
}