
const Employee = require('../lib/Employee')


class Intern extends Employee{
    constructor(user = '', id = '', email = '',){
        super(user, id, email)
        this.school = school; 
    }

    getSchool(){
        return this.school;
    }
}


module.exports = Intern;