let homeDiv = document.querySelector('#home');
let skillsDiv = document.querySelector('#skills');
let projectsDiv = document.querySelector('#projects');
let contactDiv = document.querySelector('#contact');

let burgerContainer = document.querySelector("#burger-container");

//fonction pour afficher ou non les cercles rouge et bleu
// function displayCircle() {
//     let screenWidth = screen.width;

//     if(screenWidth < 1024) {
//         skillsDiv.classList.remove("red-circle");
//         projectsDiv.classList.remove("blue-circle");
//         contactDiv.classList.remove("red-circle");
        
//         console.log(screenWidth);
//     } else {
//         skillsDiv.classList.add("red-circle");
//         projectsDiv.classList.add("blue-circle");
//         contactDiv.classList.add("red-circle");        
//     }
// }
// window.addEventListener("resize", displayCircle);

function showBurgerMenu() {
    let burgerOpener = document.querySelector("#burger-opener");
    let mobileLinks = document.querySelector("#mobile-links");

    burgerOpener.classList.toggle("open");
    mobileLinks.classList.toggle("open")
}

burgerContainer.addEventListener("click", showBurgerMenu);



// // let skillsDivPosition = skillsDiv.getBoundingClientRect();
// let skillsDivPosition = skillsDiv.offsetTop;
// // skillsDivPosition = 832
// // let homeDivPosition = homeDiv.getBoundingClientRect();
// let homeDivPosition = homeDiv.offsetTop;

// console.log(skillsDivPosition);
// console.log(homeDivPosition);



// window.addEventListener("scroll", () => {
//     let y = window.scrollY;
//     console.log(y);

//     if(skillsDivPosition > y) {
//         // skillsCtn.classList.remove("hidden");
//         skillsCtn.classList.add("visible");

//     }
// })