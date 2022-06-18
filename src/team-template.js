const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class teamBuilder {
    constructor() {
        this.employees = [];
        this.manager = []; 
        this.engineer = [];
        this.intern = [];
    }      

    initializeEmployee() {
        this.employees.push(new Employee('role','name','id', 'email', 'officeNumber'));
        this.employees.push(new Employee('role','name','id', 'email', 'github'));
        this.employees.push(new Employee('role','name','id', 'email', 'school'));
    }
    
    // Manager is first employee added to array, so create manager teamgit 
    managerCard() {
        manager = new Manager;
        Manager.push(role, name, id, email, officeNumber);
        console.log(Manager);
    }

    engineerCard() {
        this.engineer = new Engineer;
        Engineer.push(role, name, id, email, officeNumber);
        console.log(Engineer);
    }
    
    internCard() {
        
        this.intern = new Intern;
        Intern.push(role, name, id, email, school);
        console.log(Intern);
      
    }

    renderTeamPage(teamData) {
       return `
        <!DOCTYPE html
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name = "viewport" content="width=device-width, initial-scale-1.0">        
                <meta http-equiv="X-UA Compatible" content="ie=edge">        
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">        
                <link rel="stylesheet" href="../src/style.css">       
                <title>Team-Profile-Generator</title>  
            </head>    
            <body>       
                <header>          
                    <h1 class="title">My Team</h1>       
                </header>
                <main class="container my-5 team-board"> 
        `;              
    } 

    ManagerCard = manager => {    
        return`
            <div class="card manager">                        
                <div class='card-header manager'> 
                    <h2 class="ee-name">${team[i].name}</h2><br>                            
                    <h4 class="ee-role">${team[i].role}</h4>                        
                </div>
                <div class="card-body manager">                           
                    <div class='id'>${team[i].id}</div>                            
                    <div class='email'>${team[i].email}</div>                            
                    <div class='office-number'>${team[i].officeNumber}</div>                        
                </div>           
            </div>                        
       `;
    }
    EngineerCard = engineer => {
        return`
            <div class="card engineer">                        
                <div class='card-header engineer'>                                              
                    <h2 class="ee-name">${team[i].name}</h2><br>                            
                    <h4 class="ee-role">${team[i].role}</h4>                        
                </div>
                <div class="card-body engineer">                           
                    <div class='id'>${team[i].id}</div>                            
                    <div class='email'>${team[i].email}</div>                            
                    <div class='github'>${team[i].github}</div>                        
                </div>           
            </div>                       
        `;
        };

    InternCard = intern => {
        return `
            <div class="card intern">                        
            <div class='card-header intern'>                                           
                ${team[i]} = 
                }  
                <h2 class="ee-name">${team[i].name}</h2><br>                            
                <h4 class="ee-role">${team[i].role}</h4>                        
            </div>
            <div class="card-body intern">                           
                <div class='id'>${team[i].id}</div>                            
                <div class='email'>${team[i].email}</div>                            
                <div class='school'>${team[i].school}</div>                        
            </div>        
            </div>                                `;
`;


                
                   
                </main>
        
            </body>
        </html>

    }
}

  
module.exports = teamBuilder;

   

   