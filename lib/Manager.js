const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email) {
    super(name);

    this.officeNumber = officeNumber;
    // this.potion = new Potion();
  }

  getRole() {
    return `${this.name} is the manager`;
  }
}

module.exports = Manager;
