const mysql = require('mysql')
const db = mysqlcreateConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stage",
})

module.exports =db;