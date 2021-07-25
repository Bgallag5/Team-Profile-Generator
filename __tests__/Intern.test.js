const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('test new Intern', () => {
  const intern = new Intern('Sarah');
  expect(intern.user).toBe('Sarah');
  expect(intern).toBeInstanceOf(Intern)
})

test("check intern functions", () => {
    const intern = new Intern("Ben");
  
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getEmail()).toBeDefined();
    expect(intern.getId()).toBeDefined();
    expect(intern.getName()).toBeDefined();
    expect(intern.getSchool()).toBeDefined();
  });