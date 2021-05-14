const CARDS_VALUE_MATCH = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}
let computerDeck, playerDeck, inRound,stop;

class Participant {
    constructor() {
        // ! displayHand()


        // ! move()
    }
    hit() {

    }

    stay() {

    }

    isBusted() {

    }

    score() {

    }
}

class Player extends Participant {
    constructor() {

    }
}

class Dealer extends Participant {
    constructor() {

    }

    hide() {

    }

    reveal() {

    }
}

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    deal() {

    }

    get numberOfCards() {
        return this.cards.length;
    }

    pop() {
        this.cards.shift();
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}
const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ["A",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"J",
"Q",
"K"]
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

class TwentyOneGame {
    constructor() {

    }

    play() {
        while (true) {
            const deck = new Deck();
            deck.shuffle();

            cleanBeforeRound();

            console.log("THis is me playing")

            this.displayWelcomeMessage()
            this.dealCards();
            this.showCards();
            this.playerTurn();
            this.dealerTurn();
            this.displayResults();
            this.displayGoodbyeMessage();

            break;
        }
    }

    displayWelcomeMessage() {
        console.log("welcome to 21")
    }

    displayResults() {
        console.log("No one won")
    }

    displayCards() {
        console.log(`${this.showCards}`)
    }

    dealCards() {

    }

    showCards() {

    }

    playerTurn() {

    }

    dealerTurn() {

    }

    displayGoodbyeMessage() {

    }
}

function cleanBeforeRound() {

    updateDeck()
}

function gameOver(hand) {
    // return hand <= 21 $$ hand > ;
}

let game = new TwentyOneGame();
game.play()