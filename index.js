// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "projectTitle",
        message: "What is your prjoect title?",
    },
    {
        type: 'input',
        name: "projectDescription",
        message: "Name your project description",
    },
    {
        type: 'input',
        name: "projectInstalltionInstructions",
        message: "What are the installations for this project?",
    },
    {
        type: 'input',
        name: "projectUsage",
        message: "What is the use case of this project?",
    },
    {
        type: 'input',
        name: "projectContributions",
        message: "Enter the contribution instructions?",
    },
    {
        type: 'input',
        name: "projecTests",
        message: "Methods you use to test your project.",
    },
    {
        type: 'list',
        name: "projectLicense",
        message: "Select the licenses used.",
        choices: [
            "MIT",
            "MOZILLA",
            "IBM",
            "NONE",
        ]
    },
    {
        
    }


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md file...");
        writeToFile("./Final/README.md", generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
