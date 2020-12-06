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
             "Want to view all departments?",
             "Want to view all roles?",
             "Want to view all employees?",
             "Want to add departments?",
             "Want to add roles?",
             "Want to add employees?",
             "Want to update roles?",
             "Want to exit?"
         ]
     })
     .then(function(answer) {
         switch (answer.action) {
         case "Want to view all departments?":
             viewDepartments();
             break;

         case "Want to view all roles?":
             viewRoles();
                break;

         case "Want to view all employees?":
             viewEmployees();
             break;

         case "Want to add departments?":
             addDepartments();
             break;

         case "Want to add roles?":
             addRoles();
             break;

         case "Want to add employees?":
             addEmployees();
             break;

         case "Want to update roles?":
             updateRoles();
             break;

         case "Want to exit?":
             exit();
            break;
         }
     })

     function exit() {
        console.log("Closing program....")
        process.exit(0); 
     }
}