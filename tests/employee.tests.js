const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com')
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com')
    expect(employee.getId()).toEqual(expect.any(Number));
});

