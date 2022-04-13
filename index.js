const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const createFile = require('./lib/Cfile');

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
        <div class="card-header">
            <h5 class="card-subtitle">${theManager.name}</h5>
            <br>
            <h6 class="card-title">${theManager.getRole()}</h6>
        </div>
            <ul class="list-group">
                <li class="list-group-item"><p class="card-text">ID: ${theManager.id}</p></li>
                <li class="list-group-item">Email: <span class="email"><a href="mailto:${theManager.email}" class="card-link">${theManager.email}</a></span></li>
                <li class="list-group-item"><p>Office Number: ${theManager.officeNumber}</p></li>
            </ul>
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
        <div class="card-header">
            <h5 class="card-subtitle">${theEngineer.name}</h5>
            <br>
            <h6 class="card-title">${theEngineer.getRole()}</h6>
        </div>
            <ul class="list-group">
                <li class="list-group-item"><p class="card-text">ID: ${theEngineer.id}</p></li>
                <li class="list-group-item">Email: <span class="email"><a href="mailto:${theEngineer.email}" class="card-link">${theEngineer.email}</a></span></li>
                <li class="list-group-item">GitHub: <span class="github"><a href="https://github.com/${theEngineer.github}" class="card-link">${theEngineer.github}</a></span></li>
            </ul>
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
        <div class="card-header">
            <h5 class="card-subtitle">${theIntern.name}</h5>
            <br>
            <h6 class="card-title">${theIntern.getRole()}</h6>
        </div>
            <ul class="list-group">
                <li class="list-group-item"><p class="card-text">ID: ${theIntern.id}</p></li>
                <li class="list-group-item">Email: <span class="email"><a href="mailto:${theIntern.email}" class="card-link">${theIntern.email}</a></span></li>
                <li class="list-group-item"><p>School: ${theIntern.school}</p></li>
            </ul>
    </div>
        `
        init();
    })
}

const path = require('path');
const DB_DIR = path.resolve(__dirname, 'db');
const dbPath = path.join(DB_DIR, 'team.html');

function generateHTML() {
    if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR)
    }

    fs.writeFileSync(dbPath, createFile(fileHTML), 'utf8')
}

// Run program
init();