// requirements
const inquirer = require("inquirer");
const db = require("./db");
const { async } = require("rxjs");
var Table = require('cli-table');

// primary prompt
inquirer.prompt([
    {
        type: "list",
        choices: ["View Employees", "View Departments", "View Roles", "Add Employee", "Update Employee Role", "Delete Employee"],
        name: "firstAction"
    }
]).then(function(response){
    console.log("User choice: "+response.firstAction);
    if (response.firstAction === "View Employees"){
      viewEmp();

    }
    else if (response.firstAction === "View Departments"){

    }
    else if (response.firstAction === "View Roles"){

    }
    else if (response.firstAction === "Add Employee"){

    }
    else if (response.firstAction === "Update Employee Role"){

    }
    else if (response.firstAction === "Delete Employee"){

    }
});

async function viewEmp(){
    const emp = await db.viewEmployee();

    
 
// instantiate
var table = new Table({
    head: ['ID', 'Firt Name', "Last Name","Role ID","Manager ID"]
});
 for(var i=0;i<emp.length;i++){
     console.log("Inside for loop");
     var temp = [];

     for(var key in emp[i]){
         temp.push(emp[i][key]);
         console.log("Temp: "+JSON.stringify(temp));
     }
     table.push(temp);
 }
// table is an Array, so you can `push`, `unshift`, `splice` and friends
 
console.log(table.toString());
    //console.table(emp);
}
// add employee prompt

// update employee role prompt