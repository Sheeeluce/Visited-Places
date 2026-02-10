const btn = document.getElementById("addPlaceBtn");
const card = document.getElementById("placeCard");

btn.addEventListener("click", () => {
  card.classList.toggle("hidden");
});

const addPlace = document.getElementById("addPlaceBtn");
const placeList = document.getElementById("place-list");

addPlace.addEventListener("click", () => {
  const placeName = document.getElementById("placename").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;
})