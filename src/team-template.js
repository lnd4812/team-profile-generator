class teamBuilder {
  constructor() {}

  // Manager is first employee added to array, so create manager team card
  buildManagerCard(managerData) {
    return `
    <div class="card manager">  
        <div class='card-header manager'> 
            <h2 class="ee-name">${managerData.name}</h2>                            
            <h3 class="ee-role">Manager</h3>                       
        </div>
        <div class="card-body manager">                           
            <div class='id'><h5>ID: </h5>${managerData.id}</div>                          
            <div class='email'><h5>Email: </h5><a href="mailto:${managerData.email}">${managerData.email}</a></div>                            
            <div class='office-number'><h5>Office number: </h5>${managerData.officeNumber}</div>                      
        </div>
    </div>
    `;
  }

  // team cards for Engineer(s) and/or Intern(s) added to team
  buildEngineerCard(engineerData) {
    const { name, id, email, github } = engineerData;
    return `
        <div class="card engineer"> 
            <div class='card-header engineer'>
                <h2 class="ee-name">${name}</h2>                            
                <h3 class="ee-role">Engineer</h3>                        
            </div>
            <div class="card-body engineer">                           
                <div class='id'><h5>ID: </h5> ${id}</div>                            
                <div class='email'><h5>Email: </h5><a href="mailto:${email}">${email}</a></div>                            
                <div class='github'><h5>GitHub: </h5><a href="https://github.com/${github}">${github}</a></div>                        
            </div>
        </div> 
    `;
    }

  buildInternCard(internData) {
    const { name, id, email, school } = internData;
    return `
        <div class="card intern"> 
            <div class='card-header intern'>
                <h2 class="ee-name">${name}</h2>                            
                <h3 class="ee-role">Intern</h3>                        
            </div>
            <div class="card-body intern">                           
                <div class='id'><h5>ID: </h5>${id}</div>                            
                <div class='email'><h5>Email: </h5><a href="mailto:${email}">${email}</a></div>                            
                <div class='school'><h5>School: </h5>${school}</div>                        
            </div>
        </div> 
    `;
    }
  
  // extract the team member arrays from the data passed in Profile inquirer
  renderTeamPage(teamData) {
    const [manager] = teamData.filter((member) => member.getRole() === "Manager");
    const engineers = teamData.filter((member) => member.getRole() === "Engineer" );
    const interns = teamData.filter((member) => member.getRole() === "Intern");

    // create template for team member display
    return `
        <!DOCTYPE html
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name = "viewport" content="width=device-width, initial-scale-1.0">        
                <meta http-equiv="X-UA Compatible" content="ie=edge">        
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">        
                <link rel="stylesheet" href="../dist/style.css">       
                <title>Team-Profile-Generator</title>  
            </head>    
            <body>       
                <header>          
                    <h1 class="title">My Team</h1>       
                </header>
                <main class="team-board"> 
                    ${this.buildManagerCard(manager)}
                    ${engineers.map(this.buildEngineerCard).join("")}
                    ${interns.map(this.buildInternCard).join("")}
                </main>
            </body>
        </html>   
    `;
    }
  }

module.exports = teamBuilder;
