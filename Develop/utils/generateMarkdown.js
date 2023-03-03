// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT' :
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'ISC' :
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    case 'zLib-license' :
      return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
    case 'Mozilla Public License 2.0' :
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`    

    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
   const generateMarkdown = ({ title, installation, bio, usage, dependecies, license, github, email}) => {

  return `# ${title}

    ## Table Of Contents 
    * [Bio](#bio)
    * [installation](#intallation)
    * [license](#license)
    * [github](#github)
    * [email](#email)

    ## Installation
    ${installation}

    ## Bio
    ${bio}

    ## Usage 
    ${usage}

    ## Dependecies
    ${dependecies}

    ## License
    
    [![License][https://img.shields.io/badge/License-${license}-brightgreen.svg)][https://opensource.org/licenses/${license}]
    ## Github
    ${github}

    ## Email
    ${email}
  
  `;

   }

module.exports = generateMarkdown;
