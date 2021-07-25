const { test, expect } = require('@jest/globals')
const Employee = require ('../lib/Employee')

test('create new Employee', () => {
    const employee = new Employee ('Sally Samie Joe')

    expect(employee.user).toBe('Sally Samie Joe')
    expect(employee.user).toEqual(expect.any(String))
})