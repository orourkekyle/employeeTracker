// require everything
const inquirer = require("inquirer");
const db = require("./db/query");
require("console.table");
var connection = require("./db/connection");
const util = require("util");
const { async } = require("rxjs");


// connect function

// create main prompt function
async function mainPrompt(){
    const { userChoice } = await inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            Message: "What would you like to do with your employees?",
            choices: [
                {
                    name: "View Employees",
                    value: "viewEmployees"
                },
                {
                    name: "View Department",
                    value: "viewDepartment"
                },
                {
                    name: "View Roles",
                    value: "viewRoles"
                },
                {
                    name: "Add Employee",
                    value: "addEmployee"
                },
                {
                    name: "Update Employee Role",
                    value: "updateRole"
                },
                {
                    name: "Delete Employee",
                    value: "deleteEmployee"
                },
                {
                    name: "Quit",
                    value: "quit"
                },
            ]
        }
    ])
};

// switch case to call functions based on userChoice
switch (userChoice) {
    case "viewEmployees":
        return viewEmployees();
    case "viewDepartment":
        return viewDepartment();
    case "viewRoles":
        return viewRoles();
    case "addEmployee":
        return addEmployee();
    case "updateRole":
        return updateRole();
    case "deleteEmployee":
        return deleteEmployee();
    case "quit":
        return quit();

};

// create async functions for each "view" userChoice
async function viewEmployees(){
    var emp = await db.grabAllEmployee();
    console.table(emp);
};

async function viewDepartment(){

};

async function viewRoles(){

};

// create functions for add+remove+update userChoice

function addEmployee(){
    // prompt to get employee data
};

function deleteEmployee(){
    // prompt to choose employee to delete
};

function updateRole(){

};

function quit(){

};

mainPrompt();