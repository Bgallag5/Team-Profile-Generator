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
  inquirer
    .prompt(
      {
        type: "list",
        name: "role",
        message: "What is this employees role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "text",
        name: "user",
        message: "What is this employees name?",
      }
    )
    .then(({ employee }) => {
      const { role, user } = employee;
      console.log(manager);
      //push this employee to the team array 
      team.push(manager);
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
function init() {
  getInfo()
  .then(team => {
      return writeHTML(team)
  })
  .then(pageHTML => {
      printPage(pageHTML);
  })
}
init();
