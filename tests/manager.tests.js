const { TestWatcher } = require('jest');
const Manager = require('../lib/manager');

test('creates a Manager object', () => {
    const manager = new Manager('Emma', 82, 'emma.emma@gmail', '2') 

    expect(manager.officeNumber).toEqual(expect.any(Number));
}); 
