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

  class Circle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" style="fill:${this.color}" />
          ${this.renderLabel(150, 125, 60)}
        </svg>`;
    }
  }
  describe("shape", () => {
    it("Square renders correctly", () => {
      const square = new Square("JJJ", "Blue", "Red");
      const expectedValue = `<svg version="1.1" width="300" height="200" viewBox="0, 0, 100, 100" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" style="fill:Blue" />
          <text x="62" y="62" font-size="50" text-anchor="middle" fill="Red">JJJ</text>
        </svg>`;
      const value = square.render();
      expect(value).toEqual(expectedValue);
    });
  
    it("Circle renders correctly", () => {
      const circle = new Circle("JJJ", "Blue", "Red");
      const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" style="fill:Blue" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">JJJ</text>
        </svg>`;
      const value = circle.render();
      expect(value).toEqual(expectedValue);
    });
  
    it("Triangle renders correctly", () => {
      const triangle = new Triangle("JJJ", "Blue", "Red");
      const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="200,50 70,275 330,275" style="fill:Blue" />
          <text x="200" y="165" font-size="45" text-anchor="middle" fill="Red">JJJ</text>
        </svg>`;
      const value = triangle.render();
      expect(value).toEqual(expectedValue);
    });
  });