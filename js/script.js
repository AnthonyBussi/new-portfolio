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



const ratio = .3;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    })
}
  

document.documentElement.classList.add('reveal-loaded');

const observer = new IntersectionObserver(handleIntersect, options);

let projects = document.querySelectorAll(".hidden");
projects.forEach(function (r) {
    observer.observe(r);
})