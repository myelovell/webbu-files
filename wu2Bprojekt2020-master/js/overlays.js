//2020-03-05,

function chefRamsy(){
    let meny = document.querySelector(".navOverlay");
    meny.classList.toggle("show");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
};

//Event listeners
let button = document.querySelector(".nav-button");
let layer = document.querySelector(".fade-layer");

button.addEventListener("click",showMenu);
layer.addEventListener("click",showMenu);
