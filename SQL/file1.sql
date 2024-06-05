CREATE DATABASE OrderDB;
USE OrderDB;

CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(255) NOT NULL
);

CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (CustomerName) VALUES 
('Customer A'),
('Customer B'),
('Customer C');

INSERT INTO Orders (CustomerID, OrderDate) VALUES 
(1, '2024-03-24'),
(2, '2024-04-23'),
(3, '2024-01-20'),
(1, '2024-05-14');

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
