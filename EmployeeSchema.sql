DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department(
    id INT(11) PRIMARY KEY,
    name VARCHAR(30)
)

CREATE TABLE employeerole(
    id INT(11) PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,4),
    department_id INT(30)
)

CREATE TABLE employee(
    id INT(11) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT(30),
    manager_id INT(30)
)

SELECT * FROM employee_DB