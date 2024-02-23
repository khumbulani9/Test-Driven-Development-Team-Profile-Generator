// TODO: Write code to define and export the Employee class
// Define the Employee class, which serves as the parent class for manager, engineer, and intern 
class Employee {
 // constructor to initialize the common properties for all employees
 construct(name, id, email) {
  this,name = name;
  this.id = id;
  this.email = email;
 }

 // Methods to get employee details
 getName() {
  return this.name;
 }

 getId() {
  return this.id; 
 }

 getEmail() {
  return this.email;
}

// Method to get the role (common for all employees, overridden in subclasses)
getRole() {
  return "Employee";
}
}

// Export the Employee class to make it available for other modules
module.exports = Employee;