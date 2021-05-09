let readline = require('readline-sync');

const BoardLengthAndWidth = 3;
let boardArray = []
for (let i = 0; i < BoardLengthAndWidth; i++) {
    boardArray.push(new Array(BoardLengthAndWidth).fill(0))
}

function updateBoardMarks(move, type){
    let tableMapping = {
        1:0, 2:0,3:0,4:1,5:1,6:1,7:2,8:2,9:2
    }
    let mapping = {
        1:0, 2:1,3:2,4:0,5:1,6:2,7:0,8:1,9:2
    }
    let num = 0;
    if (type === "human") num = 1;
    if (type === "computer") num = -1;

    if (!boardArray[tableMapping[move]][mapping[move]]) {
        boardArray[tableMapping[move]][mapping[move]] = num;
    } else {
        return "Please choose another square because that square is taken"
    }

    return  boardArray;
}

console.log(updateBoardMarks(9,"human"))
console.log(updateBoardMarks(9,"human"))


class Player {
    constructor(type) {
        this.type = type;
    }

    mark() {
        console.log("I marked this square")
    }

    play() {
        console.log("It is my turn to play")
    }


}

let player1 = new Player("human");
let player2 = new Player("computer");

// console.log(player1.type,player2.type);

class TTTGame {
    constructor() {
        this.player = player
        this.computer = computer
    }

    //!  welcome message


    //! Instructions message


    //! create board


    // ! isWinner checker

    //! play again prompt


    //! goodbye message

}

function isWinner(currentBoard) {
    let board = [...currentBoard];
    let winningSum = BoardLengthAndWidth;
    let rowSum1 = 0;
    let rowSum2 = 0;
    let rowSum3 = 0;
    let colSum1 = 0;
    let colSum2 = 0;
    let colSum3 = 0;
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;


    if (Math.abs(rowSum) === winningSum) return true;
    if (Math.abs(colSum) === winningSum) return true;
    if (Math.abs(diagonalSum) === winningSum) return true;

    for (let i = 0; i < currentBoard.length; i++) {
        // for (let j = 0; j < currentBoard.length; j++) {
            // ! down sums
            colSum += currentBoard[i][0]
            colSum += currentBoard[i][1]
            colSum += currentBoard[i][2]

            // ! across sums
            rowSum += currentBoard[0][i]
            rowSum += currentBoard[1][i]
            rowSum += currentBoard[2][i]

            // ! diagonal sums
            diagonalSum += currentBoard[i][2 - i];
            diagonalSum += currentBoard[i][i];

        // }
    }

    // return false;
}
// console.log(boardArray)