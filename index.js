const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const writeHTML = require("./src/page-template");
const fs = require("fs");

//declare blank team array
const team = []; 

//ask questions to generate employees
const getInfo = function () {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is this employees role?",
        choices: ["Manager", "Engineer", "Intern"],
        validate: (role) => {
          if (role) {
            return true;
          } else if (!role) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "user",
        message: "What is this employees name?",
        validate: (user) => {
          if (user) {
            return true;
          } else if (!user) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "What is this employees ID number?",
        validate: (id) => {
          if (id) {
            return true;
          } else if (!id) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "What is this employees email?",
        validate: (email) => {
          if (email) {
            return true;
          } else if (!email) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "officeNum",
        message: "What is this employees office number?", 
        when: (data) => data.role === "Manager",   //manager specific
        validate: (officeNum) => {
          if (officeNum) {
            return true;
          } else if (!officeNum) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "github",
        message: "Please enter this employees github name", 
        when: (data) => data.role === "Engineer",   //engineer specific
        validate: (github) => {
          if (github) {
            return true;
          } else if (!github) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "school",
        message: "Please enter this employees school name", 
        when: (data) => data.role === "Intern",   //intern specific
        validate: (school) => {
          if (school) {
            return true;
          } else if (!school) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
      {  
        type: "confirm",
        name: "add",
        message: "Add another team member?",
        default: false,
      },
    ])
    .then((response) => {     //deconstruct response => if role = ...push this employee to the team array
 
        console.log(response.user);
        let { user, id, email, officeNum, github, school, add } = response;
        let newEmployee;
        if(response.role === 'Manager'){
             newEmployee = new Manager(user, id, email, officeNum);
            console.log(newEmployee);
        } else if(response.role === 'Engineer'){
              newEmployee = new Engineer(user, id, email, github);
         } else if(response.role === 'Intern'){
             newEmployee = new Intern(user, id, email, school);
         }
         team.push(newEmployee);
        console.log(team);

        if(add){  //if add member => re-run getInfo() with current team passed in 
            return getInfo(team);
        } else if (!add){
            return team;
        }
    });
};


//function to write the pageHTML to index.html
const printPage = function (pageHTML) {
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Its working its working!!");
    }
  });
};

//call getInfo => send team array to html format file => print formatted html to index.html

getInfo()
  .then(team => {
    return writeHTML(team);
  })
  .then((pageHTML) => {
    printPage(pageHTML);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }3
  });
