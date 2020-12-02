var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});


function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Quit",
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Roles"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "View Departments":
                    viewDepartments();
                    break;

                case "View Roles":
                    viewRoles();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case "Update Employees":
                    updateEmployees();
                    break;

            }
        });
}
























