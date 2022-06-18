
// function generateTeamTemplate(team) {
// for (var i=0; i< team.length; ++i) {
 
//   console.log(team[i]);

// for (var i = 0; i < team.length; i++) {
//    console.log(team[i]);
//  };
// }  
         
      
    //   if (team[i] === "Manager") {
    //     this.teamMember = {
    //       role: this.team[i].splice(1),
    //       name: this.team[i].splice(2),
    //       id: this.team[i].id,
    //       email: this.team[i].email,
    //       officeNumber: this.team[i].officeNumber,
    //     };
    //     console.log(teamMember);
    //     buildManagerCard();
    //   } else if (team[i].role === "Engineer") {
    //       this.teamMember = {
    //         role: this.team[i].role,
    //         name: this.team[i].name,
    //         id: this.team[i].id,
    //         email: this.team[i].email,
    //         github: this.team[i].github,
    //     };
    //     console.log(teamMember);
    //     buildEngineerCard();
    //  } else if (team[i].role === "intern") {
    //     this.teamMember = {
    //       role: this.team[i].role,
    //       name: this.team[i].name,
    //       id: this.team[i].id,
    //       email: this.team[i].email,
    //       school: this.team[i].school,
    //     };
    //     console.log(teamMember);
    //     buildInternCard();
    // }
    
  
//   // create employee id cards
// // //   if (team[i].getRole() === "Manager") {
// const buildManagerCard = manager => {    
//    return`
//       <div class="card manager">                        
//           <div class='card-header manager'> 
//               <h2 class="ee-name">${team[i].name}</h2><br>                            
//               <h4 class="ee-role">${team[i].role}</h4>                        
//           </div>
//           <div class="card-body manager">                           
//               <div class='id'>${team[i].id}</div>                            
//               <div class='email'>${team[i].email}</div>                            
//               <div class='office-number'>${team[i].officeNumber}</div>                        
//           </div>           
//       </div>                        
//     `;
// // // // } else if (team[i].getRole() === "Engineer") {
// };
// const buildEngineerCard = engineer => {
// return`
//         <div class="card engineer">                        
//           <div class='card-header engineer'>                                              
//               <h2 class="ee-name">${team[i].name}</h2><br>                            
//               <h4 class="ee-role">${team[i].role}</h4>                        
//           </div>
//           <div class="card-body engineer">                           
//               <div class='id'>${team[i].id}</div>                            
//               <div class='email'>${team[i].email}</div>                            
//               <div class='github'>${team[i].github}</div>                        
//           </div>           
//       </div>                       
//     `;
// };
// // } else if (team[i].getRole() === "Intern") {

// const buildInternCard = intern => {
//   return `
//        <div class="card intern">                        
//            <div class='card-header intern'>                                           
//              ${team[i]} = 
//              }  
//              <h2 class="ee-name">${team[i].name}</h2><br>                            
//                <h4 class="ee-role">${team[i].role}</h4>                        
//            </div>
//           <div class="card-body intern">                           
//               <div class='id'>${team[i].id}</div>                            
//               <div class='email'>${team[i].email}</div>                            
//               <div class='school'>${team[i].school}</div>                        
//           </div>        
//       </div>                                `;
// `;
// `
// module.exports = generateTeamTemplate;
// const { manager, engineer, intern } = team;
// return `
// <!DOCTYPE html
//    <html lang="en">
//        <head>
//            <meta charset="UTF-8">
//            <meta name = "viewport" content="width=device-width, initial-scale-1.0">        
//            <meta http-equiv="X-UA Compatible" content="ie=edge">        
//            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">        
//            <link rel="stylesheet" href="../src/style.css">       
//            <title>Team-Profile-Generator</title>  
//        </head>    
//        <body>       
//            <header>          
//                <h1 class="title">My Team</h1>       
//            </header>       

//           <main class="container my-5 team-board">
//             ${buildManager(manager)}
//             ${buildEngineer(engineer)}
//             ${buildIntern(intern)}
//           </main>
  
//     </body>
// </html>
// // `;
// }
// }
// module.exports = generateTeamTemplate