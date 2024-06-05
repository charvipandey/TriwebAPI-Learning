CREATE DATABASE EmployeeDB;
USE EmployeeDB;

CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeName VARCHAR(255) NOT NULL
);

CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectName VARCHAR(255) NOT NULL
);

CREATE TABLE Assignments (
    AssignmentID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT,
    ProjectID INT,
    AssignmentDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);

INSERT INTO Employees (EmployeeName) VALUES 
('Alice'),
('Bob'),
('Charlie');

INSERT INTO Projects (ProjectName) VALUES 
('Project Alpha'),
('Project Beta'),
('Project Gamma');

INSERT INTO Assignments (EmployeeID, ProjectID, AssignmentDate) VALUES 
(1, 1, '2024-01-15'),
(2, 1, '2024-02-20'),
(3, 2, '2024-03-10'),
(1, 2, '2024-04-12'),
(2, 3, '2024-05-05'),
(3, 3, '2024-05-18');

SELECT Employees.EmployeeName, Projects.ProjectName, COUNT(*) AS AssignmentsCount
FROM Assignments
INNER JOIN Employees ON Assignments.EmployeeID = Employees.EmployeeID
INNER JOIN Projects ON Assignments.ProjectID = Projects.ProjectID
GROUP BY Employees.EmployeeName, Projects.ProjectName
ORDER BY Employees.EmployeeName, Projects.ProjectName;
