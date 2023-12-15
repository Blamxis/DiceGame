// Sélection des élément du DOM et stockage dans une variable.
const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
const newGameBtn = document.querySelector(".new");

// Variables
let scores, roundScore, activePlayer, gamePlaying;
let diceRolled = false;