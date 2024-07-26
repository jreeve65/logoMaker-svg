const Shape = require('../lib/shape');
const { renderSVG } = require('./svg');


class Circle extends Shape{
    constructor(name,color,text,textColor) {
        super(name,color,text,textColor)
    }
    
    renderCircle(){
        return`${renderSVG()}<circle r="80" cx="150" cy="110" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
       
    }
}



module.exports = Circle;