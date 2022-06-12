const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateTeamTemplate= require('../src/team-template')

class Profile {
    constructor() {
        this.employees = []; 
        this.currentEmployee; // is this needed here?
        this.index;
        this.team=[];
    }

    startTeamProfile() {
       // first step is to establish ee objects as arrays like this???? (one for each employee?)
        this.employees.push(new Employee('role','name','id', 'email', 'officeNumber'));
        this.employees.push(new Employee('role','name','id', 'email', 'github'));
        this.employees.push(new Employee('role','name','id', 'email', 'school'));
        this.index = this.employees[0];
        
        // the first employee to be added to the team profile is the manager & would therefore be the first object in the employees array     
        // this.currentEmployee = this.employees[0];

    inquirer
     .prompt([
        {
          type: 'input',
          name: 'role',
          message: 'Please indicate your role in the company. (required)',
          validate: (roleEntered) => {
            if (roleEntered) {
                return true;
            } else {
                console.log("Please enter your position.");
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
        this.employees = new Manager(role, name, id, email, officeNumber);
        this.team.push(this.employees);
        
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
                name: "options",
                message: "Please check either Engineer or Intern to add to team, or check Finish to exit the menu and create team profile.",
                choices: ["Engineer", "Intern", "Finish"],
            } 
        ])
        .then(responses => {
            this.option = responses.options[0];

            switch(this.option) {
            case 'Engineer':
                this.buildEngineer();
                break;            
            case "Intern":
                this.buildIntern(); 
                break;   
            default:
                this.buildTeamProfile();
                break;
            }        
        });   
    }    

    buildEngineer() {
    // lead manager through questions to obtain engineer profile card info    
      inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: "Please indicate employee's role for our records. (required)",
                validate: (roleEntered) => {
                  if (roleEntered) {
                      return true;
                  } else {
                      console.log("Please enter the position.");
                      return false;
                  }
                },
              },
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
                message: "Please GitHub username for Engineer (required)",
                name: "github",
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
            const { role, name, id, email, github, addEmployee } = answers;
            this.employees = new Engineer( role, name, id, email, github);
            this.team.push(this.employees);
            if (addEmployee) {
                this.promptTeam();
            } else {
                return this.buildTeamProfile();
            }
        });
    }
            
    buildIntern() {   
    // lead manager through questions to obtain engineer profile card info            
      inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: "Please indicate employee's role for our records. (required)",
                validate: (roleEntered) => {
                  if (roleEntered) {
                      return true;
                  } else {
                      console.log("Please enter the position.");
                      return false;
                  }
                },
              },
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
                const {role, name, id, email, school, addEmployee } = answers;
                this.employees = new Intern( role, name, id, email, school);
                this.team.push(this.employees);
                if (addEmployee) {
                    this.promptTeam();
                } else {
                    return this.buildTeamProfile();
                }
            });
        }; 

    // function to compile all responses and pass data to template file
    buildTeamProfile () {
       generateTeamTemplate(this.team);
    
        //    console.log(this.team);
    };   
};
module.exports = Profile;