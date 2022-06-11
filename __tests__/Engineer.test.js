const Engineer = require('../lib/Engineer');
  
test('creates an engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email');
   
    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
        expect.arrayContaining([engineer]); 
});

test("get's engineer's github name", () => {
    expect(engineer.github).toBe('github');    
});

test("get's engineer's role", () => {
    expect(engineer.role).toBe('Engineer');
});
