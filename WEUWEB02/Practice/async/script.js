let sect = document.querySelector('section');

async function getData(){
    sect.innerHTML = `<p>Loading...</p>`;

    const API_URL = 'https://api.chucknorris.io/jokes/random';

    // inväntar svar
    let response = await fetch(API_URL)

    let data = await response.json();

    // updateUI(data.value)
    updateUI(data)

}

// function updateUI(joke){
//     document.querySelector('p').innerText = joke;
// }
function updateUI(data){
    let template = `
    <img src="${data.icon_url}" alt"chuck norris" />
    <p>${data.value}</p>
    `;
    let sect = document.querySelector('section');

    sect.innerHTML = '';
    sect.insertAdjacentHTML('afterbegin', template);
}

document.querySelector('body').addEventListener('click', () => {
    getData()
})
