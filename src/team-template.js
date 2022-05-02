
function generateTeamTemplate(teamData) {
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
     </div>
     
    </main>

</body>
<script src="../src/script.js"></script>
</html>
 
 `;

}
module.exports = generateTeamTemplate;     
      
