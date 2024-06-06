let map;

export async function initMap() {

  const position = { lat: 41.37861783671099, lng: 2.171222071164361};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    zoomControl:false,
    center: position,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl:false,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "filmoteca",
  });
}

 initMap();


