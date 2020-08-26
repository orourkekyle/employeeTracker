// requirements
const inquirer = require("inquirer");
// switch case with inquirer

// primary prompt
launchQuestions = [
    {
        type: "list",
        choices: ["View Employees", "View Departments", "View Roles", "Add Employee", "Update Employee Role", "Delete Employee"],
        name: "firstAction"
    }
].then(function(response){
    if (response.firstAction === "View Employees"){

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
// add employee prompt

// update employee role prompt