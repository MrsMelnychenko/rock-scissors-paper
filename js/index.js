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
    } else if (player === "rock") {
      if (computer === "paper") {
        mottoLose();
        computerWin++;
        playerLoss++;
        document.querySelector(".player-loss-counter").textContent = playerLoss;
        document.querySelector(".computer-win-counter").textContent =
          computerWin;
      } else {
        mottoWin();
        computerLoss++;
        playerWin++;
        document.querySelector(".player-loss-counter").textContent = playerWin;
        document.querySelector(".computer-win-counter").textContent =
          computerLoss;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        mottoLose();
        computerWin++;
        playerLoss++;
        document.querySelector(".player-loss-counter").textContent = playerLoss;
        document.querySelector(".computer-win-counter").textContent =
          computerWin;
      } else {
        mottoWin();
        computerLoss++;
        playerWin++;
        document.querySelector(".player-loss-counter").textContent = playerWin;
        document.querySelector(".computer-win-counter").textContent =
          computerLoss;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        mottoLose();
        computerWin++;
        playerLoss++;
        document.querySelector(".player-loss-counter").textContent = playerLoss;
        document.querySelector(".computer-win-counter").textContent =
          computerWin;
      } else {
        mottoWin();
        computerLoss++;
        playerWin++;
        document.querySelector(".player-loss-counter").textContent = playerWin;
        document.querySelector(".computer-win-counter").textContent =
          computerLoss;
      }
    }
  }

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
  function resetMotto() {
    mottoFooter.textContent = "Make your choice!";
    mottoFooter.style.color = "black";
  }
  //Animation of jumps
  //   function jumpingPlayer() {
  //     playerAvatar.style.marginTop = "-40px";
  //   }
  //   function resetJump() {
  //     playerAvatar.style.marginTop = "0px";
  //   }
  //   paper.addEventListener("click", mottoWin);
  //   paper.addEventListener("click", () => {
  //     setTimeout(resetMotto, 2000);
  //   });
  //   paper.addEventListener("click", jumpingPlayer);
  //   paper.addEventListener("click", () => {
  //     setTimeout(resetJump, 200);
  //   });
  play();
}
game();
