const fs = require('fs');
const inqur = require('inquirer');
const Circle = require('./lib/circle.js');



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
    if(answers.shape ==='circle'&& answers.text.length<=3){
        circ = new Circle(answers.shape,answers.shapeColor.toLowerCase(),answers.text.toUpperCase(),answers.txtColor.toLowerCase());
        return circ;
    } else{
        throw new Error('Invalid input please make sure your input does not exceed 3 characters');
    }

}

).then((shp)=>  {
    const shapeToRender = shp.renderCircle();
    fs.writeFile('./examples/logo.svg',shapeToRender,(err)=> err? console.log('oops something went wrong'):console.log('Generated logo.svg'))
})
.catch((err) => (console.log(err)));
