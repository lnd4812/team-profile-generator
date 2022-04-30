class Role {
// use this to create the difference cards for each role?  role will be passed in from inquirer prompt

    constructor(role) {
        this.roles = ['manager', 'engineer', 'intern'];
        this.role = roles;

        if (this.role === 'manager') {
            // create HTML card for Manager
            //header 
            employee.getName();
            employee.getRole();
            // body 
            employee.getId();
            employee.getEmail();
            employee.getOfficeNumber();

        } else if (this.role === 'engineer') {
            // create HTML card for Engineer
            //header 
            employee.getName();
            employee.getRole();
            // body 
            employee.getId();
            employee.getEmail();
            employee.getGithub();


        } else if (this.roles === 'intern') {
            // create HTML card for Intern
            //header 
            employee.getName();
            employee.getRole();
            // body 
            employee.getId();
            employee.getEmail();
            employee.getSchool();

        }
    }
}


  // // or use this function to return an object with employee properties - use this to create cards?
  // this.getRole = function() {
  //   return {
  //     name: this.name,
  //     id: this.id,
  //     email: this.email,
  //     role: this.roles // array officeNumber / gitHub / school
  //   };
  // };


module.exports = Role;