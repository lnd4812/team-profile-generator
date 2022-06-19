const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');
    
    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.getOfficeNumber()).toBe('officeNumber');
      
});
              
test("gets manager's role", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber'); 
    expect(manager.getRole()).toBe('Manager');  
         
});  