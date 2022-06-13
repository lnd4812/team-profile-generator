function generateTeamTemplate(team)   {  
    console.table(team); 
    
    for (var i = 0; i < team.length; i++) {
    console.log(team[i]);
    }

   let teamMember = [];       
    for (var i = 0; i < team.length; i++) {
        for (var j = 0; j < team[i].length; j++) {
            if (team[i[j]].role === "manager") {
                teamMember = {
                role: team[i].role,
                name: team[i].name,
                id: team[i].id,
                email: team[i].email,
                officeNumber: team[i].officeNumber
            }    
                console.log(teamMember);
                buildManagerCard();
        } else if (team[i[j]].role === "engineer") {
                teamMember = {
                role: team[i].role,
                name: team[i].name,
                id: team[i].id,
                email: team[i].email,
                github: team[i].github
            }   
                console.log(teamMember);
                buildEngineerCard();
        } else if (team[i].role === "intern") {
                teamMember = {
                 role: team[i].role,
                 name: team[i].name,
                 id: team[i].id,
                 email: team[i].email,
                 school: team[i].officeNumber
                }     
                console.log(teamMember);
               buildInternCard();
        }
        }
    
};

    // create employee id cards
    const buildManagerCard = teamMember => {
        
    return `    
        <div class="card manager">                        
            <div class='card-header manager'> 
            ${teamMember
                .filter(({role}) => role)
                .map(({ role, name, id, email, officeNumber}) => {
                return`                              
                <h2 class="ee-name">${name}</h2><br>                            
                <h4 class="ee-role">${role}</h4>                        
            </div>
            <div class="card-body manager">                           
                <div class='id'>${id}</div>                            
                <div class='email'>${email}</div>                            
                <div class='office-number'>${officeNumber}</div>                        
            </div> 
                `;
            })
        }    
        </div>
        })                      
        `;
    };

    const buildEngineerCard = teamMember => {
        
        return `    
            <div class="card engineer">                        
                <div class='card-header engineer'> 
                ${teamMember
                    .filter(({role}) => role)
                    .map(({ role, name, id, email, github}) => {
                    return`                              
                    <h2 class="ee-name">${name}</h2><br>                            
                    <h4 class="ee-role">${role}</h4>                        
                </div>
                <div class="card-body engineer">                           
                    <div class='id'>${id}</div>                            
                    <div class='email'>${email}</div>                            
                    <div class='github'>${github}</div>                        
                </div> 
                    `;
                })
            }    
            </div>
            })                      
            `;
        };

        const buildInternCard = teamMember => {
        
            return `    
                <div class="card intern">                        
                    <div class='card-header intern'> 
                    ${teamMember
                        .filter(({role}) => role)
                        .map(({ role, name, id, email, school}) => {
                        return`                              
                        <h2 class="ee-name">${name}</h2><br>                            
                        <h4 class="ee-role">${role}</h4>                        
                    </div>
                    <div class="card-body intern">                           
                        <div class='id'>${id}</div>                            
                        <div class='email'>${email}</div>                            
                        <div class='school'>${school}</div>                        
                    </div> 
                        `;
                    })
                }    
                </div>
                })                      
                `;
            };
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
                ${buildManagerCard(teamMember)}
                ${buildEngineerCard(teamMember)}
                ${buildInternCard(teamMember)}
            
            </main>
        </body>
        <script src="../src/script.js"></script>
    </html>
   `;
 
   
 };


module.exports = generateTeamTemplate;

    