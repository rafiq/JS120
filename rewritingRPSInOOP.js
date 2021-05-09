let readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}


class RPSGame {
    constructor() {
        this.name = name,

    }
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
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
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();


// // let readline = require('readline-sync');

// // // function createPlayer() {
// // //   return {
// // //     move: null,
// // //   };
// // // }

// // function CreatePlayer() {
// //         this.move = null
// // }
// // function Human() {
// //     Player.call(this);
// //   }

// //   Human.prototype.choose = function () {
// //     let choice;

// //     while (true) {
// //       console.log('Please choose rock, paper, or scissors:');
// //       choice = readline.question();
// //       if (['rock', 'paper', 'scissors'].includes(choice)) break;
// //       console.log('Sorry, invalid choice.');
// //     }

// //     this.move = choice;
// //   };

// // // function CreateComputer() {
// // //   let playerObject = new CreatePlayer()
// // // }
// // // computerObject.prototype.choose = function() {
// // //     const choices = ['rock', 'paper', 'scissors'];
// // //     let randomIndex = Math.floor(Math.random() * choices.length);
// // //     this.move = choices[randomIndex];
// // // }

// // function Computer() {
// //     Player.call(this);
// //   }

// //   Computer.prototype.choose = function() {
// //     const choices = ['rock', 'paper', 'scissors'];
// //     let randomIndex = Math.floor(Math.random() * choices.length);
// //     this.move = choices[randomIndex];
// //   };
// // // function createComputer() {
// // //   let playerObject = new CreatePlayer()
// // //   let computerObject = {
// // //     choose() {
// // //       const choices = ['rock', 'paper', 'scissors'];
// // //       let randomIndex = Math.floor(Math.random() * choices.length);
// // //       this.move = choices[randomIndex];
// // //     },
// // //   };

// // //   return Object.assign(playerObject, computerObject);
// // // }

// // // function createHuman() {
// // //   let playerObject = new CreatePlayer()
// // //   let humanObject = {
// // //     choose() {
// // //       let choice;

// // //       while (true) {
// // //         console.log('Please choose rock, paper, or scissors:');
// // //         choice = readline.question();
// // //         if (['rock', 'paper', 'scissors'].includes(choice)) break;
// // //         console.log('Sorry, invalid choice.');
// // //       }

// // //       this.move = choice;
// // //     },
// // //   };

// // //   return Object.assign(playerObject, humanObject);
// // // }
// // // function RPSGame() {
// // //     this.human = createHuman();
// // //     this.computer = createComputer();

// // //     displayWelcomeMessage() {
// // //         console.log('Welcome to Rock, Paper, Scissors!');
// // //     }
// // //   }

// //   RPSGame.prototype = {
// //     displayWelcomeMessage() {
// //       console.log('Welcome to Rock, Paper, Scissors!');
// //     },

// //     displayGoodbyeMessage() {
// //       console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
// //     },

// //     displayWinner() {
// //       console.log(`You chose: ${this.human.move}`);
// //       console.log(`The computer chose: ${this.computer.move}`);

// //       let humanMove = this.human.move;
// //       let computerMove = this.computer.move;

// //       if ((humanMove === 'rock' && computerMove === 'scissors') ||
// //           (humanMove === 'paper' && computerMove === 'rock') ||
// //           (humanMove === 'scissors' && computerMove === 'paper')) {
// //         console.log('You win!');
// //       } else if ((humanMove === 'rock' && computerMove === 'paper') ||
// //                  (humanMove === 'paper' && computerMove === 'scissors') ||
// //                  (humanMove === 'scissors' && computerMove === 'rock')) {
// //         console.log('Computer wins!');
// //       } else {
// //         console.log("It's a tie");
// //       }
// //     },

// //     playAgain() {
// //       console.log('Would you like to play again? (y/n)');
// //       let answer = readline.question();
// //       return answer.toLowerCase()[0] === 'y';
// //     },

// //     play() {
// //       this.displayWelcomeMessage();
// //       while (true) {
// //         this.human.choose();
// //         this.computer.choose();
// //         this.displayWinner();
// //         if (!this.playAgain()) break;
// //       }
// //       this.displayGoodbyeMessage();
// //     }
// //   };

// //   RPSGame.prototype.constructor = RPSGame;
// //   let game = new RPSGame();
// //   game.play();

// //   function RPSGame() {
// //     this.human = new Human();
// //     this.computer = new Computer();
// //   }


// // // const RPSGame = {
// // //   human: createHuman(),
// // //   computer: CreateComputer(),

// // //   displayWelcomeMessage() {
// // //     console.log('Welcome to Rock, Paper, Scissors!');
// // //   },

// // //   displayGoodbyeMessage() {
// // //     console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
// // //   },

// // //   displayWinner() {
// // //     console.log(`You chose: ${this.human.move}`);
// // //     console.log(`The computer chose: ${this.computer.move}`);

// // //     let humanMove = this.human.move;
// // //     let computerMove = this.computer.move;

// // //     if ((humanMove === 'rock' && computerMove === 'scissors') ||
// // //         (humanMove === 'paper' && computerMove === 'rock') ||
// // //         (humanMove === 'scissors' && computerMove === 'paper')) {
// // //       console.log('You win!');
// // //     } else if ((humanMove === 'rock' && computerMove === 'paper') ||
// // //                (humanMove === 'paper' && computerMove === 'scissors') ||
// // //                (humanMove === 'scissors' && computerMove === 'rock')) {
// // //       console.log('Computer wins!');
// // //     } else {
// // //       console.log("It's a tie");
// // //     }
// // //   },

// // //   playAgain() {
// // //     console.log('Would you like to play again? (y/n)');
// // //     let answer = readline.question();
// // //     return answer.toLowerCase()[0] === 'y';
// // //   },

// // //   play() {
// // //     this.displayWelcomeMessage();
// // //     while (true) {
// // //       this.human.choose();
// // //       this.computer.choose();
// // //       this.displayWinner();
// // //       if (!this.playAgain()) break;
// // //     }

// // //     this.displayGoodbyeMessage();
// // //   },
// // // };

// // // RPSGame.play();

// // // If you later add methods to Player.prototype, you must remember to inherit from it:

// // // Copy Code
// // Player.prototype.doSomething = function() { /* omitted code */ };

// // Human.prototype = Object.create(Player.prototype);
// // Human.prototype.constructor = Human;
// // Human.prototype.choose = { /* omitted code */ };

// // Computer.prototype = Object.create(Player.prototype);
// // Computer.prototype.constructor = Computer;
// // Computer.prototype.choose = { /* omitted code */ };

// let readline = require('readline-sync');

// function Player() {
//   this.move = null;
// }

// function Computer() {
//   Player.call(this);
// }

// Computer.prototype.choose = function() {
//   const choices = ['rock', 'paper', 'scissors'];
//   let randomIndex = Math.floor(Math.random() * choices.length);
//   this.move = choices[randomIndex];
// };

// function Human() {
//   Player.call(this);
// }

// Human.prototype.choose = function () {
//   let choice;

//   while (true) {
//     console.log('Please choose rock, paper, or scissors:');
//     choice = readline.question();
//     if (['rock', 'paper', 'scissors'].includes(choice)) break;
//     console.log('Sorry, invalid choice.');
//   }

//   this.move = choice;
// };

// function RPSGame() {
//   this.human = new Human();
//   this.computer = new Computer();
// }

// RPSGame.prototype = {
//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paper, Scissors!');
//   },

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
//   },

//   displayWinner() {
//     console.log(`You chose: ${this.human.move}`);
//     console.log(`The computer chose: ${this.computer.move}`);

//     let humanMove = this.human.move;
//     let computerMove = this.computer.move;

//     if ((humanMove === 'rock' && computerMove === 'scissors') ||
//         (humanMove === 'paper' && computerMove === 'rock') ||
//         (humanMove === 'scissors' && computerMove === 'paper')) {
//       console.log('You win!');
//     } else if ((humanMove === 'rock' && computerMove === 'paper') ||
//                (humanMove === 'paper' && computerMove === 'scissors') ||
//                (humanMove === 'scissors' && computerMove === 'rock')) {
//       console.log('Computer wins!');
//     } else {
//       console.log("It's a tie");
//     }
//   },

//   playAgain() {
//     console.log('Would you like to play again? (y/n)');
//     let answer = readline.question();
//     return answer.toLowerCase()[0] === 'y';
//   },

//   play() {
//     this.displayWelcomeMessage();
//     while (true) {
//       this.human.choose();
//       this.computer.choose();
//       this.displayWinner();
//       if (!this.playAgain()) break;
//     }
//     this.displayGoodbyeMessage();
//   }
// };

// RPSGame.prototype.constructor = RPSGame;

// let game = new RPSGame();
// game.play();

let readline = require('readline-sync');

class Player {
  constructor() {
    this.move = null;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }

  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
  }
}

class Human extends Player {
  constructor() {
    super();
  }

  choose() {
    let choice;

    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      choice = readline.question();
      if (['rock', 'paper', 'scissors'].includes(choice)) break;
      console.log('Sorry, invalid choice.');
    }

    this.move = choice;
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  }

  displayWinner() {
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
  }

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
}

let game = new RPSGame();
game.play();