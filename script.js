const addBtn = document.getElementById("addPlaceBtn");
const card = document.getElementById("placeCard");
const saveBtn = document.getElementById("savePlaceBtn");
const placeList = document.getElementById("place-list");


addBtn.addEventListener("click", () => {
  card.classList.toggle("hidden");
});
  

saveBtn.addEventListener("click", () => {
  const countryName = document.getElementById("countryname").value;
  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;




const newCard = document.createElement("div");
newCard.classList.add("place-card");

newCard.innerHTML =
`<h3>${countryName}</h3>
<p><strong>Category:</strong>${category}</p>
<p><strong>Location:</strong>${location}</p>
<p><strong>Date:</strong>${date}</p>
<p><strong>Landmarks:</strong>${landmarks}</p>
<p>${notes}</p>
<button class ="delete-btn">Delete</button>`;

newCard.querySelector(".delete-btn").addEventListener("click", () => {
    newCard.remove();
  });

placeList.appendChild(newCard);
card.classList.add("hidden");
});








