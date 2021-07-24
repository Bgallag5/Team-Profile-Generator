const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(user = '', id = '', email = ''){
        super(user, id, email);
        this.github = github;
    }

    getHub(){
return this.github;
    }

    getRole(){
        return `Engineer`;
    }

}




module.exports = Engineer;