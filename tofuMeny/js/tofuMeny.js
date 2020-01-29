//javaScript grupprojekt, tofu meny

function chefRamsy(){
    let meny = document.querySelector(".menu");
    meny.classList.toggle("show");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
};

//Event listeners
let button = document.querySelector(".menu-button");
let layer = document.querySelector(".fade-layer");

button.addEventListener("click",showMenu);
layer.addEventListener("click",showMenu);
