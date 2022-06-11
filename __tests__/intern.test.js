const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('name', 'id', 'email');
   
    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
        expect.arrayContaining([intern]); 
});

test("gets intern's school name", () => {
    expect(intern.getSchool()).toBe('school'); 
});
                
test("gets intern's role", () => {
     expect(intern.getRole()).toBe('Intern');  
         
});  
