const addStringIfExists = (item, string) => {
    if (item) {
        return string
    } else {
        return ""
    }
}
// optional sections are contributors, test, and license - if they dont exist we dont add them to toc
const buildToc = (contributors, test, license) => {
    return `
## Table of Contents
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
${addStringIfExists(contributors, "[Contribution Guidelines](#contribution)  \n")}${addStringIfExists(test, "[Test Instructions](#tests)  \n")}${addStringIfExists(license, "[License Terms](#licenses)  \n")}[Questions](#questions)  `
}


const buildHeader = (title, description) => {
    return `
# ${title}
## Description  
${description}  
`
}

const buildBody = (installation, usage, contributors, test, license) => {
    let contribString = `
## Contributing
${contributors}
`

let testString = `
## Tests
${test}
`
let licenseString;
if (license.length > 0) {
    licenseString = `
## License
This project is licensed under the following license(s):  
${license.map((string) => {
    return `- ${string}  `
})}
`
} else {
    licenseString = `
## Licenses
This project is not licensed under any license.
`
}


    return `
## Installation 
${installation}

## Usage
${usage}

${addStringIfExists(contributors, contribString + "  \n")}${addStringIfExists(test, testString + "  \n")}${addStringIfExists(license, licenseString + "  \n")}`
}

const buildQuestions = (username, email) => {
    return `
## Questions 
With any questions on the project, I can be reached at my GitHub [here](https://github.com/${username}) or by email [here](mailto:${email}).  
`
}


module.exports = (templateData) => {
    const {title, description, installation, usage, contributors, test, license, username, email} = templateData
    return `
    ${buildToc(contributors, test, license)}
    ${buildHeader(title, description)}
    ${buildBody(installation, usage, contributors, test, license)}
    ${buildQuestions(username, email)}
    `
}