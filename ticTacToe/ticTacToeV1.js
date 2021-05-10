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
        display(val,person) {

            console.log(" ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5));
            console.log(`   ${this.squares[1]}  |   ${this.squares[2]}   |  ${this.squares[3]}`);
            console.log(" ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5));
            console.log(" ".repeat(1),"-".repeat(17))
            console.log(" ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
            console.log(`   ${this.squares[4]}  |   ${this.squares[5]}   |  ${this.squares[6]}`);
            console.log(" ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
            console.log(" ".repeat(1),"-".repeat(17))
            console.log(" ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
            console.log(`   ${this.squares[7]}  |   ${this.squares[8]}   |  ${this.squares[9]}`);
            console.log(" ".repeat(5),"|"," ".repeat(5),"|"," ".repeat(5))
          }

    markSquareAt(key, marker) {
        this.squares[key].setMarker(marker);
    }
}

class Row {
    constructor() {

    }
}

class Player {
    constructor(marker) {
        this.marker = marker;
    }

    getMarker() {
        return this.marker;
    }

    play() {
        console.log("It is my turn to play")
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
    constructor() {
            this.board = new Board();
            this.human = new Human();
            this.computer = new Computer();
    }
    play() {
            //!  welcome message
            this.displayWelcomeMessage();
            //! Instructions message

        while (true) {
                //! create board
                this.board.display();

                //   ! First player moves
                this.humanMoves();
                this.board.display();
                if (this.gameOver()) break;
                // ! isWinner checker

                //   ! second player moves
                this.computerMoves();
                this.board.display();
                if (this.gameOver()) break;

                // ! isWinner checker
                break;
        }

            this.displayResults();
            //! play again prompt

            //! goodbye message
            this.displayGoodbyeMessage();
        }

    displayWelcomeMessage() {
        console.log("Welcome to Tic Tac Toe!")
      }

      displayGoodbyeMessage() {
       console.log("Thank you for playing Tic Tac Toe! Goodbye!")
      }

      displayResults() {
        //STUB
        // show the results of this game (win, lose, tie)
      }

      humanMoves() {
        let choice;

        while (true) {
            choice = readline.question("Choose a square between 1 and 9: ");

            let integerValue = parseInt(choice, 10);
            if (integerValue >= 1 && integerValue <= 9) {

                break;
            }

            console.log("Sorry, that's not a valid choice.");
            console.log("");
        }

        this.board.markSquareAt(choice, this.human.getMarker());
    }

    computerMoves() {
        let choice;
        choice = Math.floor((Math.random() * (BoardLengthAndWidth * BoardLengthAndWidth)) + 1);

        this.board.markSquareAt(choice, this.computer.getMarker());
    }


      gameOver() {
        //STUB
        return false;
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