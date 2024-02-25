// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// Define the Engineer class, extending the Employee class
class Engineer extends Employee {
  // Constructor to initialize Engineer-specific properties along with common properties from Employee
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Override the getRole method to return Engineer
  getRole() {
    return "Engineer";
  }

  // Method specific to Engineer to get the GitHub username
  getGithub() {
    return this.github;
  }
}

// Export the Engineer class
module.exports = Engineer;