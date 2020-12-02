USE employee_DB;

INSERT INTO department (name)
VALUES ('Engineer'), ('Manager'), ('Legal'), ('Sales');

INSERT INTO employeerole (role, department_id)
VALUES ('Lawyer', 3),
VALUES ('Lead Engineer', 1),
VALUES ('Manager', 2),
VALUES ('Lead Salesman', 4),
VALUES ('Lawyer', 3),
VALUES ('Software Engineer', 1),
VALUES ('Salesman', 4),
VALUES ('Engineer', 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Juan', 'Pedro', 3, null),
('Louise', 'Snow', 2, 2),
('Ben', 'Stiller', 4, null),
('Chaz', 'Archer', 4, 4),
('Bruce', 'Springstien', 1, 1)



SELECT * FROM department;
SELECT * FROM employeerole;
SELECT * FROM employee;