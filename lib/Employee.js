class Employee {
    constructor(role, name, id, email) {
      this.role = role;
      this.name = name;
      this.id = id;
      this.email = email;
    }}
       
    Employee.prototype.getRole = function() {
        return this.role = 'Employee';
    } 

    Employee.prototype.getName = function() {
        return this.name;
    }
  
    Employee.prototype.getId = function() {
        return this.id;
    }
  
    Employee.prototype.getEmail = function() {
        return this.email;
    }


  
module.exports = Employee;
  