// Sélection des élément du DOM et stockage dans une variable.
const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
const newGameBtn = document.querySelector(".new");

// Variables
let scores, roundScore, activePlayer, gamePlaying;
let diceRolled = false;

// Initialise le jeu
function initGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  diceRolled = false;

  // Réinitialiser le dé à la face 1
  dice.style.transform = "rotateX(0deg) rotateY(0deg)";

  // Réinitialiser l'affichage du score et du score actuel pour chaque joueur
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";

  document.querySelector("#name-0").textContent = "Joueur 1";
  document.querySelector("#name-1").textContent = "Joueur 2";

  document.querySelector(".panel_1").classList.add("active");
  document.querySelector(".panel_2").classList.remove("active");
}

// Lance un dé aléatoire et met à jour le score
function randomDice() {
  if (gamePlaying) {

    holdBtn.disabled = true;

    let diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.style.animation = "rolling 6s";

    setTimeout(() => {
      setDiceFace(diceNumber);
      dice.style.animation = "none";
      if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
      } else {
        document.querySelector("#current-" + activePlayer).textContent = "0";
        nextPlayer();
      }
      holdBtn.disabled = false;
    }, 6050);

    diceRolled = true;
  }
}

// Ajuste la face du dé en fonction du numéro
function setDiceFace(number) {
    switch (number) {
      case 1:
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
  
      case 6:
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
  
      case 2:
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
  
      case 5:
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
  
      case 3:
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
  
      case 4:
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
    }
  
    dice.style.animation = "none";
  }

// Conserve le score et passe au joueur suivant
function holdScore() {
    if (gamePlaying && diceRolled) {
      scores[activePlayer] += roundScore;
      document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];
  
      document.querySelector("#current-" + activePlayer).textContent = 0;
  
      if (scores[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner !";
        document.querySelector("#name-" + (activePlayer === 0 ? 1 : 0)).textContent = "Loser";
        gamePlaying = false;
      } else {
        nextPlayer();
      }
    }
  }

// Passe au joueur suivant
function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    diceRolled = false;
   
    // Bascule la classe active
    document.querySelector(".panel_1").classList.toggle('active');
    document.querySelector(".panel_2").classList.toggle('active');
  
}

// Écouteurs d'événements
rollBtn.addEventListener("click", randomDice);
holdBtn.addEventListener("click", holdScore);
newGameBtn.addEventListener("click", initGame);

initGame();