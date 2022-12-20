// Necessary variables
let computerGuess;
let userGuess = [];
let gameArea = document.getElementById("gameArea");
let welcomeScreen = document.getElementById("welcomeScreen");
let maxGuess;
let guesses = document.getElementById("guesses");
let headerTitle = document.getElementById("title");
let inputBox = document.getElementById("inputBox");
let newGameBtn = document.getElementById("newGameButton");
let music = new Audio("./audio/1.wav");
let gameLost = new Audio("./audio/game_lost.wav");
let gameWin = new Audio("./audio/game_win.wav");

const init = function () {
  computerGuess = Math.floor(Math.random() * 100);
  gameArea.style.display = "none";
};

// function for game start to end everything
const startGame = function () {
  welcomeScreen.style.display = "none";
  gameArea.style.display = "block";
};

// handel start new game when click the button
const newGameBegin = () => {
  music.play();
  window.location.reload();
};

// Handel new game section
const startNewGame = function () {
  newGameBtn.style.display = "block";
  inputBox.setAttribute("disabled", true);
};

// main logic for the game
const compareGuess = function () {
  music.play();
  const userNums = +inputBox.value;

  // Handel previous user's guess
  userGuess = [...userGuess, userNums];
  document.getElementById("guesses").innerHTML = userGuess;

  // check the value is low or high
  if (userGuess.length < maxGuess) {
    if (userNums > computerGuess) {
      headerTitle.innerHTML = "You guess is High 😲";
      inputBox.value = null;
    } else if (userNums < computerGuess) {
      headerTitle.innerHTML = "You guess is Low 😔";
      inputBox.value = null;
    } else {
      gameWin.play();
      headerTitle.innerHTML = "Congratulation 🎉 It's Currect 🥳";
      inputBox.value = null;
      startNewGame();
    }
  } else {
    if (userNums > computerGuess) {
      gameLost.play();
      headerTitle.innerHTML = `Sorry, you lost 😞, correct number was  ${computerGuess}`;
      inputBox.value = null;
      startNewGame();
    } else if (userNums < computerGuess) {
      headerTitle.innerHTML = "You guess is Low 😔";
      inputBox.value = null;
      startNewGame();
    } else {
      headerTitle.innerHTML = "Congratulation 🎉 It's Currect 🥳";
      inputBox.value = null;
      startNewGame();
    }
  }

  // Handel user's attempts
  const attempts = document.getElementById("attempts");
  attempts.innerHTML = userGuess.length;
};

// Handel the game modes
const easyMode = function () {
  music.play();
  startGame();
  maxGuess = 10;
};

const hardMode = function () {
  music.play();
  startGame();
  maxGuess = 5;
};
