

function generateDeck(){

    let deck = [];

    let suits = ['&spades;', '&clubs;', `&hearts;`, `&diams;`];


    for(let i=0; i<suits.length; i++){


        for(let j=2; j<=14; j++){

            let card = {
                suit: suits[i],
                rank: j
            }

            deck.push(card);
        
        }
    }

    return deck;
}

function updateUI(deck){

    deck.forEach(card => {
        
        let el = document.createElement('p');
        el.innerHTML = `${card.suit} ${card.rank}`

        document.querySelector('body').appendChild(el);

    });

}

let deck = generateDeck();
updateUI(deck)