const inquirer = require("inquirer");
//fs is the file system
const fs = require("fs");
const util = require("util");

// array of questions for user
promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your file?",
    },
    //description
    {
      type: "input",
      name: "description",
      message: "Give a brief description of your project.",
    },
    //installation
    {
      type: "input",
      name: "installation",
      message: "How to install the programs needed to run this application?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of this application?",
    },
    //liscense *append a liscense to the top of the page under the title
    {
      type: "checkbox",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT ![lisence](https://img.shields.io/npm/l/index.js)", 
      "Apache License", 
      "ISC License", 
      "GNU GPLv3"],
    },
    //contributing
    {
      type: "input",
      name: "contributing",
      message: "How can the user contribute to this project?",
    },
    
    //qestions *add email address and link to github account
    {
      type: "input",
      name: "email",
      message: "What is the best email to reach you at?",
    },
    {
      type: "input",
      name: "github",
      message: "Add a link to your github profile",
    }
  ]);
//info to generate to file
const generateREADME = (answers) =>
  //add the data to go into the readme
  `# ${answers.name}

## Lisence\n ${answers.license}\n
## Description \n${answers.description}\n
## Table of Contents \n 
  [License](#lisence)\n
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Questions](#questions)\n
  
## Installation\n ${answers.installation}\n
## Usage\n ${answers.usage} \n
## Contributing\n ${answers.contributing}\n
## Questions\n
For any questions please email me at \n
${answers.email}\n
or open an issue at my Github\n
${answers.github}`;

promptUser()
  .then((answers) =>
    writeFileAsync("READMEEXAMPLE.md", generateREADME(answers))
  )
  .then(() => console.log("Successfully wrote to READMEEXAMPLE.md"))
  .catch((err) => console.error(err));



const writeFileAsync = util.promisify(fs.writeFile);
