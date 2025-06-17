
let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);

const guessInput = document.querySelector('#inputField')
const submit = document.querySelector('#submt')
const guessSlot = document.querySelector('.prevGuesses')
const remainingGuess = document.querySelector('.remaining')
const outCome = document.querySelector('.lowOrHi')
const startOver = document.querySelector('#result');


// created a element para, inject this para wherever needed
const p = document.createElement('p');

// array space where the all user guesses are store  (i.e. 10 guesses)
let prevGuess = [];

// for Counting remaining guesses starting 1 to 10 , then after disable to take inputes
let numGuess = 1;

// Inisitialise to start Game play that should be true - mean all are setup for play
let playGame = true;


// ++++++++++++++++++++++++    start logic    ++++++++++++++++++++

// Is game available for play to setup the game to start
if(playGame) {
 submit.addEventListener('click', function(e){
    e.preventDefault();

    const guess = parseInt(guessInput.value);
    console.log(guess);
    validateGuess(guess);
 })
}

//  Function for Validating guess from UserInput numbers and what min & max number limit
function validateGuess(guess) {
    if (isNaN(guess)) {
    alert('Please Enter a valid Number');
  } else if (guess <= 0) {
    alert('Please Enter above 1');
  } else if (guess > 100) {
    alert('Please Enter below 101');
  }
  else{
   prevGuess.push(guess); // store the guesses in array

   if (numGuess >= 5) {
     displayGuess(guess);
     displayMessage(`Ohh Buddy Game Over, the no. is ${randomNum} ! `);
     endGame();
   }
   else{
      displayGuess(guess);
      checkGuess(guess);
   }
  }
}

// Clear inputField, push all guesses in previous guess and decrease the remaining guesses.

function displayGuess(guess) {
  guessInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remainingGuess.innerHTML = `${6 - numGuess}`;
}


// Fn for check the all possible Guesses can be happen, that entered by User
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(' Hey buddy, You are correct ! ');
    endGame();
  } else if (guess < randomNum) {
    displayMessage(' Too low, try again !');
  } else {
    displayMessage(' Too High, try again !');
  }
}

function displayMessage(message) {
  outCome.innerHTML = `<h2> ${message}</h2>`;
}

function endGame(message){
 guessInput.value = '';
 guessInput.setAttribute('disabled', '')
 p.classList.add('button')
 p.innerHTML = ` <h3 id ='newGame' > Start Again ! </h3>  `;
 startOver.appendChild(p);
 playGame = false;
 newGame();
}


function newGame (message) {
 const startAgain = document.querySelector('#newGame')
 startAgain.addEventListener('click', function(e){
  //  userInput.value = '';
   randomNum = parseInt(Math.random() * 100 + 1);
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = '';
   outCome.innerHTML = '';
   remainingGuess.innerHTML = `${6 - numGuess}`;
   guessInput.removeAttribute('disabled', '');
   startOver.removeChild(p);
   
   playGame = true;
 })
}