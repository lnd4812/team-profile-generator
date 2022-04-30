class Role {
    constructor(name) {
        this.roles = ['manager', 'engineer', 'intern'];
        this.name = name;

        if (this.name === 'manager') {
            // create something

        } else if (this.name === 'engineer') {
            // create something 2

        } else if (this.name === 'intern') {
            // create something 3
        }
    }
}


  // returns an object with employee properties - use this to create cards?
  this.getRole = function() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role: this.roles // array officeNumber / gitHub / school
    };
  };


module.exports = Role;