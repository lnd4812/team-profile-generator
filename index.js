const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTeamTemplate = require('./src/team-template.js');  // template for team profile

// use inquirer module to prompt manager to start compiling team roster
const promptTeam = () => {
    
    const teamData = [];
      
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'managername',
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
            name: 'managerid',
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
            name: 'manageremail',
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
            name:  'managerofficeNumber',
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
        type: 'input',
        name: 'engineername',
        message: "Please enter Engineer's name (required)",
        validate: nameEntered => {
            if (nameEntered) {
                return true;
            } else {
                console.log("Please enter Engineer's name!");
                return false;
            }    
        }
    },
    {   
        type: 'input',
        name: 'engineerid',
        message: "Please enter Engineer's ID number (required)",
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
        name: 'engineeremail',
        message: "Please enter Engineer's email address (required)",
        validate:   emailAdded => {
            if (emailAdded) {
                return true;
            } else {
                console.log('Please enter email address');
                return false;
            }
        }    
    },
    // Engineer profile includes GitHub Username
    {   
        type: 'input',
        name:  'engineergitHub',
        message: "Please enter Engineer's GitHub username (required)",
        validate:   githubAdded => {
            if (githubAdded) {
                return true;
            } else {
            console.log("Please enter Engineer's username.");
                return false;
            } 
        }
    },
    {    
            type: 'input',
            name: 'internname',
            message: "Please enter Intern's name (required)",
            validate: nameEntered => {
                if (nameEntered) {
                    return true;
                } else {
                    console.log("Please enter Intern's name!");
                    return false;
                }    
            }
        },
        {   
            type: 'input',
            name: 'internid',
            message: "Please enter Intern's ID number (required)",
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
            name: 'internemail',
            message: "Please enter Intern's email address (required)",
            validate:   emailAdded => {
                if (emailAdded) {
                    return true;
                } else {
                    console.log('Please enter email address');
                    return false;
                }
            }    
        },
        // Intern's profile includes school name
        {   
            type: 'input',
            name:  'internschool',
            message: "Please enter Intern's school (required)",
            validate:   githubAdded => {
                if (githubAdded) {
                    return true;
                } else {
                    console.log("Please enter Intern's school.");
                    return false;
                }
            }
        }
    ]) 
    .then(answers => {
        const {managername, managerid, manageremail, managerofficenumber, engineername, engineerid, engineeremail, engineergithub, internname, internid, internemail, internschool} = answers;
        let manager = new Manager(managername, managerid, manageremail, managerofficenumber);
        let engineer = new Engineer(engineername, engineerid, engineeremail, engineergithub);
        let intern = new Intern(internname, internid, internemail, internschool);
        teamData.push(manager)
        teamData.push(engineer)
        teamData.push(intern);
        // if (addEmployee) {
        //     promptTeam(teamData);
        // } else {
            return teamData;
       // } 
    });
//     // create array for manager here and push it to teamData array before starting next function
//     .then(answers => {
//         const {name, id, email, officeNumber} = answers;
//         const manager = new Manager(name, id, email, officeNumber);
//         console.log(manager);
//         teamData.push(manager);
//         return teamData;
//     });
// };

// const promptEngineer = () => {

//     // // ask manager if to add an Engineer or an Intern or Finish to create the profile.
//     // return inquirer
//     //     .prompt([
//     //     {
//     //         type: 'checkbox',
//     //         name: 'option',
//     //         message: 'Please choose one of the following options to add an Engineer or Intern to the team profit or Finish to create your team profile',
//     //         choices: ['Engineer', 'Intern', 'Finish']
//     //     }    
//     // ])
//     //     .then(option => {
       
//     //         switch(option) {

//     //             case'Engineer':
                
//     return inquirer.prompt([
//                 {    
//                     type: 'input',
//                     name: 'name',
//                     message: "Please enter Engineer's name (required)",
//                     validate: nameEntered => {
//                         if (nameEntered) {
//                             return true;
//                         } else {
//                             console.log("Please enter Engineer's name!");
//                             return false;
//                         }    
//                     }
//                 },
//                 {   
//                     type: 'input',
//                     name: 'id',
//                     message: "Please enter Engineer's ID number (required)",
//                     validate:   idEntered => {
//                         if (idEntered) {
//                             return true;
//                         } else {
//                             console.log('Please enter ID number');
//                             return false;
//                         }
//                     }
//                 },       
//                 {   
//                     type: 'input',
//                     name: 'email',
//                     message: "Please enter Engineer's email address (required)",
//                     validate:   emailAdded => {
//                         if (emailAdded) {
//                             return true;
//                         } else {
//                             console.log('Please enter email address');
//                             return false;
//                         }
//                     }    
//                 },
//                 // Engineer profile includes GitHub Username
//                 {   
//                     type: 'input',
//                     name:  'gitHub',
//                     message: "Please enter Engineer's GitHub username (required)",
//                     validate:   githubAdded => {
//                         if (githubAdded) {
//                             return true;
//                         } else {
//                         console.log("Please enter Engineer's username.");
//                             return false;
//                         } 
//                     }
//                 },
//                 {   type: "confirm",
//                     name: "addEmployee",
//                     message: "Would you like to add another employee?",
//                     default: "false"
//                 }        
//                 ]) 
//                 .then(answers => {
//                     const {name, id, email, github, addEmployee} = answers; 
//                     let engineer = new Engineer(name, id, email, github);
//                     teamData.push(engineer);

//                     // if (addEmployee) {
//                     //     promptTeam(teamData);
//                     // } else {
//                         return teamData;
//                     //} 
//                 });                    
//             }                
//     const promptIntern = () => {                
//                 // case 'Intern':
//                 return inquirer
//                         .prompt([
//                 {    
//                         type: 'input',
//                         name: 'name',
//                         message: "Please enter Intern's name (required)",
//                         validate: nameEntered => {
//                             if (nameEntered) {
//                                 return true;
//                             } else {
//                                 console.log("Please enter Intern's name!");
//                                 return false;
//                             }    
//                         }
//                     },
//                     {   
//                         type: 'input',
//                         name: 'id',
//                         message: "Please enter Intern's ID number (required)",
//                         validate:   idEntered => {
//                             if (idEntered) {
//                                 return true;
//                             } else {
//                                 console.log('Please enter ID number');
//                                 return false;
//                             }
//                         }
//                     },       
//                     {   
//                         type: 'input',
//                         name: 'email',
//                         message: "Please enter Intern's email address (required)",
//                         validate:   emailAdded => {
//                             if (emailAdded) {
//                                 return true;
//                             } else {
//                                 console.log('Please enter email address');
//                                 return false;
//                             }
//                         }    
//                     },
//                     // Intern's profile includes school name
//                     {   
//                         type: 'input',
//                         name:  'school',
//                         message: "Please enter Intern's school (required)",
//                         validate:   githubAdded => {
//                             if (githubAdded) {
//                                 return true;
//                             } else {
//                                 console.log("Please enter Intern's school.");
//                                 return false;
//                             }
//                         }
//                     }
//                 ]) 
//                 .then(answers => {
//                     const {name, id, email, school, addEmployee} = answers;
//                     let intern = new Intern(name, id, email, school);
//                     (teamData).push(intern);
//                     // if (addEmployee) {
//                     //     promptTeam(teamData);
//                     // } else {
//                         return teamData;
//                    // } 
//                 });
                
//             //     case 'Finish':
//             //     return teamData;
//             // }
   }; 
        
      
// function to initalize app and create array of answers that then trigger menu with add engineer, add intern or finish options
function init() {
    promptTeam()
        .then(teamData => {
       console.log(teamData);
       const generatingTeamTemplate = generateTeamTemplate(teamData);
 
        // //generate html page with employee cards
       fs.writeFile('./dist/team-Template.html', generatingTeamTemplate, err => {
           if (err) throw err;
        });
    });
};

//Function call to initialize app
init();
