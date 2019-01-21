// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assin UI Min & Max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = "green";

    // Set Message
    setMessage(`${winningNum} is correct, YOU WIN!`, "green");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        true,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //Disable input
  guessInput.disabled = true;

  // Change border style
  guessInput.style.borderColor = color;

  //Set Text color
  message.style.color = color;

  //Set message
  setMessage(msg);
}
// Set Message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
