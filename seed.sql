USE employees_db;

INSERT INTO departments (name) 
values ('HR'),
('Engineering'),
('Logistics'),
('Customer Support'),
("Accounting"),
("Sales"),
('Project Management');

USE employees_db;

INSERT INTO roles (title, salary, department_id) 
values ('Developers', 95000, 2),
 ('Human Resource', 75000, 1),
 ('Logistics Manager', 65000, 3),
 ('Customer Care', 75000, 4),
 ("Accountant", 70000, 5),
 ("Sales Lead", 90000, 6),
 ("Software Engineer", 85000, 2),
 ("Lead Engineer", 100000, 2),
 ('Program Manager', 98000, 7);

USE employees_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Jane', 'Austen', 1, 2),
 ('Mark', 'Twain', 2, 1),
 ('Lewis', 'Carroll', 3, 4),
 ('Andre', 'Asselin', 4, 3),
 ("Duke", "Johnson", 4, 3),
 ("Josh", "Johnson", 5, 3),
 ("Leslie", "Knope", 6, 5),
 ("Theresa", "Louise", 2, 1),
 ('Brad', 'Twins', 5, 5);


SELECT * FROM departments;
SELECT * FROM  roles;
SELECT * FROM employee;