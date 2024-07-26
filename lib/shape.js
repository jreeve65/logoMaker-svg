const render = require('../lib/svg.js');
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
module.exports = Shape