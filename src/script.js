// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
     
// create main container profiles       
let teamBoardEl = document.querySelector('.team-board');

// create cards for the profiles
let managerCardEl = document.querySelector('.manager');
let engineerCardEl = document.querySelector('.engineer');
let internCardEl = document.querySelector('.intern');
let cardHeaderEl = document.querySelector('.card-header');
let nameEl = document.createElement('h2');
let roleEl = document.createElement('h4');
roleEl.className = "ee-role";

let cardBodyEl = document.querySelector('.card-body');
let idEl = document.querySelector('.id');
let emailEl = document.querySelector('email');
let lastEl = document.querySelector('.last');

