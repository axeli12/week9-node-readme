// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ("./utils/generateMarkdown");




// TODO: Create an array of questions for user input
inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
     },
     {
       type: 'input',
       name: 'installation',
       message: 'What did you use to accomplish this?'
     },
        
     {
        type: 'input',
        name: 'bio',
        message: 'Give a quick description of your application',
     },
     {
      input: 'input',
      name: 'usage',
      message: 'what useage should people have for this'
     },
     {
      type: 'input',
      name: 'dependecies',
      message: 'Which command should the user use to insall dependecies'
     },
     {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license type',
        choices: ["MIT", "ISC", "zLib-License", "Mozilla Public License 2.0"],
     },
     {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
     },
     {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
     },
     
    ])
    .then((data) =>{
         const readAns = generateMarkdown(data)
        fs.writeFile("README.md", readAns, (err) =>
        err ? console.log(err) : console.log("Success new readme created!")
        );
    });
   