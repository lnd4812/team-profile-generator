function generateTeamTemplate(team) {
    console.table(team);

    team.forEach(teamMember => {
        // console.log(teamMember);

        if (teamMember.includes("manager")) {
                buildManagerCard();
        } else if (teamMember.includes("engineer")) {
                buildEngineerCard();
        } else if (teamMember.includes("intern")) {
                buildInternCard();
        }
    });
//   // make a function that after checking which type of employee you have sends the data into the employeeCard function
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
      
        
       
        </main>
        </body>
        <script src="../src/script.js"></script>
    </html>
   `;                
                
};
  {
        return`
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
        </div> }
`;
 }

module.exports = generateTeamTemplate;    