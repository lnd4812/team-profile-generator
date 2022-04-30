module.exports = function() {
    this.name = 'Dave';
    this.id = '12345';
    this.email = 'abc123@gmail.com';
    this.role = 'manager';
}


// class Role {
// // use this to create the difference cards for each role?  role will be passed in from inquirer prompt

//     constructor(role) {
//         this.roles = ['manager', 'engineer', 'intern'];
//         this.role = roles;

//         if (this.role === 'manager') {
//             // create HTML card fo Manager
//             // header this.name = name + this.role
//             // body id / email / office number 

//         } else if (this.role === 'engineer') {
//             // create HTML card for Engineer
//             // header this.name = name + this.role
//             // body id / email / Github address

//         } else if (this.roles === 'intern') {
//             // create HTML card for Intern
//             // header this.name = name + this.role 
//             // body id / email / school
//         }
//     }
// }


//   // or use this function to return an object with employee properties - use this to create cards?
//   this.getRole = function() {
//     return {
//       name: this.name,
//       id: this.id,
//       email: this.email,
//       role: this.roles // array officeNumber / gitHub / school
//     };
//   };


// module.exports = Role;