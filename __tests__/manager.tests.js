// const { TestWatcher } = require('jest');
const Manager = require('../lib/manager.js');

test('creates a Manager object', () => {
    const manager = new Manager('Emma', '82', 'emma@emma.com', '2');

    expect(manager.name).toBe('Emma');
    expect(manager.id).toBe('82');
    expect(manager.email).toBe('emma@emma.com');
    expect(manager.officeNumber).toBe('2');
    // expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("returns manager office number", () => {
    const manager = new Manager('Emma', '82', 'emma@emma.com', '2');
    expect(manager.getofficeNumber()).toEqual(expect.stringContaining('2'));
});


test('gets role of employee', () => {
    const manager = new Manager('Emma', '82', 'emma@emma.com', '2');

    expect(manager.getRole()).toEqual("Manager");
});

