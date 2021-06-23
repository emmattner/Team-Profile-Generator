const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Emma', 90, 'emma@emma.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});