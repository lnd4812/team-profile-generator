const Employee = require('./Employee');

class Intern extends Employee {
  constructor(role, name, id, email, school) {
    super(role, name, id, email);
    this.school = school;
  }
  };
  
  Intern.prototype.getRole = function() {
      return this.role = "Intern";
  }

  Intern.prototype.getSchool = function() {
    return this.school;
  }

module.exports = Intern;
