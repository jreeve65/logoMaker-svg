const {renderSVG} = require('../lib/svg.js');
describe('renderSVG()',()=>{
    it('should render a template literal to set up an svg doc',()=>{
        const nString = renderSVG();
        expect(nString).toEqual( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
    })
})