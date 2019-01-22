DROP DATABASE IF EXISTS your_last_grocery_list;

CREATE DATABASE your_last_grocery_list;

USE your_last_grocery_list;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE lists (
  id int NOT NULL AUTO_INCREMENT,
  store_name varchar(75) NOT NULL,
  user_id int NOT NULL references users(id),
  PRIMARY KEY (ID)
);

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  list_id int NOT NULL references lists(id),
  need_to_buy BOOLEAN NOT NULL,
  category varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


