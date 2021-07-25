
const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test('create new engineer', () => {

    const engineer = new Engineer('Pauly') 
    expect(engineer.user).toMatch('Pauly')
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("check engineer functions", () => {
    const engineer = new Engineer("Ben");
  
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getEmail()).toBeDefined();
    expect(engineer.getId()).toBeDefined();
    expect(engineer.getName()).toBeDefined();
    expect(engineer.getHub()).toBeDefined();
  });