const inquirer = require('inquirer');
const fs = requirer('fs');
const Engineer = require('./lib/Engineer');
const Manager = requirer('./lib/Manager');
const Intern = requirer('./lib/Intern');


function init(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'name',
            choices:["Add Manager","Add Engineer","Add Intern","Exit App"],
            message: 'Employer name?',
        }]).then(function(response){
            switch(response.name){
                case "Add Manager":
                    managerHire();
                    break;
                case "Add Enginerr":
                    engineerHire();
                    break;
                case "Add Intern":
                    inetrnHire();
                    break;
                default:
                    generateHTML();
            }

        })
}
let question = [
    {
        type:"input",
        message:"Enter Employee Name",
        name:"empname"
    },
    {
        type: "input",
        massage: "Enter Employer Id",
        name: "empid",
    },
    {
        type: "input",
        message: "Enter Employer Email",
        name: "empemail"
    }
]

let fileHTML = "";


function managerHire() {
    let managerQuestions = question;
    managerQuestions.push({
        type:"input",
        message:"Enter Manager Office Number",
        name:"manofficenum",
    })
    inquirer.prompt(managerQuestions).then(function(response){
        let theManager = new Manager(response.empname.response.empid.response.empemail.response.manofficenum);
        fileHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${theManager.getRole()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Name: ${theManager.name}</h6>
    <p class="card-text">Id: ${theManager.id}</p>
    <a href="mailto:${theManager.email}" class="card-link"></a>
    <p>Office Number: ${theManager.officeNumber}</p>
  </div>
</div>
        `
    })
}

function engineerHire() {
    let engineerQuestions = question;
    engineerQuestions.push({
        type:"input",
        message:"Enter Engineer GitHub UserName",
        name:"enggithub",
    })
    inquirer.prompt(engineerQuestions).then(function(response){
        let theEngineer = new Manager(response.empname.response.empid.response.empemail.response.enggithub);
        fileHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${theEngineer.getRole()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Name: ${theEngineer.name}</h6>
    <p class="card-text">Id: ${theEngineer.id}</p>
    <a href="mailto:${theEngineer.email}" class="card-link"></a>
    <p>Office Number: ${theEngineer.github}</p>
  </div>
</div>
        `
    })
}
