const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name);

    this.id = id;
    this.email = email;
    this.github = github;
    // this.potion = new Potion();
  }

  getGithub() {
    return `${this.name}'s GitHub name is ${this.github}`;
  }

  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;
