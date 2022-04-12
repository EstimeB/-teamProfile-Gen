const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getGithub() {
     return this.officeNumber;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;