var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenWord = "";
var numBlanks = 1;
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

function init() {
  getWins(); 
  getlosses();
}

function getWins(){
  winCounter = localStorage.getItem("win");
}

function getlosses(){
  loseCounter = localStorage.getItem("lose");
}


startButton.addEventListener("click", function() {
  timer = 10;
  countDown();
  });


function countDown(){

  timerCount = setInterval(function() {
    
  if (timer >= 0) {
    timerElement.textContent = timer;
    timerCount = timer--;
    
    if (timerCount === 0) {
      console.log(timerCount);
      loseCheck();
      timer = 10;
      } 
  }
  
}, 200);

function loseCheck() {
    if(numBlanks > 0) {
      loseCounter++;
      lose.textContent = loseCounter;
      }
    } 
}



