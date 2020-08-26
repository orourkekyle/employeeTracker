// Set up MySQL connection.
const mysql = require("mysql");
// npm install dotenv before run the server
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_pass,
    database: "employees"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    connection.end();
});

connection.connect();
module.exports = connection;