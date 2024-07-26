const Shape = require('../lib/shape')


class Circle extends Shape{
    constructor(name,color,text,textColor) {
        super(name,color,text,textColor)
    }
    
    setName(name){
        this.name =name;
    }
}



module.exports = Circle;