
function generateTeamTemplate(teamData) {
    // where teamData is meant to be an array of subarrays for each employee
    console.log(teamData);
    let manager = teamData[0];
    let engineer = teamData[1];
    let intern = teamData[2];
 
    return `
       
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content="width=device-width, initial-scale-1.0">
    <meta http-equiv="X-UA Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> 
    <link rel="stylesheet" href="./src/style.css">
    <title>Team-Profile-Generator</title>
</head>
 
<body>
<header>
    <h1 class="title">My Team</h1>
</header>

<main class="team-board">
    <div class='card manager'>
        <div class='card-header manager'>
            <h2 class="ee-name">${manager.name}</h2><br>
            <i class="fa-solid fa-business-time"></i>
            <h4 class="ee-role">Manager</h4>
        </div>
        <div class='card-body manager'>
            <div class='id'>id: ${manager.id}</div>
            <div class='email'>email: ${manager.email}</div>
            <div class='office-number'>office no: ${manager.officeNumber}</div>
        </div>
    </div>
    <div class='card engineer'>
        <div class='card-header engineer'>
            <h2 class="ee-name">${engineer.name}</h2><br>
            <i class="fa-solid fa-gears"></i></i>
            <h4 class="ee-role">Engineer</h4>
        </div>
        <div class='card-body engineer'>
            <div class='id'>id: ${engineer.id}</div>
            <div class='email'>email: ${engineer.email}</div>
            <div class='office-number'>GitHub Username: ${engineer.github}</div>
        </div>
    </div>
    <div class='intern-card'>
        <div class='card-header intern'>
            <h2 class="ee-name">${intern.name}</h2><br>
            <i class="fa-solid fa-laptop-code"></i>
            <h4 class="ee-role">Intern</h4>
        </div>
        <div class='card-body intern'>
            <div class='id'>id: ${intern.id}</div>
            <div class='email'>email: ${intern.email}</div>
            <div class='office-number'>school: ${intern.school}</div>
        </div>
     </div>
     
    </main>

</body>
<script src="./assets/js/script.js"></script>
</html>
 
 `;

}
module.exports = generateTeamTemplate;     
      
