var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
console.log(board);

const player1_button = document.getElementById('player-1')

console.log(player1_button);


const player2_button = document.getElementById('player-2')

console.log(player2_button);

player1_button.addEventListener('click', rollDice1);
player2_button.addEventListener('click', rollDice2);

var player1 = ["proGrad", 0, 1000];
var player2 = ["FacePrep", 0, 1000];

function rollDice1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player1 rolls ", position);
    changePosition1(player1[1], position);
}

function changePosition1(old, currentPos) {
    var newPosition = old + currentPos
    if (newPosition < board.length)
        player1[1] = newPosition;
    else {
        newPosition = newPosition % 16;
        player1[1] = newPosition;
    }
    //player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney1(player1[1]);

}

function updateMoney1(p1) {
    var updateMoney1 = 0;
    if (p1 < board.length)
        updateMoney1 = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney1 = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney1)
    player1[2] = updateMoney1;
}



//for player2
function rollDice2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player2 rolls ", position);
    changePosition1(player2[1], position);
}

function changePosition2(old, currentPos) {
    var newPosition = old + currentPos
    if (newPosition < board.length)
        player2[1] = newPosition;
    else {
        newPosition = newPosition % 16;
        player2[1] = newPosition;
    }
    //player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney2(player2[1]);

}

function updateMoney2(p1) {
    var updateMoney2 = 0;
    if (p1 < board.length)
        updateMoney2 = player2[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney2 = player2[2] - board[p1 - 1];
    }
    console.log(updateMoney2)
    player2[2] = updateMoney2;
}