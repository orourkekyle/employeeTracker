// npm install dotenv and mysql before run the server
const mysql = require("mysql");
const dotenv = require('dotenv').config();

// Connect to DB
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_pass,
    database: "employees"
});

module.exports = connection;