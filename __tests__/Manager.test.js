
const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test ("create new manager", () => {
const manager = new Manager("Ben")

expect(manager.user).toBe('Ben')
expect(manager.id).toEqual(expect.any(String));
expect(manager.email).toEqual(expect.any(String));
expect(manager.officeNum).toEqual(expect.any(String))

});

test ("check manager info", () => {
    const manager = new Manager('Ben')

    expect(manager.getRole()).toBe('Manager');

})
