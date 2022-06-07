// const fs = require("fs");
// const inquirer = require("inquirer");
// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
// // const generateTeamTemplate = require("./src/team-template");

// class Profile {
//     constructor() {
//         this.manager;
//         this.engineer;
//         this.intern;
//         this.team = [];
//     }

//     buildProfile() {
//         this.manager.push(new Manager(`${team.manager.name}`));
//         this.
//     }











//     promptManager() {
        
//         inquirer
//             .prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "Please enter your name. (required)",
//             },
//             {
//                 type: "input",
//                 name: "id",
//                 message: "Please enter your ID number (required)",
//             },
//             {
//                 type: "input",
//                 name: "email",
//                 message: "Please enter your email address (required)",
//             },
//             {
//                 type: "input",
//                 name: "officeNumber",
//                 message: "Please enter your office contact number (required)",
//             },
//             ])
//         .then(({answers}) => {
//             const { name, id, email, officeNumber } = answers;
//             this.manager = new Manager(name, id, email, officeNumber);
//             this.team.push(manager);
            
//             this.promptTeam();
//         });
//     };

//     promptTeam() {

//     inquirer
//         .prompt([
//           {
//             type: "list",
//             name: "option",
//             message: "Please check either Engineer or Intern to add to team, or check Finish to exit the menu and create team profile.",
//             choices: ["Engineer", "Intern", "Finish"],
//           } 

//         ])
//         .then(({option}) => {
//             if (option === 'Engineer') {
//                 return inquirer
//                   .prompt([
//                     {
//                       type: "input",
//                       name: "name",
//                       message: "Enter name of Engineer.", 
//                     },
//                     {
//                         type: 'input',
//                         name: 'id',
//                         message: 'Please enter your ID number (required)',
//                     },       
//                     {   
//                         type: 'input',
//                         name: 'email',
//                         message: 'Please enter email address for Engineer (required)',
//                      },
//                     {   
//                         type: 'input',
//                         name:  'github',
//                         message: 'Please GitHub username for Engineer. (required)',
//                     },
//                     {   type: "confirm",
//                         name: "addEmployee",
//                         message: "Would you like to add another employee?",
//                         default: "true"
//                     }    
//                     ])
//                   .then((answers) => {
//                     const { name, id, email, github, addEmployee } = answers;
//                     this.engineer = new Engineer(name, id, email, github);
//                     this.team.push(engineer);
//                     if (addEmployee) {
//                       this.promptTeam();
//             } else if (option === "Intern") {
//                 return inquirer
//                   .prompt([
//                     {
//                       type: 'input',
//                         name: 'name',
//                         message: "Please enter Intern's name (required)",
//                     },
//                     {   
//                         type: 'input',
//                         name: 'id',
//                         message: "Please enter Intern's ID number (required)",
//                     },       
//                     {   
//                         type: 'input',
//                         name: 'email',
//                         message: "Please enter Intern's email address (required)",
//                     },
//                     // Intern's profile includes school name
//                     {   
//                         type: 'input',
//                         name:  'school',
//                         message: "Please enter Intern's school (required)",
//                      },
//                     {   
//                         type: "confirm",
//                         name: "addEmployee",
//                         message: "Would you like to add another employee?",
//                         default: "true"
//                     }    
//                 ])
//                   .then((answers) => {
//                     const { name, id, email, school, addEmployee } = answers;
//                     this.intern = new Intern(name, id, email, school);
//                     this.team.push(intern);
//                     if (addEmployee) {
//                       this.promptTeam();
//                     }
//                     console.log('bottom', this.team);
//                 });
//             };
//         });
//     }});    
// }};

module.exports = Profile;