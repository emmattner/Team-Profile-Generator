const { expect } = require('@jest/globals');
const Employee = require('../lib/employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Emma', '82', 'emma@emma.com', 'Employee');

    expect(employee.name).toBe('Emma');
    expect(employee.id).toBe('82');
    expect(employee.email).toBe('emma@emma.com');
    expect(employee.role).toBe('Employee');
});

test('gets employee name', () => {
    const employee = new Employee('Emma', '82', 'emma@emma.com', 'Employee');
    
    expect(employee.getName()).toEqual(expect.stringContaining('Emma'));
});

test('gets employee ID', () => {
    const employee = new Employee('Emma', '82', 'emma@emma.com', 'Employee');
    
    expect(employee.getID()).toEqual(expect.stringContaining('82'));
});

test('gets employee email', () => {
    const employee = new Employee('Emma', '82', 'emma@emma.com', 'Employee');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining('emma@emma.com'));
});
