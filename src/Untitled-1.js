const Manager = require('./lib/Manager');

function generateTeamTemplate(teamData) {
    // where teamData is meant to be an array of subarrays for each employee
    console.log(teamData);
 
    return `
   
    //     let teamBoardEl = document.querySelector('.team-board');
        
    //     // create card for each employee
    //     let cardEl = document.querySelector('.card');
    //     let cardHeaderEl = document.querySelector('.card-header);
    //     let cardBodyEl = document.querySelector('.card-body);
              
    //     const header = {
    //         name: ${teamData.name},
    //         role: 
    //     };

    //     const body = {
    //         id = ${teamData.id},
    //         email = ${teamData.email},
    //         officeNumber = ${teamData.officeNumber};
    //     }
        
    //     let nameEl = document.createElement('h2');
    //     let roleEl = document.createElement('h4');
    //     cardHeaderEl.appendChild(nameEl);
    //     cardHeaderEl.appendChild(roleEl);
    //     cardEl.appendChild(cardHeaderEl);
    // };
    
        
       
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content="width=device-width, initial-scale-1.0">
    <meta http-equiv="X-UA Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> 
    <link rel="stylesheet" href="./style.css>
    <title>Team-Profile-Generator</title>
</head>
 
<body>
<header>
    <h1 class="title">My Team</h1>
</header>

<main class="team-board">
// add containers for team members here
    <div class='card manager'>
        <div class='card-header manager'>
            <h2 class="ee-name">${teamData.name}</h2><br>
            <i class="fa-solid fa-business-time"></i>
            <h4 class="ee-role">Manager</h4>
        </div>
        <div class='card-body manager'>
            <div class='id'>id: ${teamData.id}</div>
            <div class='email'>email: ${teamData.email}</div>
            <div class='office-number'>office no: ${teamData.officeNumber}</div>
        </div>
    </div>

    // <div class='card engineer'>
    //     <div class='card-header engineer'>
    //         <h2 class="ee-name"></h2><br>
    //         <i class="fa-solid fa-gears"></i>
    //         <h4 class="ee-role"></h4>
    //     </div>
    //     <div class='card-body engineer'>
    //     </div>
    // </div>
    // <div class='intern-card'>
    //     <div class='card-header intern'>
    //         <h2 class="ee-name"></h2><br>
    //         <i class="fa-solid fa-laptop-code"></i>
    //         <h4 class="ee-role"></h4>
    //     </div>
    //     <div class='card-body intern'>
    //     </div>
    // </div>
     
</main>

</body>
<script src="./assets/js/script.js"></script>
</html>
 
 `;

}
module.exports = generateTeamTemplate;     
      
<div class='card manager'>
        <div class='card-header manager'>
            <h2 class="ee-name"></h2><br>
            <h4 class="ee-role"></h4>
        </div>
        <div class='card-body manager'>
            <div class='id'></div>
            <div class='email'></div>
            <div class='last office-number'></div>
        </div>
    </div>
    <div class='card engineer'>
        <div class='card-header engineer'>
            <h2 class="ee-name"></h2><br>
            <h4 class="ee-role"></h4>
        </div>
        <div class='card-body engineer'>
            <div class='id'></div>
            <div class='email'></div>
            <div class='last github'></div>
        </div>
    </div>
    <div class='intern-card'>
        <div class='card-header intern'>
            <h2 class="ee-name"></h2><br>
            <h4 class="ee-role"></h4>
        </div>
        <div class='card-body intern'>
            <div class='id'></div>
            <div class='email'></div>
            <div class='last school'></div>
        </div>