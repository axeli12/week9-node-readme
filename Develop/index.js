// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const badge = require ("./utils/generateMarkdown");
const { type } = require('os');

// function to creat readme file

const readGen = ({ title, bio, license, github, email}) =>
`
`

// TODO: Create an array of questions for user input
inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is your project name?",
     },
        
     {
        type: "input",
        name: "bio",
        message: "Give a quick description of your application",
     },
     {
        type: "checkbox",
        name: "license",
        message: "Choose a license type",
        choices: ["MIT", "ISC", "zLib-License", "Mozilla Public License 2.0"],
     },
     {
        type: "input",
        name: "github",
        message: "What is your github username?",
     },
     {
        type: "input",
        name: "email",
        message: "What is your email?",
     },
     
    ])
    .then((answers) =>{
        const generateRead = readGen(answers);

        fs.writeFile("readme.md", generateRead, (err) =>
        err ? console.log(err) : console.log("Success new readme created!")
        );
    });
