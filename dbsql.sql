CREATE TABLE Heros (
  id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(200),
    powerstat varchar(200),
    image text,
    description text,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

