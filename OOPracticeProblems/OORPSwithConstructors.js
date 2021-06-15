let readline = require('readline-sync');
function CreatePlayer() {
    // Object.setPrototypeOf(this,CreateComputer.prototype)
    this.move = null;
}
// function createPlayer() {
//   return {
//     move: null,
//   };
// }
// let obj = new CreatePlayer();
// console.log(obj)

function CreateComputer() {
    CreatePlayer.call(this)
    //  new CreatePlayer();
}

CreateComputer.prototype.choose = function() {
    const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
}

// function createComputer() {
//   let playerObject = new CreatePlayer();

//   let computerObject = {
//     choose() {
//       const choices = ['rock', 'paper', 'scissors'];
//       let randomIndex = Math.floor(Math.random() * choices.length);
//       this.move = choices[randomIndex];
//     },
//   };

//   return Object.assign(playerObject, computerObject);
// }

function CreateHuman() {
    CreatePlayer.call(this)
    // new CreatePlayer();
}

CreateHuman.prototype.choose = function() {
    let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
}
// ! THis is if we wanted to and some methods to the create Player parent object for all children to inherit.
// CreatePlayer.prototype.doSomething = function() { /* omitted code */ };

// CreateHuman.prototype = Object.create(CreatePlayer.prototype);
// CreateHuman.prototype.constructor = CreateHuman;
// CreateHuman.prototype.choose = { /* omitted code */ };

// Computer.prototype = Object.create(CreatePlayer.prototype);
// Computer.prototype.constructor = Computer;
// Computer.prototype.choose = { /* omitted code */ };
// function createHuman() {
//   let playerObject = new CreatePlayer();
//   let humanObject = {
//     choose() {
//       let choice;

//       while (true) {
//         console.log('Please choose rock, paper, or scissors:');
//         choice = readline.question();
//         if (['rock', 'paper', 'scissors'].includes(choice)) break;
//         console.log('Sorry, invalid choice.');
//       }

//       this.move = choice;
//     },
//   };

//   return Object.assign(playerObject, humanObject);
// }
function RPSGame() {
    this.human = new CreateHuman();
    this.computer = new CreateComputer();
}

RPSGame.prototype.displayWelcomeMessage = function() {
    console.log('Welcome to Rock, Paper, Scissors!');
}
RPSGame.prototype.displayGoodbyeMessage = function() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
    // console.log('Welcome to Rock, Paper, Scissors!');
}
RPSGame.prototype.playAgain = function() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
    // console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
    // console.log('Welcome to Rock, Paper, Scissors!');
}

RPSGame.prototype.play = function() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();

    // console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
    // console.log('Welcome to Rock, Paper, Scissors!');
}

RPSGame.prototype.displayWinner = function() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
    // console.log('Welcome to Rock, Paper, Scissors!');
}

RPSGame.prototype.constructor = RPSGame;

// const RPSGame = {
//   human: createHuman(),
//   computer: createComputer(),
// }
//   displayWelcomeMessage() {
//   },

//   displayGoodbyeMessage() {
//   },

//   displayWinner() {
//   },

//   playAgain() {

//   },

//   play() {

// };
let game = new RPSGame()
game.play()
