DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL, 
 PRIMARY KEY (id)

);

DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(30),
 salary DECIMAL(10),
 department_id INT,
 PRIMARY KEY (id),
 FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE

);

DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
 id INT auto_increment PRIMARY KEY NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT NOT NULL,
 manager_id INT,
 CONSTRAINT FK_ROLE FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
 CONSTRAINT FK_MANAGER FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
