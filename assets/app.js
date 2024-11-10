var OpenTopoMap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }
);
var map = L.map("map", {
  center: [-8.588897, 116.10929],
  zoom: 13,
  layers: [OpenTopoMap],
});
var layerGroup = {};
for (const kategori in markers) {
  let data = markers[kategori].data;
  let name = markers[kategori].kategori;
  let icon = markers[kategori].icon;
  layerGroup[name] = L.layerGroup().addTo(map);
  data.forEach((marker) => {
    let groupMarker = [];
    let mark = L.marker(marker.latlang, { icon: icon })
      .bindPopup(marker.name)
      .addTo(layerGroup[name]);
    groupMarker.push(mark);
  });
}
var layerControl = L.control.layers({ OpenTopoMap }, layerGroup).addTo(map);

var a = L.geoJSON(jsonmataram, {
  style: function (features) {
    return { color: "#1c73ff" };
  },
})
  .bindPopup(function (layer) {
    return layer.feature.properties.NAMOBJ;
  })
  .addTo(map);
