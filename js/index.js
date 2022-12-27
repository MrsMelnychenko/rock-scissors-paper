function game() {
  const playerOptions = [
    {
      name: "paper",
      element: document.querySelector(".paper"),
    },
    {
      name: "rock",
      element: document.querySelector(".rock"),
    },
    {
      name: "scissors",
      element: document.querySelector(".scissors"),
    },
  ];
  const playerAvatar = document.querySelector(".player-avatar");
  const computerAvatar = document.querySelector(".computer-avatar");
  const mottoFooter = document.querySelector(".choice");
  let playerWin = 0;
  let computerWin = 0;
  let playerLoss = 0;
  let computerLoss = 0;
  function play() {
    const computerOptions = ["rock", "paper", "scissors"];
    for (const option of playerOptions) {
      option.element.addEventListener("click", function () {
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        console.log(computerChoice);
        winner(option.name, computerChoice);
      });
    }
  }
  function winner(player, computer) {
    if (player === computer) {
      mottoDraw();
    }
    if (player === "rock" && computer === "paper") {
      mottoLose();
      setTimeout(jumpingComputer, 200);
      setTimeout(resetJumpComputer, 400);
      lossCounter()
    }
    if (player === "rock" && computer === "scissors") {
      mottoWin();
      setTimeout(jumpingPlayer, 200);
      setTimeout(rotate, 200);
     setTimeout(resetJump, 1400);
      setTimeout(resetRotate, 1500);
      winCounter()
    }
    if (player === "scissors" && computer === "rock") {
      mottoLose();
      setTimeout(jumpingComputer, 200);
      setTimeout(resetJumpComputer, 400);
      lossCounter()
    }
    if (player === "scissors" && computer === "paper") {
      mottoWin();
      setTimeout(jumpingPlayer, 200);
      setTimeout(rotate, 200);
       setTimeout(resetJump, 1400);
      setTimeout(resetRotate, 1500);
      winCounter()
    }
    if (player === "paper" && computer === "scissors") {
      mottoLose();
      setTimeout(jumpingComputer, 200);
      setTimeout(resetJumpComputer, 400);
      lossCounter()
    }
    if (player === "paper" && computer === "rock") {
      mottoWin();
      setTimeout(jumpingPlayer, 200);
      setTimeout(rotate, 400);
      setTimeout(resetJump, 1400);
      setTimeout(resetRotate, 1500);
      winCounter()
    }
  }
//Counter change function
  function winCounter() {
    computerLoss++;
      playerWin++;
      document.querySelector(".player-win-counter").textContent = playerWin;
      document.querySelector(".computer-loss-counter").textContent = computerLoss;
  }
  function lossCounter() {
    computerWin++;
      playerLoss++;
      document.querySelector(".player-loss-counter").textContent = playerLoss;
      document.querySelector(".computer-win-counter").textContent = computerWin;
  }

  // Motto changing
  function mottoWin() {
    mottoFooter.textContent = "You Win!";
    mottoFooter.style.color = "green";
  }
  function mottoLose() {
    mottoFooter.textContent = "You Lose!";
    mottoFooter.style.color = "red";
  }
  function mottoDraw() {
    mottoFooter.textContent = "Draw!";
    mottoFooter.style.color = "grey";
  }

  //   Animation of jumps
  function jumpingPlayer() {
    playerAvatar.style.marginTop = "-60px";
  }
  function jumpingComputer() {
    computerAvatar.style.marginTop = "-60px";
  }
  function resetJump() {
    playerAvatar.style.marginTop = "0px";
  }
  function resetJumpComputer() {
    computerAvatar.style.marginTop = "0px";
  }
  function rotate() {
    playerAvatar.classList.add("animation");
  }
  function resetRotate() {
    playerAvatar.classList.remove("animation");
  }
  play();
}
game();
