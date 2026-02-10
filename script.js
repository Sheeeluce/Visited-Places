const btn = document.getElementById("addPlaceBtn");
const card = document.getElementById("placeCard");
card.classList.add("placeCard");


btn.addEventListener("click", () => {
  card.classList.toggle("hidden");
});
  
const addPlace = document.getElementById("addPlaceBtn");
const placeList = document.getElementById("place-list");

addPlace.addEventListener("click", () => {
  const countryName = document.getElementById("countryname").value;
  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;
}) 

card.innerHTML = `<h3>${countryName}</h3>
<p><strong>Category:</strong>${category}</p>
<p><strong>Location:</strong>${location}</p>
<p><strong>Date</strong>${date}</p>
<p><strong>Landmarks:</strong> ${landmarks}</p>`



