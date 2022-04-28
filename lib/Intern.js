const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email) {
    super(name);

    this.school = school;
    // this.potion = new Potion();
  }

  getSchool() {
    return `${this.name}'s school is ${this.school}`;
  }

  getRole() {
    return `${this.name} is an Intern`;
  }
}

module.exports = Intern;
