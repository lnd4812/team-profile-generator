// if (${team[i]}.includes('manager')) {                   
                                  
                // } else if (${team[i]}.includes('engineer')) {
                //     ${team}
                //         .filter((${ engineerArray}) => employee)
                //         .map((${ role, name, id, email, github}));
                //         <div class='card engineer'>                       
                //             <div class='card-header engineer'>    
                //                 <h2 class="ee-name">${name}</h2><br>                            
                //                 <h4 class="ee-role">${role}</h4>                        
                //             </div>
                //             <div class='card-body engineer'>                           
                //                 <div class='id'>${id}</div>                            
                //                 <div class='email'>${email}</div>                            
                //                 <div class='last github'>${github}</div>                     
                //             </div>                    
                //         </div>                  
                // } else if (${team[i]}.includes('intern')}) {   
                //     ${team}
                //         .filter((${ internArray }) => employee)
                //         .map((${ role, name, id, email, officeNumber}));
                //         <div class='intern-card'>                        
                //             <div class='card-header intern'>                           
                //                 <h2 class="ee-name">${name}</h2><br>                           
                //                 <h4 class="ee-role">${role}</h4>
                //             </div>                       
                //             <div class='card-body intern'>                            
                //                 <div class='id'>${id}</div>                            
                //                 <div class='email'>${email}</div>                            
                //                 <div class='last school'>${school}</div>                        
                //             </div>                    
                //         </div>                
                //     }   
            // team.forEach(teamMember => {
    //     console.log(teamMember);

    //     if (teamMember.includes("manager")) {
    //             console.log(teamMember);
    //             // buildManagerCard();
    //     } else if (teamMember.includes("engineer")) {
    //             console.log(teamMember);// buildEngineerCard();
    //     } else if (teamMember.includes("intern")) {
    //             console.log(teamMember); // buildInternCard();
    //     }
    // });
    return `
        
    // console.log(team);
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
            ${buildManagerCard(managerArray)}
          
        </main>
    </body>
    <script src="../src/script.js"></script>
    </html>
   `;


};

// // create employee id cards
const buildManagerCard = managerArray => {
return `    
<div class="card manager">                        
    <div class='card-header manager'> 
    ${managerArray
        .filter(({manager}) => manager)
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
    const buildEngineerCard = EngineerArr => {
        return `    
            <div class="card engineer">                        
                <div class='card-header engineer'> 
                ${EngineerArr
                    .filter(({engineer}) => engineer)
                    .map(({ role, name, id, email, github}) => {
                    return`                              
                    <h2 class="ee-name">${name}</h2><br>                            
                    <h4 class="ee-role">${role}</h4>                        
                </div>
                <div class="card-body manager">                           
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

return `
        
        // console.log(team);
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
                ${buildManagerCard(managerArray)}
              
            </main>
        </body>
        <script src="../src/script.js"></script>
        </html>
       `;
    

};

// // create employee id cards
const buildManagerCard = managerArray => {
return `    
    <div class="card manager">                        
        <div class='card-header manager'> 
        ${managerArray
            .filter(({manager}) => manager)
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

    const buildInternCard = internArr => {
        return `    
            <div class="card intern">                        
                <div class='card-header intern'> 
                ${internArr
                    .filter(({intern}) => intern)
                    .map(({ role, name, id, email, school}) => {
                    return`                              
                    <h2 class="ee-name">${name}</h2><br>                            
                    <h4 class="ee-role">${role}</h4>                        
                </div>
                <div class="card-body manager">                           
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
    }