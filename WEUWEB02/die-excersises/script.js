// 2020-11-27, rollable die js document

let startPosition = `rotateX(0deg) rotateY(0deg)`,
    currentPosition = null,
    totalScore = 0,
    attempts = 5;

function diceRoll() {
    //randomizing newPosition
    let randomY = Math.floor(Math.random()*4);
    let randomX = Math.floor(Math.random()*4);

    let rotationX = Math.ceil(randomX*90);
    let rotationY = Math.ceil(randomY*90);

    newPosition = `rotateX(${rotationX+'deg'}) rotateY(${rotationY+'deg'})`;


    prevPosition = currentPosition;
    currentPosition = newPosition;

    let rotationEl = document.querySelector('.die');

    rotationEl.style.transform = startPosition
    rotationEl.style.transitionDuration = "2s"

    rotationEl.style.transform = newPosition
    rotationEl.style.transitionDuration = "2s"
}


function frontSide() {
    if (newPosition == `rotateX(180deg) rotateY(0deg)` || newPosition == `rotateX(0deg) rotateY(180deg)`){
        value = 6
    }
    if (newPosition == `rotateX(180deg) rotateY(180deg)` || newPosition == `rotateX(0deg) rotateY(0deg)`){
        value = 5
    }
    if (newPosition == `rotateX(270deg) rotateY(0deg)` || newPosition == `rotateX(90deg) rotateY(180deg)`){
        value = 4
    }
    if (newPosition == `rotateX(90deg) rotateY(0deg)` || newPosition == `rotateX(270deg) rotateY(180deg)`){
        value = 3
    }
    if (newPosition == `rotateX(0deg) rotateY(270deg)` || newPosition == `rotateX(90deg) rotateY(270deg)` || newPosition == `rotateX(180deg) rotateY(270deg)` || newPosition == `rotateX(270deg) rotateY(270deg)`){
        value = 2
    }
    if (newPosition == `rotateX(180deg) rotateY(90deg)` || newPosition == `rotateX(270deg) rotateY(90deg)` || newPosition == `rotateX(0deg) rotateY(90deg)` || newPosition == `rotateX(90deg) rotateY(90deg)`){
        value = 1
    }
}

document.querySelector(".lower").addEventListener("click", () => {
    diceRoll()

    if(currentPosition < prevPosition) { //EDIT SAME VALUE
        updateScore(100)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

document.querySelector(".same").addEventListener("click", () => {
    diceRoll()

    if(currentPosition === prevPosition) { //EDIT SAME VALUE
        updateScore(1000)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

document.querySelector(".higher").addEventListener("click", () => {
    diceRoll()

    if(currentPosition > prevPosition) { //EDIT SAME VALUE
        updateScore(100)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

function updateScore(score){
    totalScore += score;
    document.querySelector(".score b").innerText = totalScore;
}

function updateAttempts(){
    if(attempts > 0) {
        attempts--
        document.querySelector(".attempts b").innerText = attempts;
    } else {
        alert("Game Over!")
    }
}
