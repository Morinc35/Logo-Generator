const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/Square.js');
const { Circle } = require('./lib/Circle.js');
const { Triangle } = require('./lib/Triangle.js');

    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter three characters.',
          name: 'characters',
        },
        {
          type: 'input',
          message: 'Enter text color for the text.',
          name: 'textColor',
        },
        {
          type: 'rawlist',
          message: 'Choose a shape from the list below.',
          choices: [
            { name: 'Square', value: 'Square' },
            { name: 'Circle', value: 'Circle' },
            { name: 'Triangle', value: 'Triangle' },
          ],
          name: 'shape',
        },
        {
          type: 'input',
          message: 'Input a color for the shape.',
          name: 'shapeColor',
        },
      ])
      