let Cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")

function startGame(){
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
Cards = [firstCard, secondCard]
sum = firstCard + secondCard 
    renderGame()
}

function renderGame(){
if (sum < 21){
    message = "do you want to proceed with another game"
}
else if (sum === 21){
    message = "BBBBBBBBBBBBBoooooooooooooooooooooooooommmmmmmmmmmmmmmmmmmmmmmmmm!!!!!!!!!!!!"
    hasBlackJack = true 
}
else if (sum > 21){
   message = "You died 3 years ago"
    isAlive = false   
}
messageEl.textContent = message
sumEl.textContent = "sum: " + sum
cardEl.textContent = "Cards: " 
for ( let i = 0; i < Cards.length; i++){
    cardEl.textContent += Cards[i] + " "
}
}

function newCrad(){
    let thirdCard = getRandomCard()
    sum += thirdCard
    Cards.push(thirdCard)
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor ( Math.random() * 13 ) + 1 
    if (randomNumber === 1){
        return 10
    }
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
}

let player1Time = 102
let player2Time = 107

function getFastestRace(){
    if (player1Time < player2Time){
        return player1Time
    }
    else if (player1Time > player2Time){
        return player2Time
    }
    else {
        return player1Time
    }
}

function totalRaceTime(){
    let total = player1Time + player2Time
    return total
}

// function rollDice(){
// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)
// }

// rollDice()

// let fastestRace = getFastestRace()
// let totalRace = totalRaceTime()

// console.log(fastestRace)
// console.log(totalRace)










 