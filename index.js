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

    const addEngineer = () =>{

        console.log('adding engineer')

        return inquirer.prompt ([
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
            }
        ]).then(answers => {
            employee = new Engineer (answers.name, answers.id, answers.email, answers.github);
            teamArray.push(employee);
            addEmployee()
        } )
    };

    const addIntern = () => {

        console.log('adding intern')

        return inquirer.prompt ([
            {
                
                type: 'input',
                name: 'name',
                message: "What's the name of the intern?", 
            },
            {
                
                type: 'input',
                name: 'email',
                message: "What's your email?", 
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID.",
            },   
            {
                
                type: 'input',
                name: 'github',
                message: "What is your Github?",
            },
            {
                
                type: 'input',
                name: 'school',
                message: "What school did you attend?",
            }
        ]).then(answers => {
            employee = new Intern (answers.name, answers.id, answers.email, answers.github , answers.school);
            teamArray.push(employee);
            addEmployee()
        } )

    };
    
    const addEmployee = () => {
        console.log('Adding employees');
    
        return inquirer.prompt (
            {
                name: 'role',
                type: 'list',
                message: 'Please choose the correct role',
                choices: ['engineer', 'intern' , 'No more users to add']
            })

            .then(userChoice => {
                if(userChoice.role === 'engineer') {
                    //employee = new Engineer (name, id, email, github);
                   // console.log(employee);

                    addEngineer()

                    
                }
                else if (userChoice.role === 'intern') {
                    addIntern()
                } else if(userChoice.role === 'No more users to add'){

                    pageHTML = generateHTML(teamArray)
                    writeFile(pageHTML)


                }
            })
            
        
        
    //     .then(employeeData => { 
    //     let { name, id, email, role, github, school, confirmAddEmployees } = employeeData;
    //     let employee;
    
        
        
    //     teamArray.push(employee);
    
    //     if (confirmAddEmployees) {
    //         return addEmployee(teamArray);
    //     } else {
    //         return teamArray;
    //     }
    // })
    };  
    
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
        addEmployee()
    })
};
    
try {
    addManager()
} catch (error) {
    console.log(error);
}

//     // .then(addEmployee)
//     // .then(teamArray => {
//     //     return generateHTML(teamArray);
//     // })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .catch(err => {
//     console.log(err);
// });