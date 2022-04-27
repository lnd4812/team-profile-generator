const fs = require('fs');
const inquirer = require('inquirer');
const generateTeamTemplate = require('./utils/teamtemplate.js');  // template for team roster

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
            name: 'employeeId',
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

// use if / else for 4th question
        // if manager
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

        // else if engineer 

        {   
            type: 'input',
            name:  'github',
            message: 'Please enter your Github name (required)',
            validate:   githubAdded => {
                if (githubAdded) {
                    return true;
                } else {
                    console.log('Please enter your GitHub name');
                    return false;
                }
            }    
        },
        // else if intern 

        {   
            type: 'input',
            name:  'school',
            message: 'Please enter school attended (required)',
            validate:   schoolAdded => {
                if (schoolAdded) {
                    return true;
                } else {
                    console.log('Please enter the name of your school');
                    return false;
                }
            }    
        },

// answering the last question should trigger a function that brings up a menu with option to add engineer(s) or intern(s)
// clicking enter should bring menu up again and continue to do so for each entry until finished.
// include a Quit button  if Mgr elects to continue, click to add, otherwise click quit to quit
// the Quit action will then bring up the writeFile function
// use module 10 score grid as template for team roster

      
    ]);
};


// function to initalize app and create array of answers required to population the template and then generate the README
// will need to accommodate to accept arrays for manager and each employee type
function init() {
    promptManager()
        .then(answers => {
        const generatedTeamRoster = generateTeamRoster(answers);
    
        // generate readme
        fs.writeFileSync('./src/teamRoster.html', generatedTeamRoster, err => {
            if (err) throw err;
        });
    });
};
 
//Function call to initialize app
init();
