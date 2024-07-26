const {Shape,Circle,Triangle} = require('../lib/shape.js');
const { renderSVG } = require('./svg.js');
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
    describe('Circle', () => {
        describe('Circle Constructed', () => {
            it('should be an instance of Circle class', () => {
                const circ = new Circle();
                expect(circ).toBeInstanceOf(Circle);
            });}
        );
        describe('setName()', () => {
            const circ = new Circle();
            const cName = 'Circle'
            circ.setName(cName);
            expect(circ.name).toBe(cName);
        });
        describe('setColor', () => {
            it('should reassign the color of the Circle', () => {
                const circ = new Circle('Circle', 'Red', 'JOR', 'Black')
                const nColor = 'Blue';
                circ.setColor(nColor);
                expect(circ.color).toBe(nColor);
            });
        });
        describe('init Text color', () => {
            it('should initialize the text color properly', () => {
                const circ = new Circle();
                const tcolor = "Black";
                circ.setTextColor(tcolor);
                expect(circ.textColor).toBe(tcolor);
            });
        });
        describe('renderCircle()', () => {
            it('should return a template literal', () => {
                const circ = new Circle('circle', 'Red', 'JOR', 'black');
    
    
                expect(circ.renderCircle()).toEqual(`${renderSVG()}<circle r="80" cx="150" cy="110" fill="Red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">JOR</text></svg>`);
            });
        });
        
        
        

});
describe('Triangle',()=>{
    describe('Triangle Constructed',()=>{
        it('should create an instance of triange',()=>{
            const tri = new Triangle();
            expect(tri).toBeInstanceOf(Triangle)
        });
    });
    describe('renderTriangle()',()=>{
        it('should return a template literal',()=>{
            const tri = new Triangle('triangle', 'green', 'JOR', 'gold');
            expect(tri.renderTriangle()).toEqual(`${renderSVG()}<polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="140" font-size="55" text-anchor="middle" fill="gold">JOR</text></svg>`)
        })
    })
});

});

