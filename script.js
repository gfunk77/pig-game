"use strict";

// Selecting Elements
const score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const diceEl = document.querySelector(`.dice`);

// Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add(`hidden`);
let currentScore = 0;

// Roll dice functionality
btnRoll.addEventListener(`click`, function () {
  // Generate random value from roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   Display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1. If true, switch to the next player.
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    // switch to the next player
  }
});
