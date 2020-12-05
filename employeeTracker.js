const mysql = require("mysql");
const inquirer = require("inquirer");
const database = require('./class.js');

const table = require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "lucasscott20",
    database: "employee_db"
});
connection.connect(function (err) {
    if (err) throw err;
    mainMenu();
   
    
});
// need to be able to add Departments, Roles and Employees
//View Departments, Roles and Employees
//Update Employee Roles
//BONUS 
//Update Employee Managers
//view Employee Managers
//Delete Departments, Roles, and Employees
// add console.table



function mainMenu() {
    inquirer
        .prompt({
            type: "rawlist",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View Departments",
                "View Employees",
                "View Roles",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View Departments":
                    viewDepartment();
                    break;
                case "View Employees":
                    viewEmployee();
                    break;
                case "View Roles":
                    viewRole();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                case "Update Employees Role":
                    updateEmployee();
                    break;
                case "Delete Department":
                    deleteDepartment();
                    break;
                case "Delete Role":
                    deleteRole();
                    break;
                case "Delete Employee":
                    deleteEmployee();
                    break;
                case "Exit":
                    connection.end()

            }
        })
        
}


function viewEmployee() {

    const query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })
}

function viewRole() {

    const query = "SELECT * FROM employeerole"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })
}

function viewDepartment() {

    const query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        mainMenu()
    })
}


function addRole() {
    inquirer
    .prompt({
        type: "rawlist",
        name: "role",
        message: "What Role Would you like to add?",
        choices: [
            "Intern",
            "Legal Team Lead",

        ]
    })

}

















