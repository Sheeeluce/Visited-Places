const btn = document.getElementById("addPlaceBtn");
const card = document.getElementById("placeCard");

btn.addEventListener("click", () => {
  card.classList.toggle("hidden");
});
