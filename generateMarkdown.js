const fs = require('fs');
const inquirer = require('inquirer');
const indexJS = require('./index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
  let badge = ''; 
  if(license === 'MIT'){
    badge = '![Github license](https://img.shields.io/badge/License-MIT-green.svg)'
  } else if(license === 'GPL'){
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPL-green.svg)'
  } else if (license === 'Apache') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
   } else {
  badge = ''; 
  }
  return badge; 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function LicenseLink(license) {
let licenseLink = ''; 

if(license === 'MIT'){
  licenseLink = 'https://choosealicense.com/licenses/mit/';
} else if(license === 'GPL'){
  licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
} else if (license === 'Apache'){
  licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
} else {
  licenseLink = ''; 
}
return licenseLink; 
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function LicenseSection(license) {
 let licenseSection = ''; 
 if(license === 'None') {
  licenseSection = ''; 
 } else {
  licenseSection = 
  `License: ${license}`
 }
 return licenseSection; 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

  ## ${LicenseSection(data.license)} ${LicenseBadge(data.license)}
  ### ${LicenseLink(data.license)}
  
  ## Description: 
  ${data.Description}

  ## Table of Contents: 
  ### [License](#license)
  ### [Description](#description)
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributors](#contributors)
  ### [Tests](#tests)
  ### [Questions](#questions)


  ## Installation: 
  ${data.Steps}

  ## Usage: 
  ${data.Usage}

  ## Contributors: 
  ${data.Contributors}

  ## Tests: 
  ${data.Commands}

  ## Questions: 
  ### UserName: 
  ${data.UserName}
  ### Email: 
  ${data.email}
`;
}

module.exports = generateMarkdown;