// TODO: Include packages needed for this application using ES6 language 
//Import the filesystem module. This is included within Node core so no need to download using npm 
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./generateMarkdown');

//TODO: Create an array of questions for user input
const questions = [ 
    { 
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    validate: titleInput => {
      if(titleInput){
        return true; 
      } else {
        console.log('Enter a Title!');
        return false; 
        }
    }
  },
  {
    type: 'input',
    message: 'Provide a description of the project:', 
    name: 'Description',
    validate: DescriptionInput => {
      if(DescriptionInput){
        return true; 
      } else {
        console.log('Enter a Description!');
        return false; 
      }
    }
  },
  {
    type: 'input',
    message: 'What are the steps required for installation?', 
    name: 'Steps',
    validate: StepsInput => {
      if(StepsInput){
        return true; 
      } else {
        console.log('Enter Steps!');
        return false; 
      }
    }
  }, 
  {
    type: 'input',
    message: 'How should this app be used?', 
    name: 'Usage', 
    validate: UsageInput => {
      if(UsageInput){
        return true; 
      } else {
        console.log('Enter Usage!');
        return false; 
      }    
    }
  },
  {
    type: 'list',
    message: 'Choose a license:', 
    name: 'license', 
    choices: ['MIT', 'GPL', 'Apache', 'None'],
    validate: licenseList => {
      if(licenseList){
        return true; 
      } else {
        console.log('Choose a license!');
        return false; 
      }    
    }
  },
  {
    type: 'input', 
    message: 'Contributors: ', 
    name: 'Contributors', 
    validate: ContributorsInput => {
      if(ContributorsInput){
        return true; 
      } else {
        console.log('Enter Contributors!');
        return false; 
      }
    }
  },
  {
    type: 'input',
    message: 'What commands are used to test this app? (optional)',
    name: 'Commands', 
  }, 
  {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'UserName', 
    validate: UserNameInput => {
      if(UserNameInput){
        return true; 
      } else {
        console.log('Enter UserName!');
        return false; 
      }
    }
  },
  {
    type: 'input', 
    message: 'What is your email address?', 
    name: 'email',
    validate: emailInput => {
      if(emailInput){
        return true; 
      } else {
        console.log('Enter Email!');
        return false; 
      }
    }
  }
]

//Function to write README File
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true
          });
      });
  });
};



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(function(answer) {
        console.log(answer);
        var htmlContent = generateMarkdown(answer);
        writeToFile(htmlContent); 
      })
}
    


// Function call to initialize app
init();


// Need to export
module.exports = questions; 