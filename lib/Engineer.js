const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(role, name, id, email, github) {
    super(role, name, id, email);
    this.github = github;
  }
};

  Engineer.prototype.getRole = function() {
    return this.role = "Engineer";
  };

  Engineer.prototype.getGithub = function() {
    return `${this.github}`;
  };


module.exports = Engineer;
