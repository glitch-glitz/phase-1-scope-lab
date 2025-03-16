// Declare a global variable customerName using var
var customerName = "bob";

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
  bestCustomer = "not bob"; // Declaring without var, let, or const makes it global
}

// Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Modify global bestCustomer
}

// Declare a global constant leastFavoriteCustomer
const leastFavoriteCustomer = "initial value";

// Function to attempt to change the leastFavoriteCustomer constant (this should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "poor bob"; // Will cause an error
}
