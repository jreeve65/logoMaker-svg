const Shape = require('../lib/shape.js');
describe('Shape', () => {
    describe('Shape Constructed', () => {
        it('should be an instance of Shape class', () => {
            const circ = new Shape();
            expect(circ).toBeInstanceOf(Shape);
        });
    });
    describe('Intitialize name', () => {
        it('should set the name of the shape properly', () => {
            const shapeName = 'Circle';
            const circ = new Shape(shapeName);
            expect(circ.name).toBe(shapeName);
        }
        )
    });
    describe('Initialize color', () => {
        it('should set the color of the shape properly', () => {
            const shapeColor = "Red";
            const circ = new Shape('circle', shapeColor);
            expect(circ.color).toBe(shapeColor);
        }
        )
    });
    describe('initialize text', () => {
        it('should set the text of the shape properly', () => {
            const shapeText = 'JOR';
            const circ = new Shape('circle', "Red", shapeText);
            expect(circ.text).toBe(shapeText);
        }
        )
    });
    describe('initialize textColor', () => {
        it('Should set the text color properly', () => {
            const shapeTxtColor = 'Black';
            const circ = new Shape('circle', 'Red', 'JOR', shapeTxtColor);
            expect(circ.textColor).toBe(shapeTxtColor);
        }
        )
    });


});

