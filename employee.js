const Choices = require("inquirer/lib/objects/choices");
const { prependOnceListener } = require("process");


prompt({
    type : 'list',
    message: 'Who do you want to create?',
    choices: [
        {name: 'Manager', value: 'MANAGER'},
        {name: 'Engineer', value: 'Engineer'},
        {name: 'Intern', value: 'INTERN'},
    
    ]})

const promptUserQuestions = ({ usertype }) => prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the persons name?'
    },
    {
        name: 'skills',
        type: 'list',
        message: 'What are your skills?',
        choices: ['CSS', 'HTML', 'JS'],
        when: (answers) =>
    },
])

con

promptType().then((answers) => {
    if (answer.userType === MANAGER) {
        prependOnceListener.push( new MANAGER(answers.name, answers.email))
    }
})