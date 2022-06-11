const Employee = require('../lib/Employee');

test('creates an employee object with name, id and email properties', () => {
    const employee = new Employee('name', 'id', 'email');
   
    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
        expect.arrayContaining([employee]);
});

test("gets employee's name", () => {
    expect(employee.getName()).toBe('name')
});

test("gets employee's id", () => {
    expect(employee.getId()).toBe('id')
});

test("gets employee's email address", () => {
    expect(employee.getEmail()).toBe('email');
});
       
test("gets employee's role", () => {
    expect(employee.getRole()).toBe('Employee');  
        
});  
