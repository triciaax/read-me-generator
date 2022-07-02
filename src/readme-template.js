const addStringIfExists = (item, string) => {
    if (item) {
        return string
    } else {
        return null
    }
}
// optional sections are contributors, test, and license - if they dont exist we dont add them to toc
const buildToc = (contributors, test, license) => {
    let tocString = `
    ## Table of Contents
    [Description](#description)
    [Installation](#install)
    [Usage](#usage)
    ${addStringIfExists(contributors, "[Contribution Guidelines](#contrib)")}
    ${addStringIfExists(test, "[Test Instructions](#test)")}
    ${addStringIfExists(license, "[License Terms](#license)")}
    [Questions](#questions)
    `
}


const buildHeader = (title, description) => {
    return `
    # ${title}
    <a name="description"/>
    ## Description
    ${description}
    `
}

const buildBody = (installation, usage, contributors, test, license) => {
    let contribString = `
    <a name="contrib"/>
    ## Contribution
    ${contributors}
    `
    let testString = `
    <a name="test"/>
    ## Tests
    ${test}
    `
    let licenseString = `
    <a name="license"/>
    ## Licenses
    This project is licensed under the following license(s):
    ${license.map((string) => {
        return `- ${string}`
    })}
    `
    
    return `
    <a name="install"/>
    ## Installation
    ${installation}
    <a name="usage"/>
    ## Usage
    ${usage}
    ${addStringIfExists(contributors, contribString)}
    ${addStringIfExists(test, testString)}
    ${addStringIfExists(license, licenseString)}
    `
}



module.exports = (templateData) => {
    

}