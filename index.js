// const indexHTML = require('./index');
const generateHTML = require('./src/generateHTML');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

// const Employee = require('./employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];

// manager prompts
const addManager = () => {
        return inquirer.prompt ([
        {
            name: 'name',
            type: 'input',
            message: 'Please enter managers name?'
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
            message: 'Enter managers office number'
        }
    ])
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
                message: 'Please choose the correct role',
                choices: ['engineer', 'intern']
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
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID.",
            },   
            {
                name: 'github',
                type: 'input',
                message: "What is your Github?",
                //when: (input) => input.role === "Engineer", 
            },
            {
                name: 'school',
                type: 'input',
                message: "What school did you attend?",
                when: (input) => input.role === "Intern", 
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more team members?',
            }    
        ])
        
        .then(employeeData => { 
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
    };      
    
    const writeFile = data => {
        fs.writeFile('./index.html', data, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("Your team profile has been successfully created! Please check out the index.html")
            }
        })
    }; 

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
});
