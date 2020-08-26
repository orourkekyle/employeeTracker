// class db + all query's
const connection = require("./connection");

function addEmployee(first_name, last_name, title, salary, department_id){
    console.log("Creating New Employee");
    var query = connection.query(
        "INSERT INTO employee SET ?",
        {
            first_name: first_name,
            last_name: last_name,
            title: title,
            salary: salary,
            department_id: department_id
        },
        function (err, res){
            if (err) throw err;
            console.log(res.affectedRows + "employee created!\n");
            
        }
    )
}