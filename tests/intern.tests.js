const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Nicole', 82, 'emma.emma@gmail', 'PPS');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Nicole', 82, 'emma.emma@gmail', 'PPS');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

