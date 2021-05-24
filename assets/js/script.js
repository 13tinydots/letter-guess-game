var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];

var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
init();

function init() {
  getWins(); 
  getlosses();
}

function getWins(){
  winCounter = localStorage.getItem("winCounter");
  win.innerText = winCounter
}

function getlosses(){
  loseCounter = localStorage.getItem("loseCounter");
  lose.innerText = loseCounter; 
}

function countDown(){
  timerCount = setInterval(function() {
    
  if (timer >= 0) {
    timerElement.innerText = timer;
    timerCount = timer--;
    if (isWin) {
      winAdd();
      timer = 10;
    }
    
    if (timerCount === 0) {
      loseCheck();
      timer = 10;
      } 
  }
  
}, 100);


function loseCheck() {
  
  if(numBlanks > 0) {
    loseCounter++;
    localStorage.setItem("loseCounter", loseCounter);
    lose.innerText = loseCounter;
    } else {
      isWin = true;
      winAdd();
      }
    } 

function winAdd() {

  if (isWin) {
    winCounter++;
    localStorage.setItem("winCounter", winCounter);
    win.innerText = winCounter;
    isWin = false;
    }

  }

}

startButton.addEventListener("click", function() {
  timer = 10;
  countDown();
  });

