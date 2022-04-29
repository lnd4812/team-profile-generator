const fs = require('fs');
const inquirer = require('inquirer');
const generateTeamTemplate = require('./src/team-template.js');  // template for team roster

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
    ]);
};

   
//     const promptTeam = teamData => {
    // console.log(`Please choose one of the following options from the menu - add Engineer, add Intern, Finish`)

//  switch()
// case: 'Engineer', same 1st 3 questions from above plus:         {   
//             type: 'input',
//             name:  'github',
//             message: 'Please enter your Github name (required)',
//             validate:   githubAdded => {
//                 if (githubAdded) {
//                     return true;
//                 } else {
//                     console.log('Please enter your GitHub name');
//                     return false;
//                 }
//             }    
//         },
// case: 'Intern', again same 3 questions from above plus:

//         {   
//             type: 'input',
//             name:  'school',
//             message: 'Please enter school attended (required)',
//             validate:   schoolAdded => {
//                 if (schoolAdded) {
//                     return true;
//                 } else {
//                     console.log('Please enter the name of your school');
//                     return false;
//                 }
//             }    
//         },
// case: 'Finish' - exit and create team portfolio page

// // answering the last question should trigger a function that brings up a menu with option to add engineer(s) or intern(s)
// // clicking enter should bring menu up again and continue to do so for each entry until finished.
// // include a Quit button  if Mgr elects to continue, click to add, otherwise click quit to quit
// // the Quit action will then bring up the writeFile function
// // use module 10 score grid as template for team roster

      
//     ]);
// };


// function to initalize app and create array of answers required to population the template and then generate the README
// will need to accommodate to accept arrays for manager and each employee type
function init() {
    promptManager()
        .then(answers => {
        const generatedTeamRoster = generateTeamRoster(answers);
    
        // generate readme
        fs.writeFileSync('./dist/teamRoster.html', generatedTeamRoster, err => {
            if (err) throw err;
        });
    });
};
 
//Function call to initialize app
init();
