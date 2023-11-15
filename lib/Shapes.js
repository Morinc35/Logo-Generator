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