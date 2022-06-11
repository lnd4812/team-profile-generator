const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('name', 'id', 'email', 'role');
    // const role = new Role('role');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.role).toBe('role');    
});


