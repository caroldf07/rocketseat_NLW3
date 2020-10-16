//create map
const map = L.map("mapid").setView([-25.4906671,-50.6550479], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/pakua-padrao1.png",
    iconSize: [58,58],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id,name,lat,lng}){
    //create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href=school?id=${id}" class ="choose-school"> <img src="/images/arrow-white.svg"></a>`)

//create and add marker
L.marker([lat,lng],{ icon })
    .addTo(map)
    .bindPopup(popup)
    .openPopup();
}

const schoolsSpan = document.querySelectorAll('.schools span')
schoolsSpan.forEach(span => {
    const school = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(school)
})