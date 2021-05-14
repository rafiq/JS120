let readline = require('readline-sync');

const BoardLengthAndWidth = 3;
// let boardArray = []
// for (let i = 0; i < BoardLengthAndWidth; i++) {
//     boardArray.push(new Array(BoardLengthAndWidth).fill(0))
// }

// function updateBoardMarks(move, type){
//     let tableMapping = {
//         1:0, 2:0,3:0,4:1,5:1,6:1,7:2,8:2,9:2
//     }
//     let mapping = {
//         1:0, 2:1,3:2,4:0,5:1,6:2,7:0,8:1,9:2
//     }
//     let num = 0;
//     if (type === "human") num = 1;
//     if (type === "computer") num = -1;

//     if (!boardArray[tableMapping[move]][mapping[move]]) {
//         boardArray[tableMapping[move]][mapping[move]] = num;
//     } else {
//         return "Please choose another square because that square is taken"
//     }

//     return  boardArray;
// }

class Square {
    static UNUSED_SQUARE = " ";
    static HUMAN_MARKER = "X";
    static COMPUTER_MARKER = "O";

    constructor(marker = Square.UNUSED_SQUARE) {
        this.marker = marker;
    }

    toString() {
        return this.marker;
    }

    setMarker(marker) {
        this.marker = marker;
    }

    isUnused() {
        return this.marker === Square.UNUSED_SQUARE;
    }

    getMarker() {
        return this.marker;
    }
}

class Board {
    constructor() {
        this.squares = {};

            for (let i = 1; i <= 9; i++) {
                this.squares[String(i)] = new Square();
            }
            // 1: new Square("X"),
            // 2: new Square(),
            // 3: new Square(),
            // 4: new Square(),
            // 5: new Square(),
            // 6: new Square(),
            // 7: new Square(),
            // 8: new Square(),
            // 9: new Square(),
        // }
    }
    unusedSquares() {
        let keys = Object.keys(this.squares);
        return keys.filter(key => this.squares[key].isUnused());
    }
        display() {
            console.log(`

            `)
            console.log(" ".repeat(5)," ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5));
            console.log(" ".repeat(5),`   ${this.squares[1]}  |   ${this.squares[2]}   |  ${this.squares[3]}`);
            console.log(" ".repeat(5)," ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5));
            console.log(" ".repeat(5)," ".repeat(1),"-".repeat(17))
            console.log(" ".repeat(5)," ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
            console.log(" ".repeat(5),`   ${this.squares[4]}  |   ${this.squares[5]}   |  ${this.squares[6]}`);
            console.log(" ".repeat(5)," ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
            console.log(" ".repeat(5)," ".repeat(1),"-".repeat(17))
            console.log(" ".repeat(5)," ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
            console.log(" ".repeat(5),`   ${this.squares[7]}  |   ${this.squares[8]}   |  ${this.squares[9]}`);
            console.log(" ".repeat(5)," ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
          }

    markSquareAt(key, marker) {
        this.squares[key].setMarker(marker);
    }

    isFull() {
        // let unusedSquares = this.board.unusedSquares();
        return this.unusedSquares().length === 0;
      }

    countMarkersFor(player, keys) {
        let markers = keys.filter(key => {
            return this.squares[key].getMarker() === player.getMarker();
        })
        return markers.length;
    }


}

class Player {
    constructor(marker) {
        this.marker = marker;
    }

    getMarker() {
        return this.marker;
    }
}

class Human extends Player {
        constructor() {
            super(Square.HUMAN_MARKER);
        }
}

class Computer extends Player {
        constructor() {
            super(Square.COMPUTER_MARKER);
        }
}

class TTTGame {
    static POSSIBLE_WINNING_ROWS = [
        [ "1", "2", "3" ],            // top row of board
        [ "4", "5", "6" ],            // center row of board
        [ "7", "8", "9" ],            // bottom row of board
        [ "1", "4", "7" ],            // left column of board
        [ "2", "5", "8" ],            // middle column of board
        [ "3", "6", "9" ],            // right column of board
        [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
        [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
      ];

    constructor() {
            this.board = new Board();
            this.human = new Human();
            this.computer = new Computer();
    }
    play() {
        console.clear();
        console.log(`



        `)
            //!  welcome message
            this.displayWelcomeMessage();
            //! Instructions message

        while (true) {
            // console.clear()
                //! create board
                this.board.display();
                console.log(`

                `)
                //   ! First player moves
                this.humanMoves();
                // this.board.display();
                console.clear()
                if (this.gameOver()) break;
                // ! isWinner checker

                //   ! second player moves
                this.computerMoves();
                // this.board.display();
                if (this.gameOver()) break;

                // ! isWinner checker
                // break;
        }

            this.displayResults();
            //! play again prompt
            console.log(`

            `)
            //! goodbye message
            this.displayGoodbyeMessage();
        }

    displayWelcomeMessage() {
        console.log(" ".repeat(5),"Welcome to Tic Tac Toe!")
      }

      displayGoodbyeMessage() {
       console.log(" ".repeat(5),"Thank you for playing Tic Tac Toe! Goodbye!")
      }

      displayResults() {
        if (this.isWinner(this.human)) {
            this.board.display();
            console.log(" ".repeat(5),"You won! Congratulations!")
        } else if (this.isWinner(this.computer)) {
            this.board.display();
            console.log(" ".repeat(5),"I won! I won! Take that, human!");
        } else {
            this.board.display();
            console.log(" ".repeat(5),"A tie game. How boring.");
        }
      }

      humanMoves() {
        let choice;

        while (true) {
            let validChoices = this.board.unusedSquares();
            const prompt = `Choose a square (${validChoices.join(", ")}): `;
            choice = readline.question(prompt);

            // let integerValue = parseInt(choice, 10);
            // if (integerValue >= 1 && integerValue <= 9) {

            //     break;
            // }

            if (validChoices.includes(choice)) break;

            console.log("Sorry, that's not a valid choice.");
            console.log("");
        }

        this.board.markSquareAt(choice, this.human.getMarker());
    }

    computerMoves() {
        let validChoices = this.board.unusedSquares();
        let choice;
        // I like how this is a good real life example of when to use a do while loop which was a question I have had since we learned it.
        do {
            choice = Math.floor((Math.random() * (BoardLengthAndWidth * BoardLengthAndWidth)) + 1).toString();;
        } while (!validChoices.includes(choice));

        this.board.markSquareAt(choice, this.computer.getMarker());
    }


      gameOver() {

        return this.board.isFull() || this.someoneWon();
      }

      someoneWon() {
          return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
              return this.board.countMarkersFor(this.human, row) === 3 ||
                        this.board.countMarkersFor(this.computer, row) === 3;
          })
          return false;
      }

      isWinner(player) {
          return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
              return this.board.countMarkersFor(player, row) === 3;
          })
      }
}

// function isWinner(currentBoard) {
//     let board = [...currentBoard];
//     let winningSum = BoardLengthAndWidth;
//     let rowSum1 = 0;
//     let rowSum2 = 0;
//     let rowSum3 = 0;
//     let colSum1 = 0;
//     let colSum2 = 0;
//     let colSum3 = 0;
//     let diagonalSum1 = 0;
//     let diagonalSum2 = 0;


//     if (Math.abs(rowSum) === winningSum) return true;
//     if (Math.abs(colSum) === winningSum) return true;
//     if (Math.abs(diagonalSum) === winningSum) return true;

//     for (let i = 0; i < currentBoard.length; i++) {
//         // for (let j = 0; j < currentBoard.length; j++) {
//             // ! down sums
//             colSum += currentBoard[i][0]
//             colSum += currentBoard[i][1]
//             colSum += currentBoard[i][2]

//             // ! across sums
//             rowSum += currentBoard[0][i]
//             rowSum += currentBoard[1][i]
//             rowSum += currentBoard[2][i]

//             // ! diagonal sums
//             diagonalSum += currentBoard[i][2 - i];
//             diagonalSum += currentBoard[i][i];

//         // }
//     }

//     // return false;
// }

let game = new TTTGame();
console.log(game.play())