// 2020-11-27, rollable die js document

let currentPosition = null,
    totalScore = 0,
    attempts = 5;

function diceRoll() {
    //randomizing newPosition
    let randomY = Math.floor(Math.random()*4);
    let randomX = Math.floor(Math.random()*4);

    let rotationX = Math.ceil(randomX*90);
    let rotationY = Math.ceil(randomY*90);

    newPosition = `rotateX(${rotationX+'deg'}) rotateY(${rotationY+'deg'})`;


    prevPosition = currentPosition; //previous position
    currentPosition = newPosition; //current position

    let rotationEl = document.querySelector('.die');

    rotationEl.style.transform = //prevPosition `rotateX(${-rotationX+'deg'}) rotateY(${-rotationY+'deg'})`
    rotationEl.style.transitionDuration = "2s"

    rotationEl.style.transform = newPosition
    rotationEl.style.transitionDuration = "2s"
    prevFrontSide()
    prevFrontSide()
}


function prevFrontSide() {
    if (prevPosition == `rotateX(180deg) rotateY(0deg)`){
        prevValue = "6"
    }
    if (prevPosition == `rotateX(0deg) rotateY(180deg)`) {
        prevValue = "6"
    }

    if (prevPosition == `rotateX(180deg) rotateY(180deg)`){
        prevValue = "5"
    }
    if (prevPosition == `rotateX(0deg) rotateY(0deg)`){
        prevValue = "5"
    }

    if (prevPosition == `rotateX(270deg) rotateY(0deg)`){
        prevValue = "4"
    }
    if (prevPosition == `rotateX(90deg) rotateY(180deg)`){
        prevValue = "4"
    }

    if (prevPosition == `rotateX(90deg) rotateY(0deg)`){
        prevValue = "3"
    }
    if (prevPosition == `rotateX(270deg) rotateY(180deg)`) {
        prevValue = "3"
    }
    
    if (prevPosition == `rotateX(0deg) rotateY(270deg)` || prevPosition == `rotateX(90deg) rotateY(270deg)` || prevPosition == `rotateX(180deg) rotateY(270deg)` || prevPosition == `rotateX(270deg) rotateY(270deg)`){
        prevValue = "2"
    }
    if (prevPosition == `rotateX(180deg) rotateY(90deg)` || prevPosition == `rotateX(270deg) rotateY(90deg)` || prevPosition == `rotateX(0deg) rotateY(90deg)` || prevPosition == `rotateX(90deg) rotateY(90deg)`){
        prevValue = "1"
    }
}

function prevFrontSide() {
    if (currentPosition == `rotateX(180deg) rotateY(0deg)` || currentPosition == `rotateX(0deg) rotateY(180deg)`){
        currentValue = "6"
    }
    if (currentPosition == `rotateX(180deg) rotateY(180deg)` || currentPosition == `rotateX(0deg) rotateY(0deg)`){
        currentValue = "5"
    }
    if (currentPosition == `rotateX(270deg) rotateY(0deg)` || currentPosition == `rotateX(90deg) rotateY(180deg)`){
        currentValue = "4"
    }
    if (currentPosition == `rotateX(90deg) rotateY(0deg)` || currentPosition == `rotateX(270deg) rotateY(180deg)`){
        currentValue = "3"
    }
    if (currentPosition == `rotateX(0deg) rotateY(270deg)` || currentPosition == `rotateX(90deg) rotateY(270deg)` || currentPosition == `rotateX(180deg) rotateY(270deg)` || currentPosition == `rotateX(270deg) rotateY(270deg)`){
        currentValue = "2"
    }
    if (currentPosition == `rotateX(180deg) rotateY(90deg)` || currentPosition == `rotateX(270deg) rotateY(90deg)` || currentPosition == `rotateX(0deg) rotateY(90deg)` || currentPosition == `rotateX(90deg) rotateY(90deg)`){
        currentValue = "1"
    }
}


document.querySelector(".lower").addEventListener("click", () => {
    diceRoll()

    if(currentValue < prevValue) { //EDIT SAME prevValue
        updateScore(100)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

document.querySelector(".same").addEventListener("click", () => {
    diceRoll()

    if(currentValue === prevValue) { //EDIT SAME prevValue
        updateScore(1000)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

document.querySelector(".higher").addEventListener("click", () => {
    diceRoll()

    if(currentValue > prevValue) { //EDIT SAME prevValue
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
