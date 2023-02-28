// function to generate markdown for README
const generateMarkdown = (data) => {
  let licenseBadge;
  if (data.license === 'MIT') {
    licenseBadge = '![MIT License](https://img.shields.io/badge/License-MIT-green.svg)';
  } else if (data.license === 'Apache') {
    licenseBadge = '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (data.license === 'GPL') {
    licenseBadge = '![GPL License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)';
  } else if (data.license === 'BSD') {
    licenseBadge = '![BSD License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  }
    return `# ${data.title}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  
  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This application is covered under the ${licenseBadge} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For additional questions, please contact ${data.email}. Visit my [GitHub profile](https://github.com/${data.github}) to see more of my work.
  
  `;
  }
  
  module.exports = generateMarkdown;
  



