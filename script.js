const addBtn = document.getElementById("addPlaceBtn");
const card = document.getElementById("placeCard");

addBtn.addEventListener("click", () => {
   card.classList.toggle("hidden"); 
  });

function place(countryName, category, location, landmarks, date, notes) {
  this.countryName = countryName,
  this.category = category,
  this.location = location,
  this.landmarks = landmarks,
  this.date = date,
  this.notes = notes
}

place.prototype.createCard = function () {
  const newCard = document.createElement("div");
  newCard.classList.add("place-card")

  newCard.innerHTML = `
  <h3>${this.countryName}</h3>
  <p><strong>Category:</strong>${this.category}</p>
  
  <button class="delete-btn">Delete</button>
  `;
  newCard.querySelector("h3").addEventListener("click", () => {
    this.showDetails();
  }); 

  newCard.querySelector(".delete-btn").addEventListener("click", () => {
    newCard.remove();
  });

return newCard;
};

place.prototype.showDetails = function () {
  const placeList = document.getElementById("place-list");

  placeList.innerHTML = `
  <h2>${this.countryName}</h2>
  <p><strong>Category:</strong>${this.category}</p>
  <p><strong>Location📍:</strong>${this.location}</p>
  <p><strong>Landmarks:</strong>${this.landmarks}</p>
  <p><strong>Date:</strong>${this.date}</p>
  <p>${this.notes}</p>
  `;
}

const places = [];

const saveBtn = document.getElementById("savePlaceBtn");
const placeList = document.getElementById("place-list");

saveBtn.addEventListener("click", () => {
  const newPlace = new place(
    document.getElementById("countryname").value,
    document.getElementById("location").value,
    document.getElementById("landmarks").value,
    document.getElementById("category").value,
    document.getElementById("date").value,
    document.getElementById("notes").value,
  );

  places.push(newPlace);


  const placeCard = newPlace.createCard(place => place.showDetails());
  placeList.appendChild(placeCard);

  card.classList.add("hidden");

  document.getElementById("countryname").value = "";
  document.getElementById("location").value = "";
  document.getElementById("landmarks").value = "";
  document.getElementById("category").value = "";
  document.getElementById("date").value = "";
  document.getElementById("notes").value = "";
});












