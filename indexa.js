const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateTeamTemplate = require("./src/team-template");

// use inquirer module to prompt manager to start compiling team roster
const teamData = [];
const promptManager = () => {

  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter your name (required)",
          validate: (nameEntered) => {
            if (nameEntered) {
              return true;
            } else {
              console.log("Please enter your name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "role",
          message: "Please enter your role (required)",
          validate: (roleEntered) => {
            if (roleEntered) {
              return true;
            } else {
              console.log("Please enter your employee position");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter your ID number (required)",
          validate: (idEntered) => {
            if (idEntered) {
              return true;
            } else {
              console.log("Please enter ID number");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter your email address (required)",
          validate: (emailAdded) => {
            if (emailAdded) {
              return true;
            } else {
              console.log("Please enter your email address");
              return false;
            }
          },
        },
        // because Manager is answering these questions, complete manager card
        {
          type: "input",
          name: "officeNumber",
          message: "Please enter your office contact number (required)",
          validate: (officeNumberAdded) => {
            if (officeNumberAdded) {
              return true;
            } else {
              console.log("Please enter your contact number.");
              return false;
            }
          },
        },
      ])
      // create array for manager here and push it to teamData array before starting next function
      .then((answers) => {
        const { name, role, id, email, officeNumber } = answers;
        const manager = new Manager(name, role, id, email, officeNumber);
        // console.log(manager);
        teamData.push(manager);
       // promptTeam(teamData);
      })
  );
};

const promptTeam = () => {
  // ask if manager wants to add an Engineer or an Intern or, to create profile, Finish.
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "options",
        message: "Please check either Engineer or Intern to add to team, or check Finish to exit the menu and create team profile.",
        choices: ["Engineer", "Intern", "Finish"],
      } 
    ])
    .then(responses => {
     
    // "extract" response from options array  
    let option = responses.options[0];
   
    if (option === 'Engineer') {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Enter name of Engineer (required)",
              validate: (nameEntered) => {
                if (nameEntered) {
                  return true;
                } else {
                  console.log("Please enter engineer's name!");
                  return false;
                }
              }, 
            },
            {
              type: "input",
              name: "role",
              message: "Please reconfirm employee's role (required)",
              validate: (roleEntered) => {
                if (roleEntered) {
                  return true;
                } else {
                  console.log("Please enter employee's position");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "Please enter ID number for engineer (required)",
              validate: (idEntered) => {
                if (idEntered) {
                  return true;
                } else {
                  console.log("Please enter ID number");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "email",
              message: "Please enter email address for Engineer (required)",
              validate: (emailAdded) => {
                if (emailAdded) {
                  return true;
                } else {
                  console.log("Please enter engineer's email address");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "github",
              message: "Please GitHub username for Engineer (required)",
              validate: (githubAdded) => {
                if (githubAdded) {
                  return true;
                } else {
                  console.log("Please enter engineer's GitHub username.");
                  return false;
                }
              },    
            },
            {
              type: "confirm",
              name: "addEmployee",
              message: "Would you like to add another employee?",
              default: "true",
            },
          ])
          .then((answers) => {
            const { name, role, id, email, github, addEmployee } = answers;
            let engineer = new Engineer(name, role, id, email, github);
            teamData.push(engineer);
            if (addEmployee) {
              promptTeam(teamData);
            } else {
              console.log(teamData);
            }
          });
      } else if (option === "Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Please enter Intern's name (required)",
              validate: (nameEntered) => {
                if (nameEntered) {
                  return true;
                } else {
                  console.log("Please enter Intern's name!");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "role",
              message: "Please reconfirm employee's role (required)",
              validate: (roleEntered) => {
                if (roleEntered) {
                  return true;
                } else {
                  console.log("Please enter employee's position");
                  return false;
                }
              },
            },{
              type: "input",
              name: "id",
              message: "Please enter Intern's ID number (required)",
              validate: (idEntered) => {
                if (idEntered) {
                  return true;
                } else {
                  console.log("Please enter ID number");
                  return false;
                }
              }
            },
            {
              type: "input",
              name: "email",
              message: "Please enter Intern's email address (required)",
              validate: (emailAdded) => {
                if (emailAdded) {
                  return true;
                } else {
                  console.log("Please enter email address");
                  return false;
                }
              }
            },
            // Intern's profile includes school name
            {
              type: "input",
              name: "school",
              message: "Please enter Intern's school (required)",
              validate: (schoolAdded) => {
                if (schoolAdded) {
                  return true;
                } else {
                  console.log("Please enter Intern's school.");
                  return false;
                }
              }
            },
            {
              type: "confirm",
              name: "addEmployee",
              message: "Would you like to add another employee?",
              default: "true",
            },
          ])
          .then((answers) => {
            const { name, role, id, email, school, addEmployee } = answers;
            let intern = new Intern(name, role, id, email, school);
            teamData.push(intern);
            if (addEmployee) {
              promptTeam(teamData);
            } else {
              console.log(teamData);
             }
          });
        }
        console.log('bottom', teamData);
     });
  }
// function to initalize app and create array of answers for team profile
async function init() {
 await  promptManager()
 await promptTeam()
}

  // .then(teamData => {
    // return generateTeamTemplate(teamData);
 
  // console.log('bottom', teamData);
  // const generatingTeamTemplate = generateTeamTemplate(teamData);
  //   // //generate html page with employee cards
  //   fs.writeFile("./dist/team-Template.html", generatingTeamTemplate, (err) => {
  //      if (err) throw err;
  //    })
  
  

  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  // })
  // .catch(err => {
  //   console.log(err);
  // });



//Function call to initialize app
init();