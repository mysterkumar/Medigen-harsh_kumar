-- products to store details like name, manufacturer, price, and quantity.
-- salts to list different salts and their descriptions.
-- A many-to-many relationship table (product_salts) linking products and salts.
-- reviews to capture customer ratings and feedback for each product.
-- descriptions for additional content related to products.

-- Create database
CREATE DATABASE IF NOT EXISTS medigen_db;
USE medigen_db;

-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    price DECIMAL(10, 2),
    quantity VARCHAR(50),
    image_url TEXT
);

-- Salts Table
CREATE TABLE salts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

-- Product-Salt (Many-to-Many)
CREATE TABLE product_salts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    salt_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (salt_id) REFERENCES salts(id)
);

-- Reviews Table
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    rating INT,
    review_text TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Descriptions Table
CREATE TABLE descriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    content TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
