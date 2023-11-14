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
      .then((response) => {
        if (response.shape === 'Square') {
            const square = new Square(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./tests/Square.svg', square.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        } else if (response.shape === 'Circle') {
            const circle = new Circle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./tests/Circle.svg', circle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        } else {
            const triangle = new Triangle(response.characters, response.shapeColor, response.textColor)
            fs.writeFile('./tests/Triangle.svg', triangle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            })
        }
    })
    .then(() => {
        return console.log("Generated logo.svg")
    })