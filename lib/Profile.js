const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const TeamBuilder = require("../src/team-template");

class Profile {
  constructor() {
    this.teams = [];
  }

  startTeamProfile() {
    // the first employee to be added to the team profile is the manager & would therefore be the first object in the employees array
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
          }
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
          }
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
          }
        },
        // because a user in the position of Manager is answering these questions, complete manager card
        {
          type: "input",
          name: "officeNumber",
          message: "Please enter your office number (required)",
          validate: (officeNumberAdded) => {
            if (officeNumberAdded) {
              return true;
            } else {
              console.log("Please enter your office number.");
              return false;
            }
          }
        },
      ])
      .then((answers) => {
        const { name, id, email, officeNumber } = answers;
        this.manager = new Manager(name, id, email, officeNumber);
        this.teams.push(this.manager);

        // proceed to function that will lead manager through process to add ee's to team
        this.promptTeam();
      })
  }

  promptTeam() {
    // ask manager which employee role to add, Engineer or Intern or, to create profile, Finish.
    inquirer
      .prompt([
        {
          type: "checkbox",
          name: "options",
          message:
            "Please check either Engineer or Intern to add to team, or check Finish to exit the menu and create team profile.",
          choices: ["Engineer", "Intern", "Finish"],
        },
      ])
      .then((responses) => {
        let option = responses.options[0];

        switch (option) {
          case "Engineer":
            this.buildEngineer();
            break;
          case "Intern":
            this.buildIntern();
            break;
          default:
            this.buildTeamProfile();
        }
      })
  }

  buildEngineer() {
    // lead manager through questions to obtain engineer profile card info
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter name of Engineer (required)",
          validate: (nameEntered) => {
            if (nameEntered) {
              return true;
            } else {
              console.log("Please enter Engineer's name!");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "id",
          message: "Please enter ID number for Engineer (required)",
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
          message: "Please enter email address for Engineer (required)",
          validate: (emailAdded) => {
            if (emailAdded) {
              return true;
            } else {
              console.log("Please enter Engineer's email address");
              return false;
            }
          }
        },
        {
          type: "input",
          message: "Please GitHub username for Engineer (required)",
          name: "github",
          validate: (githubAdded) => {
            if (githubAdded) {
              return true;
            } else {
              console.log("Please enter Engineer's GitHub username.");
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
        const { name, id, email, github, addEmployee } = answers;
        const newEngineer = new Engineer( name, id, email, github);
        this.teams.push(newEngineer);
        if (addEmployee) {
          this.promptTeam();
        } else {
          this.buildTeamProfile();
        }
      });
  }

  buildIntern() {
    // lead manager through questions to obtain engineer profile card info
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
          }
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
        const { name, id, email, school, addEmployee } = answers;
        const newIntern = new Intern(name, id, email, school);
        this.teams.push(newIntern);
        if (addEmployee) {
          this.promptTeam();
        } else {
          this.buildTeamProfile();
        }
      })
  }

  // function to compile all responses and pass data to template file
  buildTeamProfile() {
    console.log(this.teams);
    const pageBuilder = new TeamBuilder();
    fs.writeFile('./dist/index.html', pageBuilder.renderTeamPage(this.teams), err => {
        if (err) throw new Error(err);
        console.log('page created');
    })
  }
};

module.exports = Profile;
