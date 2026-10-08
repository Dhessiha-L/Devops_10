CREATE TABLE IF NOT EXISTS projects (id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(120) NOT NULL,location VARCHAR(120) NOT NULL,status VARCHAR(30) NOT NULL,progress INT NOT NULL,budget DECIMAL(10,2) NOT NULL,budget_used INT NOT NULL);
INSERT INTO projects(name,location,status,progress,budget,budget_used) VALUES
('Green Valley Residency','Chennai','Active',72,18.5,64),
('Lakeview Towers','Coimbatore','Active',48,24.0,42),
('Urban Heights','Madurai','Planning',15,12.8,18),
('Palm Grove Villas','Trichy','Completed',100,9.6,100);
