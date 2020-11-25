const deck = generateDeck();

let prevCard = null,
    currentCard = null,
    totalScore = 0,
    attempts = 5;

function generateDeck(){

    let deck = [];

    let suits = ["&spades;", "&clubs;", `&hearts;`, `&diams;`];


    for(let i=0; i<suits.length; i++){


        for(let j=2; j<=14; j++){

            let val;
            let color = "black"

            if(j < 11){
                val = `${j}`
            }

            if(j === 11){
                val = "J"
            }

            if(j === 12){
                val = "D"
            }

            if(j === 13){
                val = "K"
            }

            if(j === 14){
                val = "A"
            }

            if(suits[i] === `&hearts;` || suits[i] === `&diams;`){
                color = "red"
            }

            let card = {
                suit: suits[i],
                rank: j,
                value: val,
                color: color
            }

            deck.push(card);

        }
    }

    return deck;
}

function updateUI(stack){
    document.querySelector("main").innerHTML = "";
    stack.forEach(card => {

        let cardEL =
        `<article class="card ${card.color}">
            <aside class="top">
                <p class="suit">${card.suit}</p>
                <p class="value">${card.value}</p>
            </aside>
            <h1 class="suit">${card.suit}</h1>
            <aside class="bottom">
                <p class="suit">${card.suit}</p>
                <p class="value">${card.value}</p>
            </aside>
        </article>`;

    let countEl = `<p class="cards-left">Cards left: ${deck.length} of 52</p>`
        // let el = document.createElement("p");
        // el.innerHTML = `${card.suit} ${card.rank}`

        document.querySelector("main").insertAdjacentHTML("beforeend", cardEL);
        document.querySelector("main").insertAdjacentHTML("beforeend", countEl);

    });

}

function pickCard(){
    //generate random index in deck arr
    let random = Math.floor(Math.random()*deck.length);
    //pick random from deck arr
    let pickedCard = deck.splice(random, 1);

    prevCard = currentCard;
    currentCard = pickedCard;

    //show picked card in UI
    updateUI(pickedCard)
}

document.querySelector(".lower").addEventListener("click", () => {
    pickCard()

    if(currentCard[0].rank < prevCard[0].rank) {
        updateScore(100)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

document.querySelector(".same").addEventListener("click", () => {
    pickCard()

    if(currentCard[0].rank === prevCard[0].rank) {
        updateScore(1000)
    } else {
        updateScore(-100)
        updateAttempts()
    }
})

document.querySelector(".higher").addEventListener("click", () => {
    pickCard()

    if(currentCard[0].rank > prevCard[0].rank) {
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

pickCard()
