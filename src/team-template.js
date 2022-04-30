




    return `
    
    //console.log(teamData);

    const header = {
        name: teamData.name,
        role: teamData.role
    };
   
    

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
    <div class='manager-card'>
        <div class='card-header manager'>
            <h2>${teamData.name}</h2><br>
            <i class="fa-solid fa-business-time"></i>
            <h4>${teamData.role}</h4>
        </div>
        <div class='card-body manager'>
        </div>
    </div>

    <div class='engineer-card'>
        <div class='card-header engineerr'>
            <h2>${teamData.name}</h2><br>
            <i class="fa-solid fa-gears"></i>
            <h4>${teamData.role}</h4>
        </div>
        <div class='card-body engineer'>
        </div>
    </div>
    <div class='intern-card'>
        <div class='card-header intern'>
            <h2>${teamData.name}</h2><br>
            <i class="fa-solid fa-laptop-code"></i>
            <h4>${teamData.role}</h4>
        </div>
        <div class='card-body intern'>
        </div>
    </div>
      
    
</main>

</body>
<script src="./assets/js/script.js"></script>
</html>
 
 `;
};

module.exports = generatingTeamTemplate;     
      
