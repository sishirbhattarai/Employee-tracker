var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    port: 3306,
    user:"root",
    password:"Wfhtoday12$3",
    database:"employees_db"
});

connection.connect(function(err) {
    if (err) throw err;

    runSearch();
});

function runSearch() {
   inquirer
     .prompt({
         name: "action",
         type: "rawlist",
         message: "What do you like to do?",
         choices: [
             
         ]
     })
}