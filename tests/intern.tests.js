const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Emma', 82, 'emma.emma@gmail', 'PPS');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Emma', 82, 'emma.emma@gmail', 'PPS');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Emma', 82, 'emma.emma@gmail.com', 'PPS');

    expect(intern.getRole()).toEqual("Intern");
}); 