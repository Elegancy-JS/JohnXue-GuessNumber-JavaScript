'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //Allow players to have at most 20 trials.
let highScore = 0; //Record the best guess.

// console.log(`the random number is ${randomNumber}`);
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;

  if (score > 1) {
    if (!guess) {
      document.querySelector(`.message`).textContent = `No input!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else if (guess > 20) {
      document.querySelector(`.message`).textContent = `Input a number (1-20).`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else if (guess < 1) {
      document.querySelector(`.message`).textContent = `Input a number (1-20).`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else if (guess > randomNumber && guess <= 20) {
      document.querySelector(`.message`).textContent = `Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else if (guess < randomNumber && guess >= 0) {
      document.querySelector(`.message`).textContent = `Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `Correct!`;
      document.querySelector(`body`).style.backgroundColor = `#c02d2d`; //change background colour
      document.querySelector(`.number`).style.width = `50rem`;
      document.querySelector(`.number`).textContent =
        document.querySelector(`.guess`).value;
      score--;
      document.querySelector(`.score`).textContent = score;
      //set Highscore
      console.log(`score = ${score}, highScore = ${highScore}`);

      //Reset the best record
      if (score > highScore) {
        highScore = score;
        document.querySelector(`.highscore`).textContent = highScore;
      }
    }
  } else {
    document.querySelector(`.message`).textContent = `You failed!`;
  }
});

//Reset the game
document.querySelector(`.again`).addEventListener(`click`, function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1; //reset random number
  // console.log(`the random number is ${randomNumber}`);
  score = 20;
  document.querySelector(`.score`).textContent = score; //restore score
  document.querySelector(`.message`).textContent = `Start guessing...`; //restore message
  document.querySelector(`body`).style.backgroundColor = `#222`; //background clour
  document.querySelector(`.number`).style.width = `15rem`; //div style
  document.querySelector(`.number`).textContent = `?`; //div content
  document.querySelector(`.guess`).value = ``;
});


