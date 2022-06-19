
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

 // <div class="card manager">  
                    //     ${buildManagerCard(managerArray)}
                    // </div>
                    // <div class="card engineer">     
                    //     ${buildEngineerCard(engineerArray)}
                    // </div>  
                    // <div class="card intern">      
                    //     ${buildInternCard(internArray)}
                    // </div> 
 // teamData has to get passed into this file and createCard function initiated - how do you apply template literals to this file?

function createCard(teamData) {
    for (var i = 0; i < teamData.length; i++) {
        if (teamData[i].value === 'Manager') {
            // create manager profile card at index 0 in teamData array
            nameEl = Manager.name;
            roleEl.innerHTML = '<h4 class="ee-role>Manager<h4>';
            idEl.innerHTML = 'id: ' + Manager.id;
            emailEl.innerHTML = 'email: ' + Manager.email;
            lastEl.innerHTML = 'office number: ' + Manager.officeNumber;
            cardHeaderEl.appendChild(nameEl);
            cardHeaderEl.appendChild(roleEl);
            managerCardEl.appendChild(cardHeaderEl);
            cardBodyEl.appendChild(idEl);
            cardBodyEl.appendChild(emailEl);
            cardBodyEl.appendChild(lastEl);
            cardEl.appendChild(cardHeaderEl);
            cardEl.appendChild(cardBodyEl);
        }
        else if (teamData[i].value === 'Engineer') {
            // create engineer profile card for each engineer added
            nameEl = Engineer.name;
            roleEl.innerHTML = '<h4 class="ee-role>Engineer<h4>';
            idEl.innerHTML = 'id: ' + Engineer.id;
            emailEl.innerHTML = 'email: ' + Engineer.email;
            lastEl.innerHTML = 'GitHub Username: ' + Engineer.github;
            cardHeaderEl.appendChild(nameEl);
            cardHeaderEl.appendChild(roleEl);
            engineerCardEl.appendChild(cardHeaderEl);
            cardBodyEl.appendChild(idEl);
            cardBodyEl.appendChild(emailEl);
            cardBodyEl.appendChild(lastEl);
            cardEl.appendChild(cardHeaderEl);
            cardEl.appendChild(cardBodyEl);
        }
        else if (teamData[i].value === "Intern") {
            // create intern profile card for each intern added
            nameEl = Intern.name;
            roleEl.innerHTML = '<h4 class="ee-role>Intern<h4>';
            idEl.innerHTML = 'id: ' + Intern.id;
            emailEl.innerHTML = 'email: ' + Intern.email;
            lastEl.innerHTML = 'School: ' + Intern.school;
            cardHeaderEl.appendChild(nameEl);
            cardHeaderEl.appendChild(roleEl);
            internCardEl.appendChild(cardHeaderEl);
            cardBodyEl.appendChild(idEl);
            cardBodyEl.appendChild(emailEl);
            cardBodyEl.appendChild(lastEl);
            cardEl.appendChild(cardHeaderEl);
            cardEl.appendChild(cardBodyEl); 
        }
    }
           teamBoardEl.appendChild(cardEl);
};   

// module.exports = generateTeamTemplate;
// module.exports = createCard;  

const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class teamBuilder {
    constructor() {
        this.employees = [];
        this.manager = []; 
        this.engineer = [];
        this.intern = [];
    }      

    initializeEmployee() {
        this.employees.push(new Employee('role','name','id', 'email', 'officeNumber'));
        this.employees.push(new Employee('role','name','id', 'email', 'github'));
        this.employees.push(new Employee('role','name','id', 'email', 'school'));
    }    
    
     // // Manager is first employee added to array, so create manager team card 
    // buildManagerCard(managerArray) {
    //     return`
    //         <div class="card manager">                        
    //             <div class='card-header manager'> 
    //             ${managerArray
    //                 .filter(({ employees }) => employees)
    //                 .map(({ name, id, email, officeNumber}) => {
    //                     return`<h2 class="ee-name">${name}</h2><br>                            
    //                 <h4 class="ee-role">Manager</h4>                        
    //             </div>
    //             <div class="card-body manager">                           
    //                 <div class='id'>${id}</div>                            
    //                 <div class='email'>${email}</div>                            
    //                 <div class='office-number'>${officeNumber}</div>                        
    //             </div>
    //                     `;
    //                 })
    //             })          
    //         </div>
    //     };
    //  `;                        
    // };

    // buildEngineerCard(engineerArray) {
    //     return`
    //         <div class="card engineer">                        
    //             <div class='card-header engineer'>
    //             ${engineerArray
    //                 .filter(({ employees }) => employees)
    //                 .map(({ name, id, email, github}) => {                                              
    //                 return `<h2 class="ee-name">${name}</h2><br>                            
    //                 <h4 class="ee-role">Engineer</h4>                        
    //             </div>
    //             <div class="card-body engineer">                           
    //                 <div class='id'>${id}</div>                            
    //                 <div class='email'>${email}</div>                            
    //                 <div class='github'>${github}</div>                        
    //             </div>
    //                     `;
    //                 })
    //             })          
    //         </div>
    //         };    
    //     `;
    // };
    
    // buildInternCard(internArray) {
    //    return ` 
    //     <div class="card intern">                        
    //         <div class='card-header intern'>                                           
    //         ${internArray
    //             .filter(({ employees }) => employees)
    //             .map(({ name, id, email, school}) => {                                              
    //             return `<h2 class="ee-name">${name}</h2><br>                            
    //             <h4 class="ee-role">Engineer</h4>                                          
    //             <h4 class="ee-role">Intern</h4>                        
    //         </div>
    //         <div class="card-body intern">                           
    //             <div class='id'>${id}</div>                            
    //             <div class='email'>${email}</div>                            
    //             <div class='school'>${school}</div>                        
    //         </div>
    //                 `;
    //             })
    //         })
    //     </div>  
    //     };    
    //     `;
    // };

    renderTeamPage(teamData) {
        console.log(teamData);
        // const { managerArray, engineerArray, internArray } = teamData;
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
                <main class="container my-5 team-board"> 
                <div class="card manager">  
                ${(buildManagerCard(manager))};
            </div>
            <div class="card engineer">     
                ${(buildEngineerCard(engineer))};
            </div>  
            <div class="card intern">      
                ${(buildInternCard(intern))};     
            </div> 
                </main>
            </body>
        </html>        
    `;               
    } 
} 

module.exports = teamBuilder;

{/* <div class="card intern">
                        <div class='card-header intern'>                                           
                            <h2 class="ee-name">${teamData[2].name}</h2>                              
                            <h3 class="ee-role">Intern</h3>                        
                        </div>
                        <div class="card-body intern">                           
                            <div class='id'>ID: ${teamData[2].id}</div>                            
                            <div class='email'>Email: ${teamData[2].email}</div>                            
                            <div class='school'>School: ${teamData[2].school}</div>      
                        </div>  
                    </div> */}