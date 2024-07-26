const fs = require('fs');
const inqur = require('inquirer');
const sh = require('./lib/shape');
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
console.log(answers);
return answers;
}

);
//===============================================================example file path for examples============================================================================
// .then((answers)=>
//     fs.writeFile('./examples/answers.txt',`${answers.shape}\n${answers.text} \n${answers.shapeColor}\n${answers.txtColor}`,(err)=> err? console.log('oops something went wrong'):console.log('success!'))
// );