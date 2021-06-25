const { TestWatcher } = require('jest');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { inspect } = require('util');
const Engineer = require('../lib/engineer');

test('creates and Engineer object', () => {
    const engineer = new Engineer('Emma', 82, 'emma@emma.com', 'emmattner')

    inspect(engineer.github) .toEqual(expect.any(String));
});
