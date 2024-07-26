const fs = require('fs');
const inqur = require('inquirer');
const {Shape,Circle,Triangle,Square} = require('./lib/shape.js');



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
    validate: (userInput) =>{
        if (userInput.length > 3){
            return('Logo Text cannot contain more than 3 Characters');
        }else{
            return true;
        }
    } 
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
        const circ = new Circle(answers.shape,answers.shapeColor.toLowerCase(),answers.text.toUpperCase(),answers.txtColor.toLowerCase());
        const shapeToRender = circ.renderCircle();
        return shapeToRender;
    } else if(answers.shape ==='square'){
        const sqr = new Square(answers.shape,answers.shapeColor.toLowerCase(),answers.text.toUpperCase(),answers.txtColor.toLowerCase());
        const shapeToRender = sqr.renderSquare();
        return shapeToRender;


    }
    else{
        const tri = new Triangle(answers.shape,answers.shapeColor.toLowerCase(),answers.text.toUpperCase(),answers.txtColor.toLowerCase());
        const shapeToRender= tri.renderTriangle();
        return shapeToRender;
    }
    
}

).then((shp)=>  {
    
    fs.writeFile('./examples/logo.svg',shp,(err)=> err? console.log('oops something went wrong'):console.log('Generated logo.svg'))
})

