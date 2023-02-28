const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const promptUser = () => inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])

  promptUser()
    .then((data) => {
        const readme = generateMarkdown(data);

        fs.writeFile('README.md', readme, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
        );
    });
