const employee = require('./employee')

class Engineer extends employee {
    constructor (name, id, email, github) {
        this.github = github;
    }

    getgithub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer;