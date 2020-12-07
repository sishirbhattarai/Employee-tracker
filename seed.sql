USE employees_db;

INSERT INTO departments (name) values ('HR');
INSERT INTO departments (name) values ('Engineering');
INSERT INTO departments (name) values ('Logistics');
INSERT INTO departments (name) values ('Customer Support');
INSERT INTO departments (name) values ('Project Management');

USE employees_db;

INSERT INTO roles (title, salary, department_id) values ('Developers', 95000, 2);
INSERT INTO roles (title, salary, department_id) values ('Human Resource', 75000, 1);
INSERT INTO roles (title, salary, department_id) values ('Logistics Manager', 65000, 3);
INSERT INTO roles (title, salary, department_id) values ('Customer Care', 75000, 4);
INSERT INTO roles (title, salary, department_id) values ('Program Manager', 98000, 5);

USE employees_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Jane', 'Austen', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Mark', 'Twain', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Lewis', 'Carroll', 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Andre', 'Asselin', 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Brad', 'Twins', 5, 5);


SELECT * FROM departments;
SELECT * FROM  roles;
SELECT * FROM employee;