const Employee = require('./Employee');

class Manager extends Employee {
  constructor(role, name, id, email, officeNumber) {
    super(role, name, id, email);
    this.officeNumber = officeNumber;
    
  }
};
  Manager.prototype.getRole() = function()  {
   return this.role = "Manager";
  };
  
module.exports = Manager;
