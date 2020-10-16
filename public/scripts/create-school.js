//create map
const map = L.map("mapid").setView([-25.4906671, -50.6550479], 16);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/pakua-padrao1.png",
  iconSize: [58, 58],
  iconAnchor: [29, 68],
});

let marker;
//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name = lat]").value = lat;
  document.querySelector("[name = lng]").value = lng;

  //remove icon layer
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photos
function addPhotoField() {
  //select photos container #images
  const container = document.querySelector("#images");
  //catch container to duplicate .new-upload
  const fieldContainer = document.querySelectorAll(".new-upload");
  //copy of last image added
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(
    true
  );
  //verify if is empty
  const input = newFieldContainer.children[0];

  if (input.value == 0) {
    return;
  }
  //clean before add
  input.value = "";
  //add copy to container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldContainer = document.querySelectorAll(".new-upload");

  if (fieldContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  //delete image
  span.parentNode.remove();
}

//yes or no

function toggleSelect(event) {
  //button clicked and remove class.active both
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

    //add class .active
  const button = event.currentTarget
  button.classList.add('active')
  //remove hidden
    const input = document.querySelector('[name=opening-weekends]')
    input.value = button.dataset.value

  
}
