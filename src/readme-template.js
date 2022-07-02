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
    ${description}
    `
}



module.exports = (templateData) => {
    

}