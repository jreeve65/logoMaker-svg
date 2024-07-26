const fs = require('fs');
const inqur = require('inquirer');
const Circle = require('./lib/circle.js');
// const sv = require('./lib/svg');

inqur
.prompt([
{
    type:"list",
    name:"shape",
    message: "What kind of shape would you like the logo to be?",
    choices:['circle','square','triangle'],
},
{
    type: "input",
    name:"text",
    message:" Enter text for the logo (Must not be more than 3 Characters)",
},
{
    type:"input",
    name:"shapeColor",
    message:"please enter a color for the logo shape",

},
{
    type:"input",
    name:"txtColor",
    message:"please enter a text color",
}
])
.then( (answers)=>{
    if(answers.shape ==='circle'){
        circ = new Circle(answers.shape,answers.shapeColor,answers.text,answers.txtColor);
        return circ;
    }

}

).then((shp)=>  {
    const shapeToRender = shp.renderCircle();
    fs.writeFile('./examples/logo.svg',shapeToRender,(err)=> err? console.log('oops something went wrong'):console.log('Generated logo.svg'))
});
//===============================================================example file path for examples============================================================================
// .then((answers)=>
//     fs.writeFile('./examples/answers.txt',`${answers.shape}\n${answers.text} \n${answers.shapeColor}\n${answers.txtColor}`,(err)=> err? console.log('oops something went wrong'):console.log('success!'))
// );