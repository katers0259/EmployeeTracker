DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department(
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE employeerole(
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    employeerole VARCHAR(30),
    salary DECIMAL(12,4),
    department_id INT NOT NULL,
    PRIMARY Key (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES employeerole(id),
    FOREIGN KEY (manager_id) REFERENCES employeerole(id)
);

SELECT * FROM department;
SELECT * FROM employeerole;
SELECT * FROM employee;