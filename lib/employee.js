class employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role
    }

    getName () {
        return this.name;
    }

    getEmail () {
        return this.email;
    }

    getID () {
        return this.id;
    }

    getRole () {
        return 'employee';
    }
};

module.exports = employee;










// const Choices = require("inquirer/lib/objects/choices");
// const { prependOnceListener } = require("process");

// const manager = 'MANAGER';
// const ENGINEER = 'ENGINEER';
// const INTERN = 'INTERN';

// prompt([
//     {
//         type: 'list',
//         message: 'Who do you want to create?',
//         choices: [
//             { name: 'Manager', value: 'MANAGER' },
//             { name: 'Engineer', value: 'ENGINEER' },
//             { name: 'Intern', value: 'INTERN' },
//         ]
//     }
// ])

// const promptUserQuestions = ({ usertype }) => prompt([
//     {
//         name: 'name',
//         type: 'input',
//         message: 'What is the persons name?'
//     },
//     {
//         name: 'email',
//         type: 'input',
//         message: 'What is your email?',

//     },
//     {
//         name: 'email',
//         type: 'input',
//         message: 'What is your email?',
//     },
// ])

// promptType().then((answers) => {
//     if (answer.userType === MANAGER) {
//         prependOnceListener.push(new MANAGER(answers.name, answers.email))
//     }
// })