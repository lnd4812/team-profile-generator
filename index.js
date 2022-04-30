const fs = require('fs');
const inquirer = require('inquirer');
const generateTeamTemplate = require('./src/team-template.js');  // template for team profile

// use inquirer module to prompt manager to start compiling team roster
const promptManager = () => {
    
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name. (required)',
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }    
            }
        },
        {   
            type: 'input',
            name: 'id',
            message: 'Please enter your ID number (required)',
            validate:   idEntered => {
                if (idEntered) {
                    return true;
                } else {
                    console.log('Please enter ID number');
                    return false;
                }
            }
        },       
        {   
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (required)',
            validate:   emailAdded => {
                if (emailAdded) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }    
        },
        // because Manager is answering these questions, complete manager card
        {   
            type: 'input',
            name:  'officeNumber',
            message: 'Please enter your office contact number (required)',
            validate:   officeNumberAdded => {
                if (officeNumberAdded) {
                    return true;
                } else {
                    console.log('Please enter your contact number.');
                    return false;
                }
            }    
        },
        {
            type: 'checkbox',
            name: 'option',
            message: 'Please choose one of the following options to add an Engineer or Intern to the team profit or Finish to create your team profile',
            choices: ['Engineer', 'Intern', 'Finish']
        },
    ])
    // what I want to do here is push the answer to "option" into a function that 
    .then()
    function menuChoice(option) {
        let menuAction = "";
    
        if (option.includes('Engineer')) {
            // Engineer questions plus return to menu
        }  else if (option.includes('Intern')) {
            // Intern questions plus return to menu
        }  else if (option.includes('Finish')) {
            
        }
        
    
    }
};

// // what I want to do here is if Engineer - ask the first set of questions and return to promp/ else if Intern / else if Finish
// const promptTeam = (teamData) => {

//     // it no employees have been added to team profile array, create one
//     if (!teamData.employees) {
//         teamData.employees =[];
//     }

//     // ask manager if he/she wants to add Engineer, add Intern or finish and create the roster.
//     return inquirer
//     .prompt([
        
//         console.log(teamData)
//     ])


// let createTeam;

// createTeam = function(teamData) {
     
//         if (teamData === 'Engineer') {

//             return inquirer
//             .prompt([
//             {    
//                 type: 'input',
//                 name: 'name',
//                 message: "Please enter Engineer's name (required)",
//                 validate: nameEntered => {
//                     if (nameEntered) {
//                         return true;
//                     } else {
//                         console.log("Please enter Engineer'sname!");
//                         return false;
//                     }    
//                 }
//             },
//             {   
//                 type: 'input',
//                 name: 'id',
//                 message: "Please enter Engineer's ID number (required)",
//                 validate:   idEntered => {
//                     if (idEntered) {
//                         return true;
//                     } else {
//                         console.log('Please enter ID number');
//                         return false;
//                     }
//                 }
//             },       
//             {   
//                 type: 'input',
//                 name: 'email',
//                 message: "Please enter Engineer's email address (required)",
//                 validate:   emailAdded => {
//                     if (emailAdded) {
//                         return true;
//                     } else {
//                         console.log('Please enter email address');
//                         return false;
//                     }
//                 }    
//             },
//             // Engineer profile includes GitHub Username
//             {   
//                 type: 'input',
//                 name:  'gitHub',
//                 message: "Please enter Engineer's GitHub username (required)",
//                 validate:   githubAdded => {
//                     if (githubAdded) {
//                         return true;
//                     } else {
//                     console.log("Please enter Engineer's username.");
//                         return false;
//                     } 
//                 }
//             },
//             {   type: "confirm",
//                 name: "addEmployee",
//                 message: "Would you like to add another employee?",
//                 default: "false"
//             }        
//         ]) 
//             .then(teamData => {
//                 teamData.employees.push(employees);
//                 if (teamData.addEmployee) {
//                     return promptTeam(teamData);
//                 } else {
//                     return teamData;
//                 }
//             });
//         }
        
//         else if (teamData === 'Intern') {

//         return inquirer
//         .prompt([
//             {    
//                 type: 'input',
//                 name: 'name',
//                 message: "Please enter Intern's name (required)",
//                 validate: nameEntered => {
//                     if (nameEntered) {
//                         return true;
//                     } else {
//                         console.log("Please enter Intern's name!");
//                         return false;
//                     }    
//                 }
//             },
//             {   
//                 type: 'input',
//                 name: 'id',
//                 message: "Please enter Intern's ID number (required)",
//                 validate:   idEntered => {
//                     if (idEntered) {
//                         return true;
//                     } else {
//                         console.log('Please enter ID number');
//                         return false;
//                     }
//                 }
//             },       
//             {   
//                 type: 'input',
//                 name: 'email',
//                 message: "Please enter Intern's email address (required)",
//                 validate:   emailAdded => {
//                     if (emailAdded) {
//                         return true;
//                     } else {
//                         console.log('Please enter email address');
//                         return false;
//                     }
//                 }    
//             },
//             // Engineer profile includes GitHub Username
//             {   
//                 type: 'input',
//                 name:  'school',
//                 message: "Please enter Intern's school (required)",
//                 validate:   githubAdded => {
//                     if (githubAdded) {
//                         return true;
//                     } else {
//                         console.log("Please enter Intern's school.");
//                         return false;
//                     }
//                 }
//             }
//         ]) 
//         .then(teamData => {
//             teamData.employees.push(employees);
//             if (teamData.addEmployee) {
//                 return promptTeam(teamData);
//             } else {
//                 return teamData;
//             }
//         });   
//     } else if (option === 'Finish') {
//         return generateTeamTemplate();
//     } else {
//         promptTeam(teamData);
// };
// };

// function to initalize app and create array of answers that then trigger menu with add engineer, add intern or finish options
function init() {
    promptManager()
        .then(answers => {
        const generatingTeamTemplate = generateTeamTemplate(answers);
 
        // generate html page with employee cards
        fs.writeFile('./dist/team-Template.html', generatingTeamTemplate, err => {
            if (err) throw err;
        });
    });
};

//Function call to initialize app
init();
