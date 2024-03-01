//program1
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

function displayEmployeeObjects(employees) {
  employees.sort((a, b) => b.salary - a.salary); // Sort employees based on salary in descending order
  employees.forEach(employee => {
    console.log(`Name: ${employee.name}, Salary: ${employee.salary}`);
  });
}

// Example usage
const employee1 = new Employee("John", 50000);
const employee2 = new Employee("Alice", 60000);
const employee3 = new Employee("Bob", 55000);

const employees = [employee1, employee2, employee3];

displayEmployeeObjects(employees);
//program 2

const stringWithNumbers = 'A1B2C3D4E5F6G7H8I9J10';
const stringWithoutNumbers = stringWithNumbers.replace(/\d+/g, '');
console.log(stringWithoutNumbers);

//program 3

function addNewPrefix(str) {
  if (str.startsWith("New!")) {
    return str; // Return original string if it already starts with "New!"
  } else {
    return "New!" + str; // Concatenate "New!" in front of the given string
  }
}
console.log(addNewPrefix("Example")); // Output: New!Example
console.log(addNewPrefix("New!Already")); // Output: New!Already

//program 4
function csvToArray(csvString) {
  // Split the CSV string into an array of rows
  const rows = csvString.split('\n');
  
  // Initialize a 2D array to store the values
  const result = [];

  // Iterate over each row
  rows.forEach(row => {
    // Split the row by commas to get individual values
    const values = row.split(',');
    // Add the values to the result array
    result.push(values);
  });

  return result;
}

// Example usage
const csvString = `1,John,Doe
2,Jane,Smith
3,Jack,Johnson`;
const array2D = csvToArray(csvString);
console.log(array2D);


//program 5
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome Page</title>
<script>
  // Function to prompt user for their name and display a welcome message
  function greetUser() {
    var userName = prompt("Please enter your name:");
    if (userName != null && userName != "") {
      alert("Welcome, " + userName + "!");
    }
  }

  // Function to display the current date in the specified format
  function displayCurrentDate() {
    var currentDate = new Date();
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById("currentDate").textContent = formattedDate;
  }

  // Function to display the last modified date of the document
  function displayLastModifiedDate() {
    var lastModified = new Date(document.lastModified);
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById("lastModified").textContent = formattedDate;
  }
</script>
</head>
<body onload="displayCurrentDate(); displayLastModifiedDate();">
  <h1>Welcome Page</h1>
  <button onclick="greetUser()">Click here to enter your name</button>
  <p id="currentDate"></p>
  <p>Last Modified: <span id="lastModified"></span></p>
</body>
</html>

