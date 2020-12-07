DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL, 
 PRIMARY KEY (id)

);

CREATE TABLE roles (
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(30) NOT NULL,
 salary DECIMAL(10,4),
 department_id INT NOT NULL,
 PRIMARY KEY (id)
 FOREIGN KEY department_id REFERENCES departments(id)

);

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT NOT NULL,
 manager_id INT NOT NULL
 PRIMARY KEY (id)
 FOREIGN KEY role_id REFERENCES roles(id)
 FOREIGN KEY manager_id REFERENCES employee(id)

);

INSERT INTO departments (name) values ('HR');
INSERT INTO departments (name) values ('Engineering');
INSERT INTO departments (name) values ('Logistics');
INSERT INTO departments (name) values ('Customer Support');
INSERT INTO departments (name) values ('Project Management');

INSERT INTO roles (title, salary, department_id) values ('Developers', '$105000', 2);
INSERT INTO roles (title, salary, department_id) values ('Human Resource', '$101000', 1);
INSERT INTO roles (title, salary, department_id) values ('Logistics Manager', '$65000', 3);
INSERT INTO roles (title, salary, department_id) values ('Customer Care', '$75000', 4);
INSERT INTO roles (title, salary, department_id) values ('Program Manager', '$125000', 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Jane', 'Austen', '1', '131');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Mark', 'Twain', '2', '231');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Lewis', 'Carroll', '3', '331');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Andre', 'Asselin', '4', '431');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Brad', 'Twins', '5', '531');




SELECT * FROM departments;
SELECT * FROM  roles;
SELECT * FROM employee;