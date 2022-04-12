const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const creatFile = require('./lib/Cfile');

let fileHTML = "";

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'name',
                choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit App"],
                message: 'Employer name?',
            }]).then(function (response) {
                switch (response.name) {
                    case "Add Manager":
                        managerHire();
                        break;
                    case "Add Engineer":
                        engineerHire();
                        break;
                    case "Add Intern":
                        internHire();
                        break;
                    default:
                        generateHTML();
                        console.log(fileHTML);
                }

            })
}
let question = [
    {
        type: "input",
        message: "Enter Employee Name",
        name: "empname"
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

function managerHire() {
    let managerQuestions = question;
    managerQuestions.push({
        type: "input",
        message: "Enter Manager Office Number",
        name: "manofficenum",
    })
    inquirer.prompt(managerQuestions).then(function (response) {
        let theManager = new Manager(response.empname, response.empid, response.empemail, response.manofficenum);
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
        init();
    })
}

function engineerHire() {
    let engineerQuestions = question;
    engineerQuestions.push({
        type: "input",
        message: "Enter Engineer GitHub UserName",
        name: "enggithub",
    })
    inquirer.prompt(engineerQuestions).then(function (response) {
        let theEngineer = new Engineer(response.empname, response.empid, response.empemail, response.enggithub);
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
        init();
    })
}

function internHire() {
    let internQuestions = question;
    internQuestions.push({
        type: "input",
        message: "Enter Intern School",
        name: "intschool",
    })
    inquirer.prompt(internQuestions).then(function (response) {
        let theIntern = new Intern(response.empname, response.empid, response.empemail, response.intschool);
        fileHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${theIntern.getRole()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Name: ${theIntern.name}</h6>
    <p class="card-text">Id: ${theIntern.id}</p>
    <a href="mailto:${theIntern.email}" class="card-link"></a>
    <p>Office Number: ${theIntern.school}</p>
  </div>
</div>
        `
        init();
    })
}

function generateHTML() {
    fs.writeFileSync('index.html', fileHTML, (err) => {
        if (err) throw err;
    })
}

init();