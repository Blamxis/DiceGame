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
    document.querySelector("#current-0").textContent = '0';
    document.querySelector("#current-1").textContent = '0';
    document.querySelector("#score-0").textContent = '0';
    document.querySelector("#score-1").textContent = '0';
  
    document.querySelector(".panel_1").classList.add('active');
    document.querySelector(".panel_2").classList.remove('active');
  
  }