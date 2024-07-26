// const Shapes = require('../lib/shape.js');
const Circle = require('../lib/circle.js');

describe('Circle',()=> {
    describe('Circle Constructed', ()=>{
        it('should be an instance of Circle class', ()=> {
            const circ = new Circle();
            expect(circ).toBeInstanceOf(Circle);
        });
    });
    describe('setName()',()=>{
        const circ = new Circle();
        const cName ='Circle'
        circ.setName(cName);
        expect(circ.name).toBe(cName);
    })
});