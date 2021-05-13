// node modules
const fs = require('fs')
const inquirer = require('inquirer')

// Team profiles
const manager = require('./manager')
const engineer = require('./engineer')
const intern = require('./intern')
const { type } = require('os')

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

const addEmployee = () => {
    console.log('Adding employees');

    return inquirer.prompt ([
        {
            name: 'role',
            type: 'list',
            message: ['engineer', 'intern']
        },
        {
            name: 'name',
            type: 'input',
            message: "What's the name of the employee?", 
        },
        {
            name: 'email',
            type: 'input',
            message: "What's your email?", 
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: "What's your office number?", 
        },
        {
            name: 'github',
            type: 'input',
            message: "What is your Github?", 
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: "What's your office number?", 
        },
        {
            name: 'school',
            type: 'input',
            message: "What school did you go to?", 
        },
    ])
}

then(employeeData => { 
    let { name, id, email, role, github, school, confirmAddEmployees } = employeeData;
    let employee;

    if(role === 'engineer') {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
    }
    else if (role === 'intern') {
        employee = new Intern (name, id, email, school);
        console.log(employee);
    };
    
    teamArray.push(employee);

    if (confirmAddEmployees) {
        return addEmployee(teamArray);
    } else {
        return teamArray;
    }
})

