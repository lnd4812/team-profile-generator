function generateTeamTemplate(team) {
    console.table(team);
    
//     const managerArray = team[0];
//     console.log(managerArray);
    // create Manager object; manager will be at index 0 in team array
        
    // extract remaining employee objects from team array; start at index 1
    for (var i = 0; i < team.length; i++) {
           if (team[i[1]] === "Manager") {
           const managerArray = team[i];
           console.log(managerArray);
        } else if (team[i[1]] === "Engineer") {
           const engineerArray = team[i];
           console.log(engineerArray);
        } else if (team[i[1]] === "Intern") {
           const internArray = team[i];
           console.log(internArray);   
        };
    
   };
    


    //     const { manager, engineer, intern } = team;
//     // where team is meant to be an array of subarrays for each employee    
//     console.log(manager,engineer,intern)
    

  // make a function that after checking which type of employee you have sends the data into the employeeCard function
    


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
                         
                if (${team[i]}.includes('manager)) {                   
                    ${team}
                        .filter((${ managerArray}) => employee)
                        .map((${ role, name, id, email, officeNumber}))
                        <div class="card manager">                        
                            <div class='card-header manager'>                            
                                <h2 class="ee-name">${name}</h2><br>                            
                                <h4 class="ee-role">${role}</h4>                        
                            </div>
                            <div class="card-body manager">                           
                                <div class='id'>${id}</div>                            
                                <div class='email'>${email}</div>                            
                                <div class='last office-number'>${officeNumber}</div>                        
                            </div>                   
                        </div>               
                } else if (${team[i]}.includes('engineer')) {
                    ${team}
                        .filter((${ engineerArray}) => employee)
                        .map((${ role, name, id, email, github}));
                        <div class='card engineer'>                       
                            <div class='card-header engineer'>    
                                <h2 class="ee-name">${name}</h2><br>                            
                                <h4 class="ee-role">${role}</h4>                        
                            </div>
                            <div class='card-body engineer'>                           
                                <div class='id'>${id}</div>                            
                                <div class='email'>${email}</div>                            
                                <div class='last github'>${github}</div>                     
                            </div>                    
                        </div>                  
                } else if (${team[i]}.includes('intern')}) {   
                    ${team}
                        .filter((${ internArray }) => employee)
                        .map((${ role, name, id, email, officeNumber}));
                        <div class='intern-card'>                        
                            <div class='card-header intern'>                           
                                <h2 class="ee-name">${name}</h2><br>                           
                                <h4 class="ee-role">${role}</h4>
                            </div>                       
                            <div class='card-body intern'>                            
                                <div class='id'>${id}</div>                            
                                <div class='email'>${email}</div>                            
                                <div class='last school'>${school}</div>                        
                            </div>                    
                        </div>                
                    }   
            </main>
        </body>
        <script src="../src/script.js"></script>
    </html>
    `;
}

// module.exports = generateTeamTemplate;    