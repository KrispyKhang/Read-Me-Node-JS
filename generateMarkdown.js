// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="none") {
    return `![License Badge]](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;  
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Requirements](#require)
* [Installations]](#installations)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [License](#projectLicense)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Requirements
${data.require}
## Languages and Technologies Used
${data.usage}
## Contact Me
*Name: ${data.name}
*Email: ${data.email}
*Github: (https://github.com/${data.creator}/)
## Contributors
* Github Users: ${data.contributions}
## Testing
${data.tests}
## Licenses
${data.license}
`;
}

module.exports = generateMarkdown;

