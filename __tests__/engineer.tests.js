const employee = require('../lib/employee');
const Engineer = require('../lib/engineer');


test('creates an Engineer object', () => {
    const engineer = new Engineer('Emma', '82', 'emma@emma.com', 'emmattner');

    expect(engineer.name).toBe('Emma');
    expect(engineer.id).toBe('82');
    expect(engineer.email).toBe('emma@emma.com');
    expect(engineer.github).toBe('emmattner');
    // expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github username', () => {
    const engineer = new Engineer('Emma', '82', 'emma@emma.com', 'emmattner');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('emmattner'));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Emma', '82', 'emma@emma.com', 'emmattner');

    expect(engineer.getRole()).toEqual("engineer");
});