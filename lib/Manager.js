const Employee = require("./Employee");

class Manager extends Employee{
    constructor(user = '', id = '', email = '', officeNum = ''){
        super(user, id, email);
        this.officeNum = officeNum;
    }

    getRole(){
        return "Manager";
    }

}




module.exports = Manager;