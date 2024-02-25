// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// Define the Manager class, extending the Employee class
class Manager extends Employee {
  // Constructor to initialize Manager-specific properties along with common properties from Employee
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Override the getRole method to return Manager
  getRole() {
    return "Manager";
  }

  // Method specific to Manager to get the office number
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Export the Manager class
module.exports = Manager;