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

const promptTeam = teamData => {
console.log(`Please choose one of the following options from the menu - add Engineer, add Intern, Finish`)

// need function to create menu with add engineer / add intern / quit options

    switch(menuOption) {

    case "Engineer":
    case "Intern":      {
        console.log(`Please provide the following information for the employee`);
       
        // create array for employees?
        if (teamData.employees) {
            teamData.employees = [];
        }

        return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter employee's name. (required)",
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log('Please enter name of employee being added');
                    return false;
                }    
            }
        },
        {   
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID number (required)",
            validate: idEntered => {
                if (idEntered) {
                    return true;
                } else {
                    console.log('Please enter ID number for employee being added');
                    return false;
                }
            }
        },       
        {   
            type: 'input',
            name: 'email',
            message: "Please enter employee's email address (required)",
            validate:   emailAdded => {
                if (emailAdded) {
                    return true;
                } else {
                    console.log('Please enter email address for employee being added');
                    return false;
                }
            }    
        },
        
       //
        
       //  type: 'input',
       //        name:  'github',
       //          message: "Please enter Engineer's Github name (required)",
       //          validate:   githubAdded => {
       //           if (githubAdded) {
       //                  return true;
       //              } else {
       //                  console.log("Please enter employee's GitHub name");
       //                  return false;
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
    //                     console.log('Please enter the name of intern's school');
    //                     return false;
    //                 }
    //             }    
    //         },
     //  case 'Finish': {
         // init()

        
        ]);
      };
    };
};
//

// function to initalize app and create array of answers required to population the template and then generate the README
// will need to accommodate to accept arrays for manager and each employee type
function init() {
    promptManager()
        .then(promptTeam)
        .then(teamData => {
        return generateTeamTemplate(teamData);
    })
        // generate html page with employee cards
        fs.writeFile('./dist/teamRoster.html', generatedTeamTemplate, err => {
           if (err) throw err;
 
});
}
//Function call to initialize app
init();
