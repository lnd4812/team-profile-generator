const Employee = require('../lib/Employee');

test('creates a manager object', () => {
    const employee = new Employee('name', 'id', 'email');
    
    expect(employee.getName()).toBe('name');
    expect(employee.getId()).toBe('id');
    expect(employee.getEmail()).toBe('email');
       
});
              
test("gets employee's role", () => {
    const employee = new Employee('name', 'id', 'email'); 
    expect(employee.getRole()).toBe('Employee');  
         
});  