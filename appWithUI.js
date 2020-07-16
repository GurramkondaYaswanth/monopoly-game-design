var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box8 = document.querySelector('#box8');
var box12 = document.querySelector('#box12');
var box16 = document.querySelector('#box16');
var box15 = document.querySelector('#box15');
var box14 = document.querySelector('#box14');
var box13 = document.querySelector('#box13');
var box9 = document.querySelector('#box9');
var box5 = document.querySelector('#box5');


var d = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
var arrdiv = [box1, box2, box3, box4, box8, box12, box16, box15, box14, box13, box9, box5]


const player1 = document.getElementById('player-1')
const player2 = document.getElementById('player-2')
console.log(d.length)
console.log(player1)
console.log(player2)

player1.addEventListener('click', rollDice1);
player2.addEventListener('click', rollDice2);

var person1 = ["Yaswanth", 0, 1000];
var person2 = ["FacePrep", 0, 1000];

function rollDice1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player1 rolls ", position);
    changePosition1(person1[1], position);
}

function rollDice2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player2 rolls ", position);
    changePosition2(person2[1], position);
}

var count = 0;

function changePosition1(old, currentPos) {
    count++
    var newPosition = old + currentPos;
    person1[1] = newPosition;
    newPosition = newPosition % 11;
    //change img pos
    var img = document.getElementById('img1');
    img.style.visibility = 'hidden';
    console.log(" count" + count);
    if (count > 1) {
        var elem = document.getElementById("img11");
        elem.remove();
    }
    let template = '<img src="./images/img11.jpg" id="img11" alt="red" style="width: 36px"></img>'
    arrdiv[newPosition].innerHTML += template;
    console.log(person1[1]);
    changeMoney1(person1[1]);

}
var count2 = 0;

function changePosition2(old, currentPos) {
    count2++
    var newPosition = old + currentPos;
    person2[1] = newPosition;
    newPosition = newPosition % 11;
    //change img pos
    var img = document.getElementById('img2');
    img.style.visibility = 'hidden';
    console.log(" count" + count);
    if (count2 > 1) {
        var elem = document.getElementById("img22");
        elem.remove();
    }

    let template = '<img src="./images/img22.jpg" id="img22" alt="green" style="width: 36px"></img>'
    arrdiv[newPosition].innerHTML += template;
    //player1[1] = newPosition;
    console.log(person2[1]);
    changeMoney2(person2[1]);
}

function changeMoney1(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person1[2] - d[p2 - 1];
    } else {
        p2 = p2 % 11;
        updateMoney = person1[2] - d[p2 - 1];
    }
    person1[2] = updateMoney;
    if (updateMoney > 0) {
        document.querySelector(".item3").innerHTML = updateMoney;
    } else {
        document.querySelector(".item3").innerHTML = "player2 win";
    }

}

function changeMoney2(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person2[2] - d[p2 - 1];
    } else {
        p2 = p2 % 11;
        updateMoney = person2[2] - d[p2 - 1];
    }
    person2[2] = updateMoney;
    if (updateMoney > 0) {
        document.querySelector(".item4").innerHTML = updateMoney;
    } else {
        document.querySelector(".item4").innerHTML = "player1 win";
    }

}