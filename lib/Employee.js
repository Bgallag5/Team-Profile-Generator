class Employee {
    constructor(user, id, email){
        this.user = user;
        this.id = id;
        this.email = email;
    }

    getName(){
    return this.user;
    }

    getId(){
return this.id;
    }

    getEmail(){
return this.email;
    }

    getRole(){  //returns entire employee 

    }
}


module.exports = Employee;