var markers = [
  {
    kategori: "kantor_camat",
    icon: getIcon("camat.png"),
    data: [
      {
        name: "kantor camat Sekarbele",
        latlang: [-8.610980825657993, 116.0762613109749],
      },
      {
        name: "kantor camat Ampenan",
        latlang: [-8.579344598319574, 116.08255880861829],
      },
      {
        name: "kantor camat Mataram",
        latlang: [-8.59384903190393, 116.11221042396211],
      },
      {
        name: "kantor camat Selaparang",
        latlang: [-8.563605324170537, 116.11770843560267],
      },
      {
        name: "kantor camat Cakranegara",
        latlang: [-8.56614734450932, 116.13557732211034],
      },
      {
        name: "kantor camat Sandubaya",
        latlang: [-8.592841781412973, 116.15168799512611],
      },
    ],
  },
  {
    kategori: "keamanan",
    icon: getIcon("keamanan.png"),
    data: [
      {
        name: "polsek Sandubaya",
        latlang: [-8.591119738633582, 116.14620444964207],
      },
      {
        name: "polsek Cakranegara",
        latlang: [-8.590914354012911, 116.14566648452298],
      },
      {
        name: "polsek Selaparang",
        latlang: [-8.577962815101749, 116.11954183930546],
      },
      {
        name: "polsek Mataram",
        latlang: [-8.592156864101161, 116.11327116629022],
      },
      {
        name: "polsek Sekarbela",
        latlang: [-8.616477667004833, 116.07717956814184],
      },
      {
        name: "polsek Ampenan",
        latlang: [-8.58511674824054, 116.07757630695917],
      },
    ],
  },
  {
    kategori: "kesehatan",
    icon: getIcon("kesehatan.png"),
    data: [
      {
        name: "puskesmas Mataram",
        latlang: [-8.583881775157742, 116.10578445279793],
      },
      {
        name: "puskesmas tanjung karang",
        latlang: [-8.598808154663065, 116.08407685288775],
      },
      {
        name: "puskesmas ampenan",
        latlang: [-8.569717064783932, 116.07677026629001],
      },
      {
        name: "puskesmas cakra negara",
        latlang: [-8.59458140233281, 116.14567289602482],
      },
      {
        name: "puskesmas sandubaya",
        latlang: [-8.589811787779709, 116.16030044909527],
      },
      {
        name: "puskesmas selaparang",
        latlang: [-8.56427954989531, 116.1223013095144],
      },
    ],
  },
  {
    kategori: "pendidikan",
    icon: getIcon("pendidikan.png"),
    data: [
      {
        name: "SDN 1 Ampenan",
        latlang: [-8.575720052923423, 116.07997194611886],
      },
      {
        name: "SDN 40 Ampenan",
        latlang: [-8.597409991722403, 116.09305572850836],
      },
      {
        name: "SDN 7 Mataram",
        latlang: [-8.58201736778045, 116.10205915429559],
      },
      {
        name: "sdn 32 Mataram",
        latlang: [-8.57822710858172, 116.10008147998968],
      },
      {
        name: "SDN 3 Mataram",
        latlang: [-8.56002194760386, 116.11016658618216],
      },
      {
        name: "SDN 7 Mataram",
        latlang: [-8.562398428257241, 116.11372855970268],
      },
    ],
  },
  {
    kategori: "pariwisata",
    icon: getIcon("pariwisata.png"),
    data: [
      {
        name: "wisata Pantai meninting",
        latlang: [-8.55229766189273, 116.06948966163314],
      },
      {
        name: "wisata Kolam jodoh",
        latlang: [-8.571731522785917, 116.10386368317026],
      },
      {
        name: "wisata pantai Ampenan",
        latlang: [-8.568502017561809, 116.07262124143756],
      },
      {
        name: "wisata fiong siu babakan",
        latlang: [-8.61214962586956, 116.13868574440093],
      },
      {
        name: "wisata Tembolak pelangi mentaram",
        latlang: [-8.623856140820054, 116.09834524983178],
      },
      {
        name: "wisata Pantai gading",
        latlang: [-8.615539741095544, 116.07585760977459],
      },
    ],
  },
];
function getIcon(icon) {
  var greenIcon = L.icon({
    iconUrl: "assets/images/" + icon,
    iconSize: [45, 45],
    iconAnchor: [22, 44],
    popupAnchor: [-3, -76],
  });
  return greenIcon;
}
