
const Employee = require('../lib/Employee')


class Intern extends Employee{
    constructor(user = '', id = '', email = '', school = ''){
        super(user, id, email)
        this.school = school; 
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}


module.exports = Intern;