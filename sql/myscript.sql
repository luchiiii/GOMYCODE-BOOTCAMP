-- Data Definition Language

CREATE DATABASE IF NOT EXISTS product_store;

USE product_store;

CREATE TABLE
    IF NOT EXISTS customers (
        customer_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(20) NOT NULL,
        customer_tel VARCHAR(15) NOT NULL UNIQUE
    );

CREATE TABLE
    IF NOT EXISTS products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(20) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        CHECK (price >= 0)
    );

CREATE TABLE
    IF NOT EXISTS orders (
        order_id INT AUTO_INCREMENT PRIMARY KEY,
        quantity INT NOT NULL,
        total_amount DECIMAL(10, 2) NOT NULL,
        order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        customer_id INT,
        FOREIGN KEY (customer_id) REFERENCES customers (customer_id) ON DELETE CASCADE,
        product_id INT,
        FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
    );

ALTER TABLE customers ADD customer_name VARCHAR(20) NOT NULL;
ALTER TABLE customers ADD customer_tel VARCHAR(15) NOT NULL UNIQUE;
SHOW DATABASES;
DESCRIBE customers;
DESCRIBE products;
DESCRIBE orders;


-- Data Manipulation Language
INSERT INTO
    customers (customer_name, customer_tel)
VALUES
    ("Jomiloju Discount", "+23490252328675"),
    ("Ashimi Seide", "+234765467567"),
    ("Justice Emeka", "+2348145679876");

INSERT INTO
    products (product_name, price)
VALUES
    ("Versace Shoe", 20000),
    ("Nike AF1", 500000),
    ("Cargo Pant", 250000);

SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;

SELECT * FROM orders WHERE customer_id = "1";

INSERT INTO orders (quantity, total_amount, customer_id, product_id) VALUES(1, 2000, 3, 1),(2, 6000, 1, 2),(2, 40000, 7, 3),(1, 250000, 9, 3);
