// const Shapes = require('../lib/shape.js');
const Circle = require('../lib/circle.js');
const { renderSVG } = require('./svg.js');

describe('Circle', () => {
    describe('Circle Constructed', () => {
        it('should be an instance of Circle class', () => {
            const circ = new Circle();
            expect(circ).toBeInstanceOf(Circle);
        });
    });
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