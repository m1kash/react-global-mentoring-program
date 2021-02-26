const hello = require('./hello');

test('is Hello world', () => {
    expect(hello()).toBe('Hello world!');
});
