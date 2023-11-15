const { Circle } = require('./Circle');
const { Triangle } = require('./Triangle');
const { Square } = require('./Sqaure');

class Shape {
    constructor(label, color, textColor) {
      this.label = label;
      this.color = color;
      this.textColor = textColor;
    }
  
    renderLabel(x, y, fontSize) {
      return `<text x="${x}" y="${y}" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.label}</text>`;
    }
  }

  class Square extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" style="fill:${this.color}" />
          ${this.renderLabel(62, 62, 50)}
        </svg>`;
    }
  }