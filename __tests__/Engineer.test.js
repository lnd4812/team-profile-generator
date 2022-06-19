const Engineer = require('../lib/Engineer');
  
test('creates an engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');
   
    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.getGithub()).toBe('github');
});


test("get's engineer's role", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');
    
    expect(engineer.getRole()).toBe('Engineer');
});
