const cards = document.querySelectorAll(".memory-card");
const refresh = document.querySelector(".refresh img");
const final = document.querySelector(".final");
const congrats = document.querySelector("#congratsSection");
const again = document.querySelector(".again");

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let click = -1;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    startTime();
    return;
  }
  //second click
  secondCard = this;
  checkForMatch();
}


function disableCards() {

  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
  gameWon();
}

function unFlipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 700);
}

function resetBoard() {

  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//refresh button
refresh.addEventListener("click", function () {
  confirm("Are you sure that?");
  location.reload();
});


//game won
function gameWon() {
  if (click < 1) {
   
    firstCard = e.target;
  }

  if (document.getElementsByClassName("flip").length === 12) {
    congratsSection.classList.replace("hidden", "show");
    clearInterval(interval);
    finalTime = minute.innerHTML + ":" + second.innerHTML;
    final.innerHTML = "You won in " + finalTime + " time!";
    totalTime.innerHTML = finalTime;
  }
  click = 0;
}

//congrats section
again.addEventListener("click", function () {
  congratsSection.classList.replace("show", "hidden");
  location.reload();
});

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));