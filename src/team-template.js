


function generateTeamTemplate(team) {

    const { manager, engineer, intern } = team;
    // where team is meant to be an array of subarrays for each employee    
    console.log(manager,engineer,intern)


    //make a function that after checking which type of employee you have sends the data into the employeeCard function
    

    for (var i = 0; i < team.length; i++) {
        //         if (this.team[i].getRole(currentEmployee) ==="Manager") {
        //             // this.employeeCard();
        //         } else if (this.team[i].getRole(currentEmployee) === "Engineer") {
        //             this.employeeCard();
        //         } else if (this.team[i].getRole(currentEmployee) === "Intern") {
        //             this.employeeCard();
        //         } return this.outputProfile();  // where profile is the display card for each all employees
        //     };
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
            for (var i = 0; i < ${team.length}; i++) {             
            for (var j=0; j < ${team[i].length}; j++) {                
                if (${team[i[j]]}.includes('manager)) {                   
                    ${team}
                        .filter((${ employee}) => employee)
                        .map((${ name, role, id, email, officeNumber}))
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
                } else if (${Data[i[j]]}.includes('engineer')) {
                    ${Data}
                        .filter((${ employee}) => employee)
                        .map((${ name, role, id, email, github}));
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
                } else if (${Data[i[j]]}.includes('intern')}) {   
                    ${Data}
                        .filter((${ employee}) => employee)
                        .map((${ name, role, id, email, officeNumber}));
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

module.exports = generateTeamTemplate;    