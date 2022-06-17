function generateTeamTemplate(teams)   {  
    console.table(teams); 
      
    
    for (let i = 0; i < teams.length; i++) {
        this.team[i] = []; 
        for (let j = 0; j < this.teams[i].length; j++) {
        this.role = teams[i].role;
        if (this.role = 'manager') {
            this.team.push(this.role);
            this.name = teams[i].name;
            this.team.push(this.name);
            this.id = teams[i].id;
            this.team.push(this.id);
            this.email = teams[i].email;
            this.team.push(this.email);
            console.log(this.team);}
            //     for (let j =0; j < teams[i].length; j++) {
    //     console.log(this.teams[i][j]);
    //     this.team = teams[i][j];
    //    }
    };
   
}
getRole() {
    return this.role = 'Employee';

}getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

}; 
    
    // // create employee id cards
    // const buildManagerCard = teamMember => {
        
    // return `    
    //     <div class="card manager">                        
    //         <div class='card-header manager'> 
    //         ${teamMember
    //             .filter(({role}) => role)
    //             .map(({ role, name, id, email, officeNumber}) => {
    //             return`                              
    //             <h2 class="ee-name">${name}</h2><br>                            
    //             <h4 class="ee-role">${role}</h4>                        
    //         </div>
    //         <div class="card-body manager">                           
    //             <div class='id'>${id}</div>                            
    //             <div class='email'>${email}</div>                            
    //             <div class='office-number'>${officeNumber}</div>                        
    //         </div> 
    //             `;
    //         })
    //     }    
    //     </div>
    //     })                      
    //     `;
    // };

    // const buildEngineerCard = teamMember => {
        
    //     return `    
    //         <div class="card engineer">                        
    //             <div class='card-header engineer'> 
    //             ${teamMember
    //                 .filter(({role}) => role)
    //                 .map(({ role, name, id, email, github}) => {
    //                 return`                              
    //                 <h2 class="ee-name">${name}</h2><br>                            
    //                 <h4 class="ee-role">${role}</h4>                        
    //             </div>
    //             <div class="card-body engineer">                           
    //                 <div class='id'>${id}</div>                            
    //                 <div class='email'>${email}</div>                            
    //                 <div class='github'>${github}</div>                        
    //             </div> 
    //                 `;
    //             })
    //         }    
    //         </div>
    //         })                      
    //         `;
    //     };

    //     const buildInternCard = teamMember => {
        
    //         return `    
    //             <div class="card intern">                        
    //                 <div class='card-header intern'> 
    //                 ${teamMember
    //                     .filter(({role}) => role)
    //                     .map(({ role, name, id, email, school}) => {
    //                     return`                              
    //                     <h2 class="ee-name">${name}</h2><br>                            
    //                     <h4 class="ee-role">${role}</h4>                        
    //                 </div>
    //                 <div class="card-body intern">                           
    //                     <div class='id'>${id}</div>                            
    //                     <div class='email'>${email}</div>                            
    //                     <div class='school'>${school}</div>                        
    //                 </div> 
    //                     `;
    //                 })
    //             }    
    //             </div>
    //             })                      
    //             `;
    //         };
    //         return `
    
    //         // console.log(teamTemplate);
    //         <!DOCTYPE html
    //         <html lang="en">
    //         <head>
    //             <meta charset="UTF-8">
    //             <meta name = "viewport" content="width=device-width, initial-scale-1.0">        
    //             <meta http-equiv="X-UA Compatible" content="ie=edge">        
    //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">        
    //             <link rel="stylesheet" href="../src/style.css">       
    //             <title>Team-Profile-Generator</title>  
    //         </head>    
    //         <body>       
    //             <header>          
    //                 <h1 class="title">My Team</h1>       
    //             </header>       
          
    //             <main class="team-board">        
    //                 ${buildManagerCard(manager)}
    //                 ${buildEngineerCard(engineer)}
    //                 ${buildInternCard(intern)}
    //             </main>
    //         </body>
    //         <script src="../src/script.js"></script>
    //         </html>
    //        `;
       
    //     }
module.exports = generateTeamTemplate;

   

   