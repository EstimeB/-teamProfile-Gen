const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call parent Constructor
        super(name, id, email)
        
        this.github = github;
    }
    getGitHub() {
     return this.getGitHub;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;