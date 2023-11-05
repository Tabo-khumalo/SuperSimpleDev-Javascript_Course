let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if(!score){

  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
};
*/

function playGame(playerMove) {

  const computerMove = pickCompterMove();
  let result = '';

  if(playerMove === 'Scissors'){

      if(computerMove === 'Scissors') {
      result = "It\'s a tie.";
      }
      else if(computerMove === 'Rock') {
      result = 'You lose.';
      } 
      else if(computerMove === 'Paper') {
      result = 'You win!'
      };
    } 
    else if(playerMove === 'Paper') {

      if(computerMove === 'Paper') {
        result = "It\'s a tie.";
      }
      else if(computerMove === 'Scissors') {
        result = 'You lose.';
      } 
      else if(computerMove === 'Rock') {
        result = 'You win!'
      };
    }
    else if(playerMove === 'Rock') {
      if(computerMove === 'Rock') {
        result = "It\'s a tie.";
      }
      else if(computerMove === 'Paper') {
        result = 'You lose.';
      } 
      else if(computerMove === 'Scissors') {
        result = 'You win!'
      };
    };

    if(result === 'You win!') {
      score.wins += 1;
    } 
    else if(result === 'You lose.'){
      score.losses += 1;
    } 
    else if(result === "It\'s a tie.") {
      score.ties += 1;
    };

    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();

    document.querySelector('.js-move')
      .innerHTML = `You picked
<img class="images" src="/Part One - JavaScript Course/Lesson 10 - CSS HTML JS/images/${playerMove}-emoji.png">
Computer picked
<img class="images" src="/Part One - JavaScript Course/Lesson 10 - CSS HTML JS/images/${computerMove}-emoji.png">`

    document.querySelector('.js-result')
      .innerHTML = `${result}`;

    

};

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function pickCompterMove(){

  let computerMove = '';

  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock';
  }
  else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'Paper';
  }
  else if(randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'Scissors';
  };

  return computerMove;
};
