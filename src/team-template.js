


module.exports = templateData => {
    // destructure page data by section
     // this will create three variables based on data in templateData
    const {projects, about, ...header} = templateData;


    return `
    
    //console.log(templateData);

    const header = {
        name: templateData.name,
        github: templateData.github
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
 // add containers for team members here

<body>

<header>
    <h1 class="title">My Team</h1>
</header>
<main class="team-board">
        
    ${generateAbout(about)}
    ${generateProjects(projects)}
    
</main>

</body>

</html>
 
 `;
};