DROP DATABASE IF EXISTS your_last_grocery_list;

CREATE DATABASE your_last_grocery_list with owner = marymatthews;

\connect your_last_grocery_list;

CREATE TABLE users (
  id SERIAL NOT NULL,
  username varchar(50) NOT NULL UNIQUE,
  password varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE lists (
  id SERIAL NOT NULL,
  store_name varchar(75) NOT NULL,
  user_id int NOT NULL references users(id),
  PRIMARY KEY (ID)
);

CREATE TABLE items (
  id SERIAL NOT NULL,
  list_id int NOT NULL references lists(id),
  need_to_buy BOOLEAN NOT NULL,
  category varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


