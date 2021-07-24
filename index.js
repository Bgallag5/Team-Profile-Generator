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
        message: "What is this employees office number?", //manager specific
        when: (data) => data.role === "Manager",
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
        message: "Please enter this employees github name", //engineer specific
        when: (data) => data.role === "Engineer",
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
        message: "Please enter this employees school name", //intern specific
        when: (data) => data.role === "Intern",
        validate: (school) => {
          if (school) {
            return true;
          } else if (!school) {
            console.log("Please enter required information");
            return false;
          }
        },
      },
    ])
    .then((response) => {     //if role = ...push this employee to the team array
 
        console.log(response.user);
        // const { user, id, email, officeNum, github, school } = response;
        if(response.role === 'Manager'){
            const { user, id, email, officeNum } = response;
            const manager = new Manager(user, id, email, officeNum);
            console.log(manager);
            team.push(manager);
            return team;
        } else if(response.role === 'Engineer'){
            const {user, id, email, github} = response;
            const engineer = new Engineer(user, id, email, github);
            team.push(engineer)
         } else if(response.role === 'Intern'){
            const {user, id, email, school} = response;
            const intern = new Intern(user, id, email, school);
            team.push(intern)
         }

      console.log(team);
    });
};

// const addAnother = function () {
//   inquirer.prompt({
//     type: "confirm",
//     name: "add",
//     message: "Add another team member?",
//     validate: (add) => {
//       if (add) {
//         return (getInfo());
//       } 
//     },
//   });
// };

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

//init application => call getInfo => send team array to html format file => print formatted html to index.html

getInfo()
// .then({
//     addAnother
// })
  .then(team => {
    return writeHTML(team);
  })
  .then((pageHTML) => {
    printPage(pageHTML);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  });
