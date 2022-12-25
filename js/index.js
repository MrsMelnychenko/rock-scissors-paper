const clickPaper = document.querySelector(".paper");
const playerAvatar = document.querySelector(".player-avatar");

function changeCounter() {
  alert("You win!");
}

function addToCounter() {
  document.querySelector(".player-js-counter").textContent += 1;
}

// function jumpingPlayer() {
//   document.querySelector(".player-avatar").top = 0;
// }
clickPaper.addEventListener("click", changeCounter);
clickPaper.addEventListener("click", addToCounter);
