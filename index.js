const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeamTemplate = require("./src/team-template");
const { mainModule } = require("process");

// use inquirer module to prompt manager to start compiling team roster
const teamData = [];
const promptManager = () => {

  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter your name. (required)",
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
        const { name, id, email, officeNumber } = answers;
        const manager = new Manager(name, id, email, officeNumber);
        // console.log(manager);
        teamData.push(manager);
       // promptTeam(teamData);
      })
  );
};

const promptTeam = () => {
  // just checking that data from promptManager passed to promptTeam
  console.log(teamData);

  // ask if manager wants to add an Engineer or an Intern or Finish to create the profile.
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "option",
        message: "If you would like to add a member to your team, please check option blelow. Otherwise, check Finish to complete the team profile.",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((option) => {
      console.log(option);

      if (option.includes('Engineer')) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "Enter name of Engineer. (Required)",
              validate: (nameEntered) => {
                if (nameEntered) {
                  return true;
                } else {
                  console.log("Please enter name of Engineer");
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
              message: "Please enter email address for Engineer (required)",
              validate: (emailAdded) => {
                if (emailAdded) {
                  return true;
                } else {
                  console.log("Please enter the email address");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "github",
              message: "Please GitHub username for Engineer. (required)",
              validate: (githubAdded) => {
                if (githubAdded) {
                  return true;
                } else {
                  console.log("Please enter engineer's gitHub username.");
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
            const { name, id, email, github, addEmployee } = answers;
            let engineer = new Engineer(name, id, email, github);
            teamData.push(engineer);
            if (addEmployee) {
              return promptTeam(teamData);
            } else {
              return teamData;
            }
          });
      } else if (option.includes("Intern")) {
        inquirer
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
              },
            },
            {
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
              },
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
              },
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
            const { name, id, email, school, addEmployee } = answers;
            let intern = new Intern(name, id, email, school);
            teamData.push(intern);
            if (addEmployee) {
              return promptTeam(teamData);
            } else {
              return teamData;
            }
          });
      } else if (option.includes("Finish")) {
        return teamData;
      }
    });
};

// function to initalize app and create array of answers for team profile
async function init() {
 await  promptManager()
 
 await promptTeam(); 

   
    // console.log(teamData, 'this is the undefined ');
    // const generatingTeamTemplate = generateTeamTemplate(teamData);
    // // //generate html page with employee cards
    // fs.writeFile("./dist/team-Template.html", generatingTeamTemplate, (err) => {
    //   if (err) throw err;
    // })
}

//Function call to initialize app
init();
