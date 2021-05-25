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
var guess = [];

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
  getAnswer();
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
// set milliseconds here  
}, 100);

function getAnswer() {
  chosenWord = Math.floor(Math.random() * words.length);
  console.log(chosenWord);

}

function checkGuess() {
  // function that parses guessed letters against the answer
  // builds an answer array that resembles the answer based on correct
  // answers and pushes it to the screen
  // if the guess doesn't result in any new letters added to the answer,
  // then a flag triggers the removal of the answer from the array
  var chosenArray = Array.from(chosenWord);
  var map1 = chosenArray.map((element) => {
    for (guess.index = 0; index < guess.length; index++) {
      if(element !== chosenArray.map.element) { 
        map1.element = "_";
      }
    }
   console.log(map1);
  });
}


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
    guess = [];
    isWin = false;
    getAnswer();
    }

  }



startButton.addEventListener("click", function() {
  timer = 10;
  countDown();
  });

document.addEventListener("keydown", function() {
  guess.push(event.key);
  checkGuess();
  });
}
  


