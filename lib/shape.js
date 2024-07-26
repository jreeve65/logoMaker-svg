// const render = require('../lib/svg.js');
const { renderSVG } = require('./svg');
class Shape {
    constructor(name, color, text, textColor) {
        this.name = name;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    setName(name) {
        this.name = name;
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}
class Circle extends Shape {
    constructor(name, color, text, textColor) {
        super(name, color, text, textColor)
    }

    renderCircle() {
        return `${renderSVG()}<circle r="80" cx="150" cy="110" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;

    }
}
class Triangle extends Shape {
    constructor(name,color,text,textColor){
        super(name,color,text,textColor);
    }
    renderTriangle(){
        // adjust text params to better fit the triangle
        return `${renderSVG()}<polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }

}

module.exports = {Shape,Circle,Triangle}