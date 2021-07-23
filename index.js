const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const writeHTML = require("./src/page-template");
const fs = require("fs");

//declare blank team array 
const team = [];

//ask questions to generate employees
const getInfo = function () {
    return inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is this employees role?",
        choices: ["Manager", "Engineer", "Intern"],
        validate: (role) =>{
            if (role){
                return true;
            } else if (!role){
                console.log("Please enter required information");
                return false; 
            }
        }
      },
      {
        type: "text",
        name: "user",
        message: "What is this employees name?",
        validate: (user) =>{
            if (user){
                return true;
            } else if (!user){
                console.log("Please enter required information");
                return false; 
            }
        }
      },
      {
        type: "text",
        name: "id",
        message: "What is this employees ID number?",
        validate: (id) =>{
            if (id){
                return true;
            } else if (!id){
                console.log("Please enter required information");
                return false; 
            }
        }
      },
      {
        type: "text",
        name: "email",
        message: "What is this employees email?",
        validate: (email) =>{
            if (email){
                return true;
            } else if (!email){
                console.log("Please enter required information");
                return false; 
            }
        }
      },
      {
        type: "text",
        name: "officeNum",
        message: "What is this employees office number?",
        validate: (officeNum) =>{
            if (officeNum){
                return true;
            } else if (!officeNum){
                console.log("Please enter required information");
                return false; 
            }
        }
      },
    ])
    .then(( response ) => {
      const {user, id, email, officeNum } = response;
      //if role =....
      const employee = new Manager(user, id, email, officeNum)
      console.log(employee);
      //push this employee to the team array 
      team.push(employee);
      console.log(team);
      return team;
    });
};



//function to write the pageHTML to index.html
const printPage = function (pageHTML) {
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) {
      console.log(err);
    } else {
        console.log('Its working its working!!');
    }
  });
};


//init application => call getInfo => send team array to html format file => print formatted html to index.html

  getInfo()
  .then(team => {
      return writeHTML(team)
  })
  .then(pageHTML => {
      printPage(pageHTML);
  })
  .catch(err =>{
      if (err){
          console.log(err);
      }
  })

