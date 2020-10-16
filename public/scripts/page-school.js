const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scroolWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map("mapid", options).setView([-25.4906671,-50.6550479], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/pakua-padrao1.png",
    iconSize: [58,58],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and add marker
L.marker([-25.4906671,-50.6550479],{ icon })
    .addTo(map)
    .openPopup();

//image gallery

function selectImage(event){
    const button = event.currentTarget

    //remove all classes active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //select the image clicked

    const image = button.children[0]
    const imageContainer = document.querySelector("#school-details > img")

    //refresh container image
    imageContainer.src = image.src

    //add class active
    button.classList.add('active')
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
  }