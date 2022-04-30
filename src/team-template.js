


module.exports = teamData => {
    // destructure page data by section
     // this will create three variables based on data in templateData
    const {name, id, email, role} = teamData;


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
    <link rel="stylesheet" href="./style.css>
    <title>Team-Profile-Generator</title>
</head>
 
<body>

<header>
    <h1 class="title">My Team</h1>
</header>
<main class="team-board">
// add containers for team members here

        
    ${()}
    ${()}
    
</main>

</body>

</html>
 
 `;
};