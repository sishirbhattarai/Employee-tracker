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

         case "Want to update employee roles?":
             updateEmployeeRoles();
             break;

         case "Want to exit?":
             exit();
            break;
         }
     })
function viewDepartments() {
    var query = "SELECT * FROM employees_db.departments";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res)
    })
    runSearch();
}

function  viewRoles() {
    var query = "SELECT * FROM employees_db.roles";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res)
    })
    runSearch();
}

function viewEmployees() {
    var query = "SELECT * FROM employees_db.employee";
    connection.query(query, function(err, res) {
        if (err) throw err;

      console.table(res)
    })
    runSearch();
}

function addDepartments() {
    inquirer
      .prompt({
          name: "departmts",
          type: "input",
          message: "What department you would like to add?"
      })
      .then(function(answer) {
          console.log("Your entered " + answer.departmts);
          var query = `INSERT INTO departments (name) values ('${answer.departmts}')`;
          connection.query(query, function(err, res) {
            if (err) throw err;

            console.table(res)
        })
        runSearch();
    })
}

function addRoles() {
    inquirer
      .prompt([
          {
          name: "title",
          type: "input",
          message: "What role you would like to add?"
         },

         {
          name: "salary",
          type: "input",
          message: "What salary you would like to enter for this role?"

         },
         {
          name: "dptid",
          type: "input",
          message: "What is the department id if for this role?"
         },
    
    ])
      .then(function(answer) {
          console.log("Your entered " + answer.title + "," + answer.salary + "and" + answer.dptid);
          var query = `INSERT INTO roles (title, salary, department_id) values ('${answer.title}', '${answer.salary}', '${answer.dptid}')`;
          connection.query(query, function(err, res) {
            if (err) throw err;

            console.table(res)
        })
        runSearch();
    })
    
}

function addEmployees() {
    inquirer
      .prompt([
          {
          name: "firstname",
          type: "input",
          message: "What is the first name of the employee?"
         },

         {
          name: "lastname",
          type: "input",
          message: "What is the lastname name of the employee"

         },
         {
          name: "roleid",
          type: "input",
          message: "What is the role id for this employee's role?"
         },
         {
          name: "managerid",
          type: "input",
          message: "What is the manager id of this employee?"
         },
    
    ])
      .then(function(answer) {
          console.log("Your entered " + answer.firstname + "," + answer.lastname + "," + answer.roleid + "and" + answer.managerid);
          var query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('${answer.firstname}', '${answer.lastname}', '${answer.roleid}', '${answer.managerid}')`;
          connection.query(query, function(err, res) {
            if (err) throw err;

            console.table(res)
        })
        runSearch();
    })
    

}

function updateEmployeeRoles() {
    inquirer
      .prompt([
          {
          name: "first",
          type: "input",
          message: "Please provide first name of the employee you want to update the role of"
         },

         {
          name: "last",
          type: "input",
          message: "Please provide first name of the employee you want to update the role of"

         },
         {
          name: "roletitle",
          type: "input",
          message: "What role title you want to change it to?"
         },
             
    ])
      .then(function(answer) {


    })

}

function exit() {
        console.log("Closing program....")
        process.exit(0); 
     }
     

}