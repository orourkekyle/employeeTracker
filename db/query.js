// require connection to DB
const connection = require("./connection");

// create DB class
class dataBase {

    // construct connection from ./connection.js to be created when a query is called
    constructor(connection){
        this.connection = connection;
    }

    // display employees query
    grabAllEmployee(){
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, role.title, role.salary FROM employee JOIN role ON role_id=role.id INNER JOIN department ON department_id=role.department_id ORDER BY last_name, CONCAT(manager.first_name, ' ' ,manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id;")
    }

    // display departments query
    grabAllDepartments(){
        return this.connection.query("SELECT * FROM department ORDER BY id");
    }

    // display roles query
    grabAllRoles(){
        return this.connection.query("SELECT department.name, role.id, role.title, role.salary FROM department INNER JOIN role ON department_id=role.department_id ORDER BY name;")
    }

    // add employees query

    // update employee role query
}

module.exports = new dataBase(connection);