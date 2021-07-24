
const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test('create new engineer', () => {

    const engineer = new Engineer('Pauly') 
    expect(engineer.user).toMatch('Pauly')
})

