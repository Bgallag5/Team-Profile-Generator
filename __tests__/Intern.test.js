const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('test new Intern', () => {
  const intern = new Intern('Sarah');

  expect(intern.user).toBe('Sarah');
})