-- Create MenuItem table
CREATE TABLE IF NOT EXISTS menu_item (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(50),
    price DOUBLE,
    rating DOUBLE,
    image_url VARCHAR(255)
);

-- Insert sample data
INSERT INTO menu_item (name, type, price, rating, image_url) VALUES
('Mexican Pizza', 'Vegetarian', 12.99, 4.8, 'assets/food-menu-1.png'),
('Soft Drinks', 'Beverage', 3.99, 4.5, 'assets/food-menu-2.png'),
('French Fry', 'Vegetarian', 5.49, 4.6, 'assets/food-menu-3.png'),
('Burger Kingo', 'Non-Vegetarian', 5.49, 4.7, 'assets/food-menu-4.png');
