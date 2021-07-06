const employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

test('creates and Engineer object', () => {
    const engineer = new Engineer('Emma', 82, 'emma@emma.com', 'emmattner')

    expect(engineer.github) .toEqual(expect.any(String));
});

test ('gets engineer github value', () => {
    const engineer = new Engineer('Emma', 82, 'emma@emma.com', 'emmattner')

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Emma', 82, 'emma@emma.com', 'emmattner')

    expect(engineer.getRole()).toEqual("engineer")
})