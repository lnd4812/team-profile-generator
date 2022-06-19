const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class teamBuilder {
    constructor() {
        this.employees = [];
        
    }      

    initializeEmployee() {
        this.employees.push(new Employee('name','id', 'email', 'officeNumber'));
        this.employees.push(new Employee('name','id', 'email', 'github'));
        this.employees.push(new Employee('name','id', 'email', 'school'));
    }    
    
     // Manager is first employee added to array, so create manager team card 
    buildManagerCard(engineer) {
        return`
            <div class="card manager">                        
                <div class='card-header manager'> 
                ${manager
                    .filter(({ employees }) => employees)
                    .map(({ name, id, email, officeNumber}) => {
                        return`<h2 class="ee-name">${name}</h2><br>                            
                    <h4 class="ee-role">Manager</h4>                        
                </div>
                <div class="card-body manager">                           
                    <div class='id'>${id}</div>                            
                    <div class='email'>${email}</div>                            
                    <div class='office-number'>${officeNumber}</div>                        
                </div>
                        `;
                    })
                })          
            </div>
        };
     `;                        
    };

    buildEngineerCard(engineer) {
        return`
            <div class="card engineer">                        
                <div class='card-header engineer'>
                ${engineer
                    .filter(({ employees }) => employees)
                    .map(({ name, id, email, github}) => {                                              
                    return `<h2 class="ee-name">${name}</h2><br>                            
                    <h4 class="ee-role">Engineer</h4>                        
                </div>
                <div class="card-body engineer">                           
                    <div class='id'>${id}</div>                            
                    <div class='email'>${email}</div>                            
                    <div class='github'>${github}</div>                        
                </div>
                        `;
                    })
                })          
            </div>
            };    
        `;
    };
    
    buildInternCard(intern) {
       return ` 
        <div class="card intern">                        
            <div class='card-header intern'>                                           
            ${intern
                .filter(({ employees }) => employees)
                .map(({ name, id, email, school}) => {                                              
                return `<h2 class="ee-name">${name}</h2><br>                            
                <h4 class="ee-role">Engineer</h4>                                          
                <h4 class="ee-role">Intern</h4>                        
            </div>
            <div class="card-body intern">                           
                <div class='id'>${id}</div>                            
                <div class='email'>${email}</div>                            
                <div class='school'>${school}</div>                        
            </div>
                    `;
                })
            })
        </div>  
        };    
        `;
    };

    renderTeamPage(teamData) {
        // console.log(teamData);
        // const { manager, engineer, intern } = teamData;
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
                <main class="team-board"> 
                    <div class="card manager">  
                        <div class='card-header manager'> 
                            <h2 class="ee-name">${teamData[0].name}</h2>                            
                            <h3 class="ee-role">Manager</h3>                        
                        </div>
                        <div class="card-body manager">                           
                            <div class='id'>ID: ${teamData[0].id}</div>                            
                            <div class='email'>Email: ${teamData[0].email}</div>                            
                            <div class='office-number'>Office number: ${teamData[0].officeNumber}</div>                        
                        </div>
                    </div>
                    <div class="card engineer">     
                        <div class='card-header engineer'>
                            <h2 class="ee-name">${teamData[1].name}</h2>                            
                            <h3 class="ee-role">Engineer</h3>                        
                        </div>
                        <div class="card-body engineer">                           
                            <div class='id'>ID: ${teamData[1].id}</div>                            
                            <div class='email'>Email: ${teamData[1].email}</div>                            
                            <div class='github'>GitHub: ${teamData[1].github}</div>                        
                        </div> 
                    </div>    
                </main>
            </body>
        </html>        
    `;               
    } 
} 

module.exports = teamBuilder;