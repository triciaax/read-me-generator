var inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
  return inquirer.prompt(
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your README. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
 {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions for your README. (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter installation instructions!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter how to use your application. (Required)",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please enter usage information!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "license",
        message: "Please enter any license information.",
        validate: (licenseInput) => {
          if (licenseInput) {
            return true;
          } 
        },
      },
      {
        type: "input",
        name: "contributors",
        message: "Please enter any contributors.",
        validate: (contributorsInput) => {
          if (contributorsInput) {
            return true;
          } 
        },
      },
      {
        type: "input",
        name: "test",
        message: "Please enter any test.",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } 
        },
      },
      //question here//
)}
