const Shape = require('../lib/shape')


class Circle extends Shape{
    constructor(name,color,text,textColor) {
        super(name,color,text,textColor)
    }
    
    setName(name){
        this.name =name;
    }
    setColor(color){
        this.color = color;
    }
    setText(text){
        this.text = text;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
}



module.exports = Circle;