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

// teamData has to get passed into this file and createCard function initiated - how do you apply template literals to this file?

function createCard(teamData) {
    for (var i = 0; i < teamData.length; i++) {
        if (teamData[i].value === 'Manager') {
            // create manager profile card at index 0 in teamData array
            nameEl = Manager.name;
            roleEl.innerHTML = '<h4 class="ee-role>Manager<h4>';
            idEl.innerHTML = 'id: ' + Manager.id;
            emailEl.innerHTML = 'email: ' + Manager.email;
            lastEl.innerHTML = 'office number: ' + Manager.officeNumber;
            cardHeaderEl.appendChild(nameEl);
            cardHeaderEl.appendChild(roleEl);
            managerCardEl.appendChild(cardHeaderEl);
            cardBodyEl.appendChild(idEl);
            cardBodyEl.appendChild(emailEl);
            cardBodyEl.appendChild(lastEl);
            cardEl.appendChild(cardHeaderEl);
            cardEl.appendChild(cardBodyEl);
        }
        else if (teamData[i].value === 'Engineer') {
            // create engineer profile card for each engineer added
            nameEl = Engineer.name;
            roleEl.innerHTML = '<h4 class="ee-role>Engineer<h4>';
            idEl.innerHTML = 'id: ' + Engineer.id;
            emailEl.innerHTML = 'email: ' + Engineer.email;
            lastEl.innerHTML = 'GitHub Username: ' + Engineer.github;
            cardHeaderEl.appendChild(nameEl);
            cardHeaderEl.appendChild(roleEl);
            engineerCardEl.appendChild(cardHeaderEl);
            cardBodyEl.appendChild(idEl);
            cardBodyEl.appendChild(emailEl);
            cardBodyEl.appendChild(lastEl);
            cardEl.appendChild(cardHeaderEl);
            cardEl.appendChild(cardBodyEl);
        }
        else if (teamData[i].value === "Intern") {
            // create intern profile card for each intern added
            nameEl = Intern.name;
            roleEl.innerHTML = '<h4 class="ee-role>Intern<h4>';
            idEl.innerHTML = 'id: ' + Intern.id;
            emailEl.innerHTML = 'email: ' + Intern.email;
            lastEl.innerHTML = 'School: ' + Intern.school;
            cardHeaderEl.appendChild(nameEl);
            cardHeaderEl.appendChild(roleEl);
            internCardEl.appendChild(cardHeaderEl);
            cardBodyEl.appendChild(idEl);
            cardBodyEl.appendChild(emailEl);
            cardBodyEl.appendChild(lastEl);
            cardEl.appendChild(cardHeaderEl);
            cardEl.appendChild(cardBodyEl); 
        }
    }
           teamBoardEl.appendChild(cardEl);
};   

// module.exports = generateTeamTemplate;
// module.exports = createCard;  