// node modules
const fs = require('fs')
const inquirer = require('inquirer')

// Team profiles
const manager = require('./manager')
const engineer = require('./engineer')
const intern = require('./intern')

const teamArray = [ ];

// manager prompts

const addManager = () => {
    return inquirer.prompt ({
        name: 'name',
        type: 'input',
        message: 'who is the manager of this team?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter manager ID',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter manager email'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Enter manager office number'
    })
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

