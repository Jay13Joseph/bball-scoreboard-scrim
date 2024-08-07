let initialHomeScore = 0
let initialAwayScore = 0

let hScore = document.getElementById("home-score")
let aScore = document.getElementById("away-score")

function addOneHome() {
    hScore.textContent = initialHomeScore += 1
}

function addTwoHome() {
    hScore.textContent = initialHomeScore += 2
}

function addThreeHome() {
    hScore.textContent = initialHomeScore += 3
}

function addOneAway() {
    aScore.textContent = initialAwayScore += 1
}

function addTwoAway() {
    aScore.textContent = initialAwayScore += 2
}

function addThreeAway() {
    aScore.textContent = initialAwayScore += 3
}

function startOver() {
    initialHomeScore = 0
    initialAwayScore = 0
    document.getElementById("home-score").textContent = initialHomeScore
    document.getElementById("away-score").textContent = initialAwayScore

}