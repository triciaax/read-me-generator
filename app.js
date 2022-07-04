var inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./src/readme-template");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "(Required) Please enter the title of your project:",
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
      message: "(Required) Please enter a description for your README:",
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
      message: "(Required) Please enter installation instructions for your README:",
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
        message: "(Required) Please enter how to use your application:",
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
        name: "contributors",
        message: "Please enter any contribution guidelines:",
      },
      {
        type: "input",
        name: "test",
        message: "Please enter any testing instructions:",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select the project license(s):",
        choices: [
            "MIT",
            "Apache",
            "MPL",
            "GPL",
            "Public Domain",
            "Proprietary",
        ],
      },
      {
        type: "input",
        name: "username",
        message: "(Required) Please enter your GitHub username:",
        validate: (usernameInput) => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter username!");
                return false;
            }
        }
      },
      {
        type: "input",
        name: "email",
        message: "(Required) Please enter your email address:",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter email!");
                return false;
            }
        }
      },
    ])}

const writeFile = (data) => {
    fs.writeFile("dist/README.md", data, (err) => {
        if (err) throw new Error(err);
    })
}


promptUser()
  .then(projectData => {
    console.log(projectData)
    return generateReadme(projectData);
  })
  .then(readmeMarkdown => {
    return writeFile(readmeMarkdown);
  })
  .catch((err) => {
    console.log(err)
  })
