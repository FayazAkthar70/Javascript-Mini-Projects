let cards = [];
let hasBlackjack = false;
let isAlive = false;
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let message = "";

let player = {
    name:"Fayaz",
    money:100,
    
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.money + "$";

function generateRandomNum(){
    let rand = Math.floor(Math.random()*13) + 1;
    if (rand === 1){
        return 11;
    }
    else if (11 <= rand && rand <= 13) {
        return 10;
    }
    else{
        return rand;
    }
}

function checkBlackjack(){
    if (sum < 21) {
        message = "Do you want to pick another card?";
    } 
    else if (sum === 21) {
        message = "blackjack!!!";
        hasBlackjack = true;
    }
    else {
        message = "Lost blackjack";
        isAlive = false;
    }    
    
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function start() {
    isAlive = true;
    cards = [];
    firstCard = generateRandomNum();
    cards.push(firstCard);
    secondCard = generateRandomNum();
    cards.push(secondCard);
    sum = firstCard + secondCard;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    checkBlackjack();
}

function newCard(){
    if (isAlive && !hasBlackjack){

        let temp = Math.floor(Math.random() * 10) + 2;
        cards.push(temp)
        sum += temp;
        checkBlackjack()
        cardsEl.textContent += " " + temp;
    }
}
