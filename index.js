const Manager = require("./starter/lib/Manager.js");
const Engineer = require("./starter/lib/Engineer.js");
const Intern = require("./starter/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array to store team members
const teamMembers = [];

// Function to prompt for manager details
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team manager's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the team manager's office number:",
      },
    ])
    .then((answers) => {
      // Create a Manager object and add it to the teamMembers array
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      // Move to the next step in the menu
      promptMenu();
    });
}

// Function to prompt for engineer details
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      // Create an Engineer object and add it to the teamMembers array
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      // Move to the next step in the menu
      promptMenu();
    });
}

// Function to prompt for intern details
function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((answers) => {
      // Create an Intern object and add it to the teamMembers array
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      // Move to the next step in the menu
      promptMenu();
    });
}

// Function to prompt user with menu options
function promptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
      },
    ])
    .then((answers) => {
      // Based on the user's choice, call the appropriate function
      switch (answers.menu) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        case "Finish building the team":
          // Generate the HTML and finish the process
          generateHTML();
          break;
      }
    });
}

// Function to generate HTML using the render function and write it to a file
function generateHTML() {
    const html = render(teamMembers);
    // Check if the output directory exists, create it if not
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    // Write the HTML to the specified output file
    fs.writeFileSync(outputPath, html);
    console.log(`Team HTML generated at ${outputPath}`);
  }
  
  // Start the process by prompting for manager details
  promptManager();

