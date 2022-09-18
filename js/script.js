let skillsDiv = document.querySelector('#skills');
let homeDiv = document.querySelector('#home');
let skillsDivPosition = skillsDiv.getBoundingClientRect();
let homeDivPosition = homeDiv.getBoundingClientRect();

console.log(skillsDivPosition);
console.log(homeDivPosition);

let y = window.scrollY;
console.log(y);