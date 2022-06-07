
const generateTeamBoard = teamData => {
    if (!teamData) {
        return '';
    }

    return `
    
  
{

    <div class='card manager'>
        <div class='card-header manager'>
            <h2 class="ee-name">${teamData.manager.name}</h2><br>
            <h4 class="ee-role">${teamData.manager.role}</h4>
        </div>
        <div class='card-body manager'>
            <div class='id'>${teamData.manager.id}</div>
            <div class='email'>${teamData.manager.email}</div>
            <div class='last office-number'>${teamData.manager.officeNumber}</div>
        </div>
    </div>
    <div class='card engineer'>
        <div class='card-header engineer'>
            <h2 class="ee-name">${teamData.engineer.name}</h2><br>
            <h4 class="ee-role">${teamData.engineer.role}</h4>
        </div>
        <div class='card-body engineer'>
            <div class='id'>${teamData.engineer.id}</div>
            <div class='email'>${teamData.engineer.email}</div>
            <div class='last github'>${teamData.engineer.github}</div>
        </div>
    </div>
    <div class='intern-card'>
        <div class='card-header intern'>
            <h2 class="ee-name">${teamData.intern.name}</h2><br>
            <h4 class="ee-role">${teamData.intern.role}</h4>
        </div>
        <div class='card-body intern'>
            <div class='id'>${teamData.intern.id}</div>
            <div class='email'>${teamData.intern.email}</div>
            <div class='last school'>${teamData.intern.school}</div>
        </div>
     </div>
     
   


       for (var i = 0; i < teamData.length; i++) { 
        for (var j=0; j<teamData[i].length; j++) {
            if (teamData[i].includes('manager')) {

               
                const header = {
                    name: teamData[i].manager.name,
                    role: "Manager"
                }
                const body = {
                    id: teamData[i].manager.id,
                    email: teamData[i].manager.email,
                    officenumber: teamData[i].manager.officeNumber
                } 
                return manager;
            }
            else if (teamData[i].includes('engineer')) {
                const header = {
                    name: teamData[i].engineer.name,
                    role: "Engineer"
                }
                const body = {
                    id: teamData[i].engineer.id,
                    email: teamData[i].engineer.email,
                    github: teamData[i].engineer.github
                } 
                return engineer;
            }
            else if (teamData[i].includes('intern')){
                const header = {
                    name: teamData[i].intern.name,
                    role: "Intern"
                }
                const body = {
                    id: teamData[i].intern.id,
                    email: teamData[i].intern.email,
                    school: teamData[i].intern.school
                } 
                return intern;
            }     
        }
    };
 `;
}   
module.exports = teamData => {
    const { manager, engineer, intern } = teamData;
    // where teamData is meant to be an array of subarrays for each employee    
    return `   
       
    <!DOCTYPE html>

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
        ${generateManager(manager)}
        ${generateEngineer(engineer)}
        ${generateIntern(intern)}
          
    </main>

    </body>
    <script src="../src/script.js"></script>
    </html>
    
    `;
}

     
      
