// let skillsDiv = document.querySelector('#skills');
// let homeDiv = document.querySelector('#home');
// let skillsCtn = document.querySelector('.skills-container');
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

let homeDiv = document.querySelector('#home');
let skillsDiv = document.querySelector('#skills');
let projectsDiv = document.querySelector('#projects');
let contactDiv = document.querySelector('#contact');

let screenWidth = screen.width;

if(screenWidth < 1024) {
    skillsDiv.classList.remove("red-circle");
    projectsDiv.classList.remove("blue-circle");
    contactDiv.classList.remove("red-circle");
}

console.log(screenWidth);