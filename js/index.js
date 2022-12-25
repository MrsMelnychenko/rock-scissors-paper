const clickPaper = document.querySelector(".paper");
const playerAvatar = document.querySelector(".player-avatar");
const mottoFooter = document.querySelector(".choice");

function addToCounter() {
  document.querySelector(".player-js-counter").textContent += 1;
}
// function jumpingPlayer() {
//   playerAvatar.style.marginTop = "-20px";
// }
// let i = 1;
// setTimeout(function jumpingPlayer() {
//   func(i);
//   setTimeout(jumpingPlayer, 1000);
// }, 1000);
// setTimeout(function jumpingPlayerBack() {
//   playerAvatar.style.marginTop = "0px";
// }, 1000);
function mottoWin() {
  mottoFooter.textContent = "You Win!";
  mottoFooter.style.color = "green";
}
setTimeout(function resetMotto() {
  mottoFooter.textContent = "Make your choice!";
  mottoFooter.style.color = "black";
}, 5000);

clickPaper.addEventListener("click", addToCounter);
clickPaper.addEventListener("click", mottoWin);
clickPaper.addEventListener("click", resetMotto);
// clickPaper.addEventListener("click", jumpingPlayer);
// clickPaper.addEventListener("click", jumpingPlayerBack);
