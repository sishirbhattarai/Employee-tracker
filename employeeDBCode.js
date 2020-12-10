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
             "Want to update employee roles?",
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
}
function viewDepartments() {
    var query = `SELECT departments.id AS "department id", departments.name AS "department name"
                 FROM departments`
    connection.query(query, function(err, res) {
        if (err) throw err;

        console.log("\n");
        console.table(res)
    })
    runSearch();
}

function  viewRoles() {
    var query = `SELECT roles.id AS "role ID", roles.title AS "Role Title", roles.salary AS "Salary", roles.department_id AS "department id"
                  FROM roles;`
    connection.query(query, function(err, res) {
        if (err) throw err;

        console.log("\n");
        console.table(res)
    })
    runSearch();
}

function viewEmployees() {
    var query = `SELECT employee.id, CONCAT (employee.first_name, "   ", employee.last_name) AS "Full Employee Name", roles.title, roles.salary, employee.role_id, departments.name AS "department name"
                 FROM employee
                 INNER JOIN roles on roles.id = employee.role_id
                 INNER JOIN departments on departments.id = roles.department_id;`

    connection.query(query, function(err, res) {
        if (err) throw err;

         console.log("\n");
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

          console.log("\n");
          
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
          message: "What is the department id  for this role?"
         },
    
    ])
      .then(function(answer) {
          console.log("Your entered " + answer.title + "," + answer.salary + "and" + answer.dptid);
          var query = `INSERT INTO roles (title, salary, department_id) values ('${answer.title}', '${answer.salary}', '${answer.dptid}')`;
          connection.query(query, function(err, res) {
            if (err) throw err;

            console.log("\n");
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
        message: "What is the firstname of the employee you want to add?"
       },

       {
        name: "lastname",
        type: "input",
        message: "What is the firstname of the employee you want to add?"

       },
       {
        name: "roleid",
        type: "input",
        message: "What role id of the employee?"
       },

       {
        name: "managerid",
        type: "input",
        message: "What manager id for the employee?"

       }
           
  ])
    .then(function(answer) {
      var query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('${answer.firstname}', '${answer.lastname}', '${answer.roleid}', '${answer.managerid}')`;
      connection.query(query, function(err, res) {
        if (err) throw err;


        console.log("\n");
        
    })
    runSearch();
})

}

function exit() {
    console.log("Closing program....")
    process.exit(0); 
 }


function updateEmployeeRoles() {
    var query = `SELECT employee.id, CONCAT (employee.first_name, "   ", employee.last_name) AS "Full Employee Name", roles.title, roles.salary, employee.role_id, departments.name AS "department name"
                 FROM employee
                 INNER JOIN roles on roles.id = employee.role_id
                 INNER JOIN departments on departments.id = roles.department_id;`

//Used this table to show full employee tablle for use to change the roles of an employee

    connection.query(query, function (err, res) {
        console.table(res);

    inquirer
    .prompt([
     {
      name: "employeeId",
      type: "input",
      message: "What is the employeeId that you want to change the role of?"
     },

     {
      name: "newRoleId",
      type: "input",
      message: "What is the new role Id for this employee?"
     }   
])
  .then(function(answer) {
    var query = `UPDATE employee SET role_id =${answer.newRoleId} WHERE id = ${answer.employeeId};`

    console.log("You can sucessfully changed the role")

    var addedQuery = `SELECT employee.id, CONCAT (employee.first_name, "   ", employee.last_name) AS "Full Employee Name", roles.title, roles.salary, employee.role_id, departments.name AS "department name"
                 FROM employee
                 INNER JOIN roles on roles.id = employee.role_id
                 INNER JOIN departments on departments.id = roles.department_id;`

        var query = connection.query(query, function (err, res) {
          if (err) {
            console.log(err);
          }
          
        connection.query(addedQuery, function (err, res) {
        
                    runSearch();
          });
          // console.log(query.sql);
        });
      });
  });
}


// function updateEmployeeRoles() {

// const query = `SELECT employee.id, employee.first_name, employee.last_name
//                 FROM employee`
// connection.query(query, function(err, res) {


// var employeeArray = [res.first_name, res.last_name]

// console.log(array);

//    inquirer
//       .prompt([
//         {
//           type: "list",
//           name: "employee",
//           message: "Which employee's role do you want to update?",
//           choices: employeeArray
//         }
//       ]);
//   console.log(employee)  ;
// })

// }


     

