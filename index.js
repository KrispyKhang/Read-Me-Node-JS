// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "name",
        message: "What is your name?",
    },
    {
        type: 'input',
        name: "creator",
        message: "What is your Github username?",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email?",
    },
    {
        type: 'input',
        name: "title",
        message: "What is your project title?",
    },
    {
        type: 'input',
        name: "description",
        message: "Name your project description",
    },
    {
        type: 'input',
        name: "require",
        message: "What are the project requirements?",
    },
    {
        type: 'input',
        name: "installations",
        message: "What are the installations for this project?",
    },
    {
        type: 'input',
        name: "usage",
        message: "What are the languages and technologies used in this project?",
    },
    {
        type: 'input',
        name: "contributions",
        message: "Enter any contributor's Github username on this project?",
    },
    {
        type: 'input',
        name: "tests",
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
        ]}
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
