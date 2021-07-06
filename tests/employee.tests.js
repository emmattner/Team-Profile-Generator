const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com')
    expect(employee.getName()).toEqual(expect.stringContaining('Emma'));
});

test('gets employee ID', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com')
    expect(employee.getId()).toEqual(expect.stringContaining(82));
});

test('gets employee email', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com')
    
    expect(employee.getEmail()).toEqual(expect.stringContaining('emma@emma.com'));
});

test('gets role of employee', () => {
    const employee = new Employee('Emma', 82, 'emma@emma.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
}); 

