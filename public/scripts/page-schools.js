//create map
const map = L.map("mapid").setView([-25.4906671,-50.6550479], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/pakua-padrao1.png",
    iconSize: [58,58],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Pakua Central <a href="schools.html?id=1" class ="choose-school"> <img src="./public/images/arrow-white.svg"></a>')

//create and add marker
L.marker([-25.4906671,-50.6550479],{ icon })
    .addTo(map)
    .bindPopup(popup)
    .openPopup();