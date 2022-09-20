let homeDiv = document.querySelector('#home');
let skillsDiv = document.querySelector('#skills');
let projectsDiv = document.querySelector('#projects');
let contactDiv = document.querySelector('#contact');

let burgerContainer = document.querySelector("#burger-container");

function showBurgerMenu() {
    let burgerOpener = document.querySelector("#burger-opener");
    let mobileLinks = document.querySelector("#mobile-links");

    burgerOpener.classList.toggle("open");
    mobileLinks.classList.toggle("open")
}

burgerContainer.addEventListener("click", showBurgerMenu);