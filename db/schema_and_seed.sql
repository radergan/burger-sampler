DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(64) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Drive-In Burger', 1);
INSERT INTO burgers (burger_name, devoured) VALUES ('Jalapeno Spice-Burger', 0);
INSERT INTO burgers (burger_name, devoured) VALUES ('Quad-Burger', 0);