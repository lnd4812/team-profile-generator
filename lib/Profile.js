const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Profile {
    constructor() {
        this.employees = [];
        this.currentEmployee;
        this.team=[];
        // this.manager;
        // this.engineer;
        // this.intern;
        // this.addEmployee = false; 
    }

    startTeamProfile() {
        // first step is to establish ee objects like this???? 
        this.employees.push(new Employee('manager', 'id', 'email', 'officeNumber'));
        this.employees.push(new Employee('engineer', 'id', 'email', 'github'));
        this.employees.push(new Employee('intern', 'id', 'email', 'school'));

    // the first employee to be added to the team profile is the manager & would therefore be the first object in the employees array     
        this.currentEmployee = this.employees[0];

    inquirer
     .prompt([
        {
            type: "input",
            name: "role",
            message: "Please enter your role (required)",
            validate: (roleEntered) => {
              if (roleEntered) {
                return true;
              } else {
                console.log("Please add your position in the company");
                return false;
              }
           },
        },
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
    .then(answers => {
        const { role, name, id, email, officeNumber } = answers;
        const manager = new Manager(role, name, id, email, officeNumber);
        this.team.push(manager);
        console.log(this.team);

        // proceed to function that will lead manager through process to add ee's to team
        this.promptTeam();
    });
};

    promptTeam() {
        // ask manager which employee role to add, Engineer or Intern or, to create profile, Finish.
      inquirer
        .prompt([
            {
                type: "checkbox",
                name: "roles",
                message: "Please check either Engineer or Intern to add to team, or check Finish to exit the menu and create team profile.",
                choices: ["Engineer", "Intern", "Finish"],
            } 
        ])
        .then(responses => {
            this.role = responses.roles[0];

            if (this.role === 'Engineer') {
                this.buildEngineer();            
            } else if (this.role === 'Intern') {
                this.buildIntern();
            } else {
                return this.buildTeamProfile();
            }        
        });   
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
                        console.log("Please enter engineer's name!");
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
        .then(answers => {
            const {name, id, email, github, addEmployee } = answers;
            const engineer = new Engineer(name, id, email, github);
            this.team.push(engineer);
            if (addEmployee) {
                this.promptTeam();
            } else {
                return this.buildTeamProfile();
            }
        });
    }
            
    buildIntern = function() {   
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
        .then(answers => {
            const {name, id, email, school, addEmployee } = answers;
            const intern = new Intern(name, id, email, school);
            this.team.push(intern);
            if (addEmployee) {
                this.promptTeam();
            } else {
                return this.buildTeamProfile();
            }
            buildTeamProfile();
        });
    }  
}; 

console.log(team);   
module.exports = Profile;
