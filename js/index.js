const clickPaper = document.querySelector(".paper");
const playerAvatar = document.querySelector(".player-avatar");
const mottoFooter = document.querySelector(".choice");

function addToCounter() {
  document.querySelector(".player-js-counter").textContent += 1;
}
function jumpingPlayer() {
  playerAvatar.style.marginTop = "-20px";
}
function resetJump() {
  playerAvatar.style.marginTop = "0px";
}
function mottoWin() {
  mottoFooter.textContent = "You Win!";
  mottoFooter.style.color = "green";
}
function resetMotto() {
  mottoFooter.textContent = "Make your choice!";
  mottoFooter.style.color = "black";
}

clickPaper.addEventListener("click", addToCounter);
clickPaper.addEventListener("click", mottoWin);
clickPaper.addEventListener("click", () => {
  setTimeout(resetMotto, 2000);
});
clickPaper.addEventListener("click", jumpingPlayer);
clickPaper.addEventListener("click", () => {
  setTimeout(resetJump, 200);
});
